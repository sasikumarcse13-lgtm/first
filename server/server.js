import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import multer from 'multer'
import mysql from 'mysql2/promise'
import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
dotenv.config({ path: path.join(__dirname, '.env') })

// Normalize environment values copied from Hostinger/Windows .env files.
for (const key of ['DB_HOST','DB_PORT','DB_USER','DB_PASSWORD','DB_NAME','PORT','FRONTEND_ORIGIN','CORS_ORIGIN','BLOG_ADMIN_TOKEN']) {
  if (typeof process.env[key] === 'string') process.env[key] = process.env[key].trim()
}
if (process.env.FRONTEND_ORIGIN) process.env.FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN.replace(/\/+$/, '')
const DIST = path.join(ROOT, 'dist')
const PUBLIC = path.join(ROOT, 'public')
const PORT = Number(process.env.PORT || 5000)
const FRONTEND_ORIGIN = (process.env.FRONTEND_ORIGIN || process.env.CORS_ORIGIN || '*').replace(/\/+$/, '')
const ADMIN_TOKEN = process.env.BLOG_ADMIN_TOKEN || ''
const FORCE_NOINDEX = String(process.env.VITE_NOINDEX_ALL || process.env.NOINDEX_ALL || '').trim().toLowerCase() === 'true'
const ROBOTS_INDEX = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex,follow'
const PRODUCTION_HOSTS = new Set(['collegeshine.com', 'www.collegeshine.com'])
function isTemporaryHost(req) {
  const host = String(req?.hostname || req?.get?.('host') || '').split(':')[0].toLowerCase()
  return Boolean(host && !PRODUCTION_HOSTS.has(host))
}
function shouldNoindexRequest(req, requestedNoindex = false) {
  return FORCE_NOINDEX || isTemporaryHost(req) || requestedNoindex
}
function enforceNoindex(html) {
  const robots = ROBOTS_NOINDEX
  let output = html.replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
  output = output.replace(/<meta name="googlebot"[^>]*>/i, `<meta name="googlebot" content="${robots}" />`)
  output = output.replace(/<meta name="bingbot"[^>]*>/i, `<meta name="bingbot" content="${robots}" />`)
  if (!/<meta name="robots"/i.test(output)) output = output.replace('</head>', `<meta name="robots" content="${robots}" /></head>`)
  if (!/<meta name="googlebot"/i.test(output)) output = output.replace('</head>', `<meta name="googlebot" content="${robots}" /></head>`)
  if (!/<meta name="bingbot"/i.test(output)) output = output.replace('</head>', `<meta name="bingbot" content="${robots}" /></head>`)
  return output
}

const app = express()
app.disable('x-powered-by')
app.use(cors({ origin: FRONTEND_ORIGIN === '*' ? true : FRONTEND_ORIGIN }))
app.use(express.json({ limit: '8mb' }))
app.use(express.urlencoded({ extended: true, limit: '8mb' }))
app.use((req, res, next) => {
  if (isTemporaryHost(req) || FORCE_NOINDEX) res.set('X-Robots-Tag', 'noindex, follow')
  next()
})

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4',
})

const uploadDir = path.join(PUBLIC, 'uploads', 'blog')
await fs.mkdir(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    const safeBase = path.basename(file.originalname, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'blog-image'
    cb(null, `${Date.now()}-${safeBase}${ext}`)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\/(jpeg|png|webp|avif)$/i.test(file.mimetype)),
})

function safeBlog(row) {
  if (!row) return null
  let tags = row.tags
  if (typeof tags === 'string') {
    try { tags = JSON.parse(tags) } catch { tags = tags.split(',').map(v => v.trim()).filter(Boolean) }
  }
  return { ...row, tags: Array.isArray(tags) ? tags : [] }
}

function cleanContent(value = '') {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, '')
    .replace(/javascript:/gi, '')
}

function requireAdmin(req, res, next) {
  if (!ADMIN_TOKEN || req.headers['x-admin-token'] !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

function blogPath(slug) { return `/blog/${encodeURIComponent(slug)}/` }

app.get('/api/health', async (_req, res) => {
  try {
    const [collegeRows] = await pool.query('SELECT COUNT(*) AS total FROM colleges')
    let blogCount = 0
    let publishedBlogCount = 0
    let blogTable = true
    try {
      const [blogRows] = await pool.query("SELECT COUNT(*) AS total, SUM(CASE WHEN LOWER(TRIM(status)) = 'published' THEN 1 ELSE 0 END) AS published FROM blogs")
      blogCount = Number(blogRows[0]?.total || 0)
      publishedBlogCount = Number(blogRows[0]?.published || 0)
    } catch (error) {
      if (error.code === 'ER_NO_SUCH_TABLE') blogTable = false
      else throw error
    }
    res.json({ ok: true, service: 'CollegeShine API', database: true, collegeCount: Number(collegeRows[0]?.total || 0), blogTable, blogCount, publishedBlogCount })
  } catch (error) {
    res.status(503).json({ ok: false, service: 'CollegeShine API', database: false, error: 'Database connection/query failed' })
  }
})

async function testDatabase() {
  try {
    const [rows] = await pool.query('SELECT COUNT(*) AS total, SUM(CASE WHEN LOWER(TRIM(status)) = \'published\' THEN 1 ELSE 0 END) AS published FROM blogs')
    console.log(`[CollegeShine DB] Connected. blogs=${Number(rows[0]?.total || 0)}, published=${Number(rows[0]?.published || 0)}`)
  } catch (error) {
    console.error('[CollegeShine DB] Connection/query failed:', error.message)
    console.error('[CollegeShine DB] Check server/.env for DB_HOST, DB_PORT, DB_USER, DB_PASSWORD and DB_NAME.')
  }
}

app.get('/api/blogs', async (req, res) => {
  try {
    const category = String(req.query.category || '').trim()
    const search = String(req.query.search || '').trim()
    const limit = Math.min(Math.max(Number.parseInt(req.query.limit || '100', 10) || 100, 1), 5000)
    const where = ["LOWER(TRIM(status)) = 'published'"]
    const params = []
    if (category && category !== 'All') { where.push('category = ?'); params.push(category) }
    if (search) {
      where.push('(title LIKE ? OR excerpt LIKE ? OR category LIKE ? OR tags LIKE ?)')
      const q = `%${search}%`; params.push(q, q, q, q)
    }
    params.push(limit)
    const [rows] = await pool.query(`SELECT * FROM blogs WHERE ${where.join(' AND ')} ORDER BY published_date DESC, id DESC LIMIT ?`, params)
    res.set('X-CollegeShine-Blog-Source', 'database')
    return res.json(rows.map(safeBlog))
  } catch (error) {
    console.error('[Blog API] Database query failed:', error.message)
    return res.status(500).json({ error: 'Unable to fetch blogs from the database' })
  }
})

app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM blogs WHERE slug = ? AND LOWER(TRIM(status)) = 'published' LIMIT 1", [req.params.slug])
    if (!rows.length) return res.status(404).json({ error: 'Blog not found' })
    res.set('X-CollegeShine-Blog-Source', 'database')
    return res.json(safeBlog(rows[0]))
  } catch (error) {
    console.error('[Blog API] Database query failed:', error.message)
    return res.status(500).json({ error: 'Unable to fetch the blog from the database' })
  }
})

app.get('/api/admin/blogs', requireAdmin, async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC')
    res.json(rows.map(safeBlog))
  } catch (error) { res.status(500).json({ error: 'Database error' }) }
})

app.post('/api/admin/upload-image', requireAdmin, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Valid image required (JPG, PNG, WEBP or AVIF, max 5MB).' })
  res.status(201).json({ url: `/uploads/blog/${req.file.filename}` })
})

app.post('/api/admin/blogs', requireAdmin, async (req, res) => {
  try {
    const data = req.body || {}
    if (!data.title || !data.slug || !data.content) return res.status(400).json({ error: 'title, slug and content are required' })
    const tags = JSON.stringify(Array.isArray(data.tags) ? data.tags : [])
    const [result] = await pool.execute(`INSERT INTO blogs (title,slug,excerpt,content,featured_image,category,author,published_date,updated_date,status,reading_time,tags,seo_title,seo_description,canonical_url,og_image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
      data.title, data.slug, data.excerpt || '', cleanContent(data.content), data.featured_image || '', data.category || '', data.author || 'CollegeShine', data.published_date || new Date(), data.updated_date || data.published_date || new Date(), data.status || 'published', data.reading_time || '', tags, data.seo_title || data.title, data.seo_description || data.excerpt || '', data.canonical_url || blogPath(data.slug), data.og_image || data.featured_image || '',
    ])
    res.status(201).json({ id: result.insertId, slug: data.slug, url: blogPath(data.slug) })
  } catch (error) {
    console.error(error)
    res.status(error.code === 'ER_DUP_ENTRY' ? 409 : 500).json({ error: error.code === 'ER_DUP_ENTRY' ? 'Slug already exists' : 'Could not publish blog' })
  }
})

app.put('/api/admin/blogs/:id', requireAdmin, async (req, res) => {
  try {
    const data = req.body || {}
    const tags = JSON.stringify(Array.isArray(data.tags) ? data.tags : [])
    await pool.execute(`UPDATE blogs SET title=?,slug=?,excerpt=?,content=?,featured_image=?,category=?,author=?,published_date=?,updated_date=?,status=?,reading_time=?,tags=?,seo_title=?,seo_description=?,canonical_url=?,og_image=? WHERE id=?`, [
      data.title, data.slug, data.excerpt || '', cleanContent(data.content || ''), data.featured_image || '', data.category || '', data.author || 'CollegeShine', data.published_date || null, data.updated_date || data.published_date || null, data.status || 'draft', data.reading_time || '', tags, data.seo_title || data.title, data.seo_description || data.excerpt || '', data.canonical_url || blogPath(data.slug), data.og_image || data.featured_image || '', req.params.id,
    ])
    res.json({ ok: true, slug: data.slug })
  } catch (error) { console.error(error); res.status(500).json({ error: 'Could not update blog' }) }
})

app.delete('/api/admin/blogs/:id', requireAdmin, async (req, res) => {
  try { await pool.execute('DELETE FROM blogs WHERE id=?', [req.params.id]); res.json({ ok: true }) }
  catch { res.status(500).json({ error: 'Could not delete blog' }) }
})


// ---------------------------------------------------------------------------
// SQL-backed College Directory API
// ---------------------------------------------------------------------------
function parseJsonObject(value) {
  if (value && typeof value === 'object') return value
  if (typeof value === 'string') { try { const parsed = JSON.parse(value); return parsed && typeof parsed === 'object' ? parsed : {} } catch { return {} } }
  return {}
}

function parseCollegeData(row) {
  if (!row) return null
  const indexData = parseJsonObject(row.index_json)
  const detailData = parseJsonObject(row.detail_json)
  const data = { ...indexData, ...detailData }
  const seo = data.seo && typeof data.seo === 'object' ? data.seo : {}
  return {
    ...data,
    id: row.id,
    slug: row.slug,
    name: row.name,
    shortName: row.short_name || data.shortName || '',
    category: row.category || data.category || '',
    ownership: row.ownership || data.ownership || '',
    established: row.established ?? data.established ?? null,
    location: row.location || data.location || '',
    district: row.district || data.district || '',
    affiliation: row.affiliation || data.affiliation || '',
    seo: { ...seo, metaTitle: seo.metaTitle || data.metaTitle || '', metaDescription: seo.metaDescription || data.metaDescription || '', canonicalUrl: seo.canonicalUrl || '' },
  }
}

function parseCollegeIndexRow(row) {
  const data = parseJsonObject(row.index_json)
  const detail = parseJsonObject(row.detail_json)
  return {
    id: row.id, slug: row.slug, name: row.name,
    shortName: row.short_name || data.shortName || '',
    category: row.category || data.category || '',
    ownership: row.ownership || data.ownership || '',
    district: row.district || data.district || '',
    location: row.location || data.location || '',
    established: row.established ?? data.established ?? null,
    tagline: data.tagline || detail.tagline || '',
    affiliation: row.affiliation || data.affiliation || detail.affiliation || '',
  }
}


// ---------------------------------------------------------------------------
// Warm and cache the lightweight college directory index in memory.
// The directory page needs only summary fields, so the browser should not
// repeatedly make the remote MySQL server build the same result set.
// ---------------------------------------------------------------------------
const COLLEGE_CACHE_TTL = 5 * 60 * 1000
let collegeIndexCache = { value: null, time: 0 }
let collegeTaxonomyCache = { value: null, time: 0 }
let collegeIndexPromise = null
let collegeTaxonomyPromise = null

async function loadCollegeIndex() {
  if (collegeIndexCache.value && Date.now() - collegeIndexCache.time < COLLEGE_CACHE_TTL) return collegeIndexCache.value
  if (collegeIndexPromise) return collegeIndexPromise
  collegeIndexPromise = pool.query(`
    SELECT id, slug, name, short_name, category, ownership, established,
           location, district, affiliation, index_json, detail_json
    FROM colleges
    ORDER BY name ASC
  `).then(([rows]) => {
    const items = rows.map(parseCollegeIndexRow)
    collegeIndexCache = { value: items, time: Date.now() }
    return items
  }).finally(() => { collegeIndexPromise = null })
  return collegeIndexPromise
}

async function loadCollegeTaxonomy() {
  if (collegeTaxonomyCache.value && Date.now() - collegeTaxonomyCache.time < COLLEGE_CACHE_TTL) return collegeTaxonomyCache.value
  if (collegeTaxonomyPromise) return collegeTaxonomyPromise
  collegeTaxonomyPromise = pool.query(`
    SELECT DISTINCT category, district, ownership
    FROM colleges
    WHERE category IS NOT NULL OR district IS NOT NULL OR ownership IS NOT NULL
  `).then(([rows]) => {
    const unique = key => [...new Set(rows.map(r => String(r[key] || '').trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b))
    const value = {
      categories: unique('category').filter(v => v.toLowerCase() !== 'all'),
      districts: unique('district'),
      ownerships: unique('ownership'),
      types: [],
      affiliations: [],
      accreditations: [],
    }
    collegeTaxonomyCache = { value, time: Date.now() }
    return value
  }).finally(() => { collegeTaxonomyPromise = null })
  return collegeTaxonomyPromise
}

async function warmCollegeCaches() {
  try {
    await Promise.all([loadCollegeIndex(), loadCollegeTaxonomy()])
    console.log(`[CollegeShine DB] College directory cache warmed: ${collegeIndexCache.value?.length || 0} colleges`)
  } catch (error) {
    console.error('[CollegeShine DB] College directory cache warm-up failed:', error.message)
  }
}

app.get('/api/taxonomy', async (_req, res, next) => {
  try {
    const value = await loadCollegeTaxonomy()
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600')
    res.json(value)
  } catch (error) { next(error) }
})

app.get('/api/colleges', async (req, res, next) => {
  try {
    const search = String(req.query.search || '').trim().toLowerCase()
    const category = String(req.query.category || '').trim()
    const district = String(req.query.district || '').trim()
    const ownership = String(req.query.ownership || '').trim().toLowerCase()
    const sort = String(req.query.sort || 'name-asc')
    const page = Math.max(1, Number.parseInt(req.query.page || '1', 10) || 1)
    const limit = Math.min(5000, Math.max(1, Number.parseInt(req.query.limit || '20', 10) || 20))
    const all = await loadCollegeIndex()

    let filtered = all
    if (search) {
      filtered = filtered.filter(c => [c.name, c.shortName, c.district, c.location, c.type, c.ownership, c.affiliation]
        .join(' ').toLowerCase().includes(search))
    }
    if (category) filtered = filtered.filter(c => String(c.category || '') === category || String(c.category || '').toLowerCase() === category.toLowerCase())
    if (district) filtered = filtered.filter(c => String(c.district || '') === district || String(c.district || '').toLowerCase() === district.toLowerCase())
    if (ownership) {
      filtered = filtered.filter(c => {
        const value = String(c.ownership || '').toLowerCase()
        if (ownership === 'government-aided') return value.includes('aided') || value.includes('grant-in-aid')
        if (ownership === 'government') return value.includes('government') && !value.includes('aided')
        if (ownership === 'private') return value.includes('private')
        return value === ownership
      })
    }

    if (sort === 'name-desc') filtered = [...filtered].sort((a,b) => String(b.name).localeCompare(String(a.name)))
    else if (sort === 'newest') filtered = [...filtered].sort((a,b) => (Number(b.established || 0) - Number(a.established || 0)) || String(a.name).localeCompare(String(b.name)))
    else if (sort === 'oldest') filtered = [...filtered].sort((a,b) => (Number(a.established || 9999) - Number(b.established || 9999)) || String(a.name).localeCompare(String(b.name)))
    else filtered = [...filtered].sort((a,b) => String(a.name).localeCompare(String(b.name)))

    const total = filtered.length
    const offset = (page - 1) * limit
    const items = filtered.slice(offset, offset + limit)
    res.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300')
    res.json({ items, total, page, limit, totalPages: Math.max(1, Math.ceil(total / limit)) })
  } catch (error) { next(error) }
})

app.get('/api/colleges/:slug', async (req, res, next) => {
  try {
    const slug = String(req.params.slug || '').trim()
    const [rows] = await pool.query('SELECT * FROM colleges WHERE slug = ? LIMIT 1', [slug])
    if (!rows.length) return res.status(404).json({ error: 'College not found' })
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=900')
    res.json(parseCollegeData(rows[0]))
  } catch (error) { next(error) }
})

app.use('/uploads', express.static(path.join(PUBLIC, 'uploads'), { maxAge: '30d', immutable: true }))
if (await fs.stat(DIST).then(() => true).catch(() => false)) {
  app.use('/assets', express.static(path.join(DIST, 'assets'), { maxAge: '1y', immutable: true }))
  app.use(express.static(DIST, { index: false, maxAge: 0 }))
}


async function loadHtml() {
  return fs.readFile(path.join(DIST, 'index.html'), 'utf8')
}
function escapeHtml(value = '') { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;') }
function absolute(value = '/') { return /^https?:\/\//i.test(value) ? value : `https://collegeshine.com${value.startsWith('/') ? value : `/${value}`}` }
function injectPageMeta(html, meta, pathname = '/', forceNoindex = false) {
  const title = escapeHtml(meta?.title || 'CollegeShine')
  const description = escapeHtml(meta?.description || 'Explore colleges, courses, admissions and scholarships with CollegeShine.')
  const canonicalRaw = absolute(meta?.canonical || pathname)
  const canonical = escapeHtml(canonicalRaw)
  const robots = (FORCE_NOINDEX || forceNoindex || meta?.noindex) ? ROBOTS_NOINDEX : ROBOTS_INDEX
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': meta?.pageType === 'collection' ? 'CollectionPage' : 'WebPage',
    '@id': `${canonicalRaw}#webpage`,
    name: title,
    url: canonicalRaw,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': 'https://collegeshine.com/#website' },
  }).replace(/<\//g, '<\\/')
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace('</head>', `<meta name="googlebot" content="${robots}" /><meta name="bingbot" content="${robots}" /><meta property="og:type" content="website" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:url" content="${canonical}" /><meta property="og:site_name" content="CollegeShine" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${title}" /><meta name="twitter:description" content="${description}" /><script type="application/ld+json" data-seo-jsonld="page">${schema}</script></head>`)
}

function injectBlogMeta(html, blog, forceNoindex = false) {
  if (!blog) return html
  const title = escapeHtml(blog.seo_title || blog.title)
  const description = escapeHtml(blog.seo_description || blog.excerpt || '')
  const canonicalRaw = blog.canonical_url?.startsWith('http') ? blog.canonical_url : absolute(blog.canonical_url || blogPath(blog.slug))
  const canonical = escapeHtml(canonicalRaw)
  const imageRaw = absolute(blog.og_image || blog.featured_image || '/og-default.png')
  const image = escapeHtml(imageRaw)
  const robots = (FORCE_NOINDEX || forceNoindex) ? ROBOTS_NOINDEX : ROBOTS_INDEX
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalRaw}#article`,
    headline: blog.title,
    description: blog.seo_description || blog.excerpt || '',
    image: [imageRaw],
    datePublished: blog.published_date || undefined,
    dateModified: blog.updated_date || blog.published_date || undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalRaw },
    author: { '@type': 'Organization', name: blog.author || 'CollegeShine', url: 'https://collegeshine.com' },
    publisher: { '@type': 'Organization', name: 'CollegeShine', url: 'https://collegeshine.com' },
    articleSection: blog.category || '',
    keywords: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
  }).replace(/<\//g, '<\\/')
  const breadcrumbs = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalRaw}#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://collegeshine.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://collegeshine.com/blog/' },
      { '@type': 'ListItem', position: 3, name: blog.title, item: canonicalRaw },
    ],
  })
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace('</head>', `<meta name="googlebot" content="${robots}" /><meta name="bingbot" content="${robots}" /><meta property="og:type" content="article" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="${image}" /><meta property="og:site_name" content="CollegeShine" /><meta property="og:locale" content="en_IN" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${title}" /><meta name="twitter:description" content="${description}" /><meta name="twitter:image" content="${image}" /><script type="application/ld+json" data-blog-article-schema="true">${schema}</script><script type="application/ld+json" data-seo-jsonld="breadcrumbs">${breadcrumbs}</script></head>`)
}

function injectCollegeMeta(html, college, pathname, forceNoindex = false) {
  const title = escapeHtml(college?.seo?.metaTitle || `${college?.name || 'College'} | CollegeShine`)
  const description = escapeHtml(college?.seo?.metaDescription || `Explore ${college?.name || 'this college'} on CollegeShine.`)
  const canonicalRaw = college?.seo?.canonicalUrl || absolute(pathname)
  const canonical = escapeHtml(canonicalRaw)
  const robots = (FORCE_NOINDEX || forceNoindex) ? ROBOTS_NOINDEX : ROBOTS_INDEX
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': college?.seo?.schemaType || 'CollegeOrUniversity',
    '@id': `${canonicalRaw}#college`,
    name: college?.name || 'College',
    url: canonicalRaw,
    description: college?.seo?.metaDescription || college?.about || '',
    image: college?.image ? [absolute(college.image)] : undefined,
    address: college?.address ? { '@type': 'PostalAddress', streetAddress: college.address, addressLocality: college.district || college.location || '', addressCountry: 'IN' } : undefined,
    telephone: college?.phone || undefined,
    email: college?.email || undefined,
  }).replace(/<\//g, '<\\/')
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace('</head>', `<meta name="googlebot" content="${robots}" /><meta name="bingbot" content="${robots}" /><meta property="og:type" content="website" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:url" content="${canonical}" /><meta property="og:site_name" content="CollegeShine" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${title}" /><meta name="twitter:description" content="${description}" /><script type="application/ld+json" data-college-schema="true">${schema}</script></head>`)
}

async function readHtmlShell(pathname) {
  const normalized = decodeURIComponent(pathname || '/').replace(/\\/g, '/').replace(/\/{2,}/g, '/').replace(/^\/+|\/+$/g, '')
  if (normalized && !normalized.split('/').some(part => part === '.' || part === '..')) {
    const candidate = path.resolve(DIST, normalized, 'index.html')
    if (candidate.startsWith(`${DIST}${path.sep}`)) {
      try { return await fs.readFile(candidate, 'utf8') } catch { /* use root shell */ }
    }
  }
  return loadHtml()
}

app.get(/.*/, async (req, res) => {
  try {
    if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Route not found' })

    // Dynamic college details must be handled before static HTML shells so the
    // response has the real title, canonical and CollegeOrUniversity JSON-LD.
    if (req.path.startsWith('/colleges/') && req.path !== '/colleges/') {
      const parts = req.path.split('/').filter(Boolean)
      if (parts.length === 2) {
        const slug = decodeURIComponent(parts[1])
        const [rows] = await pool.query('SELECT * FROM colleges WHERE slug=? LIMIT 1', [slug])
        const html = await loadHtml()
        if (rows[0]) {
          const college = parseCollegeData(rows[0])
          return res.status(200).type('html').send(injectCollegeMeta(html, college, req.path, shouldNoindexRequest(req)))
        }
        const notFound = injectPageMeta(html, { title: 'College Not Found | CollegeShine', description: 'The requested college could not be found.', canonical: req.path, noindex: true }, req.path, shouldNoindexRequest(req, true))
        return res.status(404).type('html').send(notFound)
      }
    }

    // Blog pages are always sourced from the MySQL blogs table.
    if (req.path.startsWith('/blog/') && req.path !== '/blog/') {
      const slug = decodeURIComponent(req.path.slice('/blog/'.length).replace(/\/$/, ''))
      const [rows] = await pool.query("SELECT * FROM blogs WHERE slug=? AND LOWER(TRIM(status))='published' LIMIT 1", [slug])
      const html = await loadHtml()
      const blog = safeBlog(rows[0])
      if (!blog) {
        const notFound = injectPageMeta(html, { title: 'Article Not Found | CollegeShine', description: 'The requested CollegeShine article could not be found.', canonical: req.path, noindex: true }, req.path, shouldNoindexRequest(req, true))
        return res.status(404).type('html').send(notFound)
      }
      return res.status(200).type('html').send(injectBlogMeta(html, blog, shouldNoindexRequest(req)))
    }

    // Serve the prerendered route shell when available, otherwise the SPA root.
    // index:false above prevents the static middleware from intercepting these routes.
    let html = await readHtmlShell(req.path)
    if (shouldNoindexRequest(req)) html = enforceNoindex(html)
    return res.status(200).type('html').send(html)
  } catch (error) {
    console.error('[CollegeShine route]', error.message)
    return res.status(500).type('text').send('CollegeShine server error')
  }
})

await testDatabase()
void warmCollegeCaches()

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`CollegeShine production server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})

// Keep the HTTP server referenced so Node cannot exit after startup.
server.ref()

server.on('error', (error) => {
  console.error('CollegeShine server error:', error)
})

server.on('close', () => {
  console.log('CollegeShine HTTP server closed')
})

const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Stopping CollegeShine server...`)
  server.close(() => process.exit(0))
}

process.once('SIGINT', () => shutdown('SIGINT'))
process.once('SIGTERM', () => shutdown('SIGTERM'))

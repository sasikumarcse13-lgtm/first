import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs/promises'
import path from 'node:path'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import { collectSeoRoutes } from './scripts/collect-seo-meta.mjs'

dotenv.config({ path: path.resolve('.env') })

const SITE_ORIGIN = (process.env.VITE_SITE_ORIGIN || 'https://collegeshine.com').replace(/\/+$/, '')

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function absoluteUrl(value = '/') {
  if (/^https?:\/\//i.test(String(value))) return String(value)
  const normalized = String(value).startsWith('/') ? String(value) : `/${value}`
  return `${SITE_ORIGIN}${normalized}`
}

function robotsFor(meta) {
  const forceNoindex = String(process.env.VITE_NOINDEX_ALL || '').trim().toLowerCase() === 'true'
  return (forceNoindex || meta?.noindex)
    ? 'noindex,follow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
}

function jsonLd(meta, route) {
  const canonical = absoluteUrl(meta.canonical || route)
  const type = meta.pageType === 'collection' ? 'CollectionPage' : 'WebPage'
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${canonical}#webpage`,
    name: meta.title,
    url: canonical,
    description: meta.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
  }
}

function injectPageMeta(html, meta, route) {
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const canonical = escapeHtml(absoluteUrl(meta.canonical || route))
  const robots = robotsFor(meta)
  const rawCanonical = absoluteUrl(meta.canonical || route)
  const schema = JSON.stringify(jsonLd(meta, route))

  return html
    .replace(/<html\b[^>]*>/i, '<html lang="en-IN">')
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta name="googlebot"[^>]*>/i, '')
    .replace(/<meta name="bingbot"[^>]*>/i, '')
    .replace(/<meta property="og:type"[^>]*>/i, '')
    .replace(/<meta property="og:title"[^>]*>/i, '')
    .replace(/<meta property="og:description"[^>]*>/i, '')
    .replace(/<meta property="og:url"[^>]*>/i, '')
    .replace(/<meta property="og:site_name"[^>]*>/i, '')
    .replace(/<meta property="og:locale"[^>]*>/i, '')
    .replace(/<meta name="twitter:card"[^>]*>/i, '')
    .replace(/<meta name="twitter:title"[^>]*>/i, '')
    .replace(/<meta name="twitter:description"[^>]*>/i, '')
    .replace(/<script type="application\/ld\+json" data-seo-jsonld="page">[\s\S]*?<\/script>/i, '')
    .replace('</head>', [
      `<meta name="googlebot" content="${robots}" />`,
      `<meta name="bingbot" content="${robots}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${escapeHtml(rawCanonical)}" />`,
      `<meta property="og:site_name" content="CollegeShine" />`,
      `<meta property="og:locale" content="en_IN" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<script type="application/ld+json" data-seo-jsonld="page">${schema}</script>`,
      '</head>',
    ].join(''))
}

function articleSchema(blog, canonical, image) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: blog.title,
    description: blog.seo_description || blog.excerpt || '',
    image: [image],
    datePublished: blog.published_date,
    dateModified: blog.updated_date || blog.published_date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: { '@type': 'Organization', name: blog.author || 'CollegeShine', url: SITE_ORIGIN },
    publisher: { '@type': 'Organization', name: 'CollegeShine', url: SITE_ORIGIN },
    articleSection: blog.category || '',
    keywords: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
  }
}

function breadcrumbSchema(blog, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog/` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: canonical },
    ],
  }
}

function injectBlogMeta(html, blog) {
  const title = escapeHtml(blog.seo_title || blog.title)
  const description = escapeHtml(blog.seo_description || blog.excerpt || '')
  const canonicalRaw = absoluteUrl(blog.canonical_url || `/blog/${encodeURIComponent(blog.slug)}/`)
  const canonical = escapeHtml(canonicalRaw)
  const imageRaw = absoluteUrl(blog.og_image || blog.featured_image || '/og-default.jpg')
  const image = escapeHtml(imageRaw)
  const article = JSON.stringify(articleSchema(blog, canonicalRaw, imageRaw))
  const breadcrumbs = JSON.stringify(breadcrumbSchema(blog, canonicalRaw))
  const robots = String(process.env.VITE_NOINDEX_ALL || '').trim().toLowerCase() === 'true' ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace('</head>', [
      `<meta name="googlebot" content="${robots}" />`,
      `<meta name="bingbot" content="${robots}" />`,
      `<meta property="og:type" content="article" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:image" content="${image}" />`,
      `<meta property="og:site_name" content="CollegeShine" />`,
      `<meta property="og:locale" content="en_IN" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<meta name="twitter:image" content="${image}" />`,
      `<script type="application/ld+json" data-blog-article-schema="true">${article}</script>`,
      `<script type="application/ld+json" data-blog-breadcrumb-schema="true">${breadcrumbs}</script>`,
      '</head>',
    ].join(''))
}


function collegeSchema(college, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': college?.seo?.schemaType || 'CollegeOrUniversity',
    '@id': `${canonical}#college`,
    name: college?.name || 'College',
    url: canonical,
    description: college?.seo?.metaDescription || college?.about || '',
    image: college?.image ? absoluteUrl(college.image) : undefined,
    address: college?.address ? {
      '@type': 'PostalAddress',
      streetAddress: college.address,
      addressLocality: college.district || college.location || '',
      addressCountry: 'IN',
    } : undefined,
    telephone: college?.phone || undefined,
    email: college?.email || undefined,
  }
}

function injectCollegeMeta(html, college, pathname) {
  const title = escapeHtml(college?.seo?.metaTitle || `${college?.name || 'College'} | CollegeShine`)
  const description = escapeHtml(college?.seo?.metaDescription || `Explore ${college?.name || 'this college'} on CollegeShine.`)
  const canonicalRaw = college?.seo?.canonicalUrl || absoluteUrl(pathname)
  const canonical = escapeHtml(canonicalRaw)
  const schema = JSON.stringify(collegeSchema(college, canonicalRaw)).replace(/<\//g, '<\\/')
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace('</head>', [
      `<meta property="og:type" content="website" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:site_name" content="CollegeShine" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<script type="application/ld+json" data-college-schema="true">${schema}</script>`,
      '</head>',
    ].join(''))
}

function createSeoDevPlugin() {
  let pool = null
  let poolPromise = null
  let seoRoutes = collectSeoRoutes()

  async function getPool() {
    if (pool) return pool
    if (poolPromise) return poolPromise
    if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) return null

    poolPromise = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 3,
      charset: 'utf8mb4',
      connectTimeout: 2500,
    })
    try {
      pool = await poolPromise
      return pool
    } catch {
      poolPromise = null
      return null
    }
  }

  return {
    name: 'collegeshine-route-seo-dev',
    configureServer(server) {
      const refreshRoutes = () => { seoRoutes = collectSeoRoutes() }
      server.watcher.on('change', (file) => {
        if (file.includes(`${path.sep}src${path.sep}pages${path.sep}`) && file.endsWith('.jsx')) refreshRoutes()
      })

      server.middlewares.use(async (req, res, next) => {
        try {
          const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname)
          if (
            pathname.startsWith('/@') ||
            pathname.startsWith('/src/') ||
            pathname.startsWith('/assets/') ||
            pathname.startsWith('/uploads/') ||
            pathname.startsWith('/api/') ||
            /\.(?:js|jsx|css|map|png|jpe?g|webp|svg|ico|woff2?|ttf|avif)$/i.test(pathname)
          ) return next()

          let html = await fs.readFile(path.resolve('index.html'), 'utf8')
          html = await server.transformIndexHtml(req.url || '/', html)

          const collegeMatch = pathname.match(/^\/colleges\/([^/]+)\/?$/)
          if (collegeMatch) {
            const db = await getPool()
            if (db) {
              const [rows] = await db.query('SELECT * FROM colleges WHERE slug=? LIMIT 1', [collegeMatch[1]])
              if (rows[0]) {
                let data = rows[0].data
                if (typeof data === 'string') {
                  try { data = JSON.parse(data) } catch { data = {} }
                }
                const college = {
                  ...data,
                  id: rows[0].id,
                  slug: rows[0].slug,
                  name: rows[0].name,
                  address: rows[0].address || data?.address || '',
                  district: rows[0].district || data?.district || '',
                  location: rows[0].location || data?.location || '',
                  phone: rows[0].phone || data?.phone || '',
                  email: rows[0].email || data?.email || '',
                  image: rows[0].image || data?.image || '',
                  seo: {
                    ...(data?.seo || {}),
                    metaTitle: rows[0].meta_title || data?.seo?.metaTitle || '',
                    metaDescription: rows[0].meta_description || data?.seo?.metaDescription || '',
                    canonicalUrl: rows[0].canonical_url || data?.seo?.canonicalUrl || '',
                  },
                }
                html = injectCollegeMeta(html, college, pathname)
              } else {
                html = injectPageMeta(html, { title: 'College Not Found | CollegeShine', description: 'The requested college could not be found.', canonical: pathname, noindex: true }, pathname)
              }
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-store')
            res.end(html)
            return
          }

          const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
          if (blogMatch) {
            const db = await getPool()
            if (db) {
              const [rows] = await db.query("SELECT * FROM blogs WHERE slug=? AND status='published' LIMIT 1", [blogMatch[1]])
              if (rows[0]) {
                let tags = rows[0].tags
                if (typeof tags === 'string') {
                  try { tags = JSON.parse(tags) } catch { tags = tags.split(',').map(v => v.trim()).filter(Boolean) }
                }
                rows[0].tags = Array.isArray(tags) ? tags : []
                html = injectBlogMeta(html, rows[0])
              } else {
                html = injectPageMeta(html, {
                  title: 'Article Not Found | CollegeShine',
                  description: 'The requested CollegeShine article could not be found.',
                  canonical: pathname,
                  noindex: true,
                  pageType: 'webpage',
                }, pathname)
              }
            } else {
              // Keep a unique URL-specific source even when MySQL is temporarily unavailable.
              html = injectPageMeta(html, {
                title: 'CollegeShine Blog Article',
                description: 'Read education, admissions and career guidance articles on CollegeShine.',
                canonical: pathname,
                noindex: true,
                pageType: 'article',
              }, pathname)
            }
          } else {
            const meta = seoRoutes.get(pathname)
            if (!meta) return next()
            html = injectPageMeta(html, meta, pathname)
          }

          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(html)
        } catch (error) {
          console.error('[CollegeShine SEO middleware]', error)
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), createSeoDevPlugin()],
  server: {
    port: 5173,
    proxy: {
      '/api': { target: 'http://localhost:5000', changeOrigin: true },
      '/uploads': { target: 'http://localhost:5000', changeOrigin: true },
    },
  },
  preview: { port: 4173 },
  build: {
    sourcemap: true,
    cssMinify: 'lightningcss',
    reportCompressedSize: false,
  },
})

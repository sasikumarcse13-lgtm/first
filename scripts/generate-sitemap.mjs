import fs from 'node:fs'
import path from 'node:path'
import { COURSE_CATEGORIES, COURSE_ROUTES, COURSE_ALIASES } from '../src/data/courseRoutes.js'
import { SITE_ROUTES } from '../src/data/siteRoutes.js'
import { SECTION_ROUTES } from '../src/data/sectionRoutes.js'
import { ABROAD_ADMISSION_ROUTES } from '../src/data/abroadAdmissionRoutes.js'
import { BLOGS } from '../src/data/blogs.js'
import { collectSeoRoutes } from './collect-seo-meta.mjs'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config({ path: path.resolve('.env') })
dotenv.config({ path: path.resolve('server/.env'), override: true })

const origin = 'https://collegeshine.com'

async function addCollegeUrls(canonical) {
  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) return
  let db
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      connectTimeout: 2500,
    })
    const [rows] = await db.query("SELECT slug FROM colleges WHERE slug IS NOT NULL AND TRIM(slug) <> ''")
    canonical.add('/colleges/')
    for (const row of rows) canonical.add(`/colleges/${encodeURIComponent(String(row.slug).trim())}/`)
    console.log(`Added ${rows.length} SQL college URLs to sitemap`)
  } catch (error) {
    console.warn(`College sitemap source unavailable; continuing with static/blog URLs: ${error.message}`)
  } finally {
    if (db) await db.end().catch(() => {})
  }
}
const includeGeneratedShells = process.env.INDEXABLE_EMPTY_PAGES === 'true'
const seoRoutes = collectSeoRoutes()

const redirects = new Set(COURSE_ALIASES.map((item) => item.path))
const canonical = new Set()

// Only indexable pages belong in the sitemap. This prevents noindex placeholder
// pages from being submitted to search engines as canonical crawl targets.
for (const [route, meta] of seoRoutes) {
  if (!meta.noindex) canonical.add(route)
}

// Keep the environment switch for future reviewed pages that are intentionally
// promoted to indexable status in their route inventory.
if (includeGeneratedShells) {
  for (const item of SITE_ROUTES) {
    if (seoRoutes.get(item.path)?.noindex === false) canonical.add(item.path)
  }
  for (const item of COURSE_CATEGORIES) {
    if (seoRoutes.get(item.path)?.noindex === false) canonical.add(item.path)
  }
  for (const item of COURSE_ROUTES) {
    if (seoRoutes.get(item.path)?.noindex === false) canonical.add(item.path)
  }
  for (const section of SECTION_ROUTES) {
    if (seoRoutes.get(section.path)?.noindex === false) canonical.add(section.path)
    for (const item of section.links) {
      if (seoRoutes.get(item.path)?.noindex === false) canonical.add(item.path)
    }
  }
  if (seoRoutes.get(ABROAD_ADMISSION_ROUTES.path)?.noindex === false) canonical.add(ABROAD_ADMISSION_ROUTES.path)
  for (const item of ABROAD_ADMISSION_ROUTES.links) {
    if (seoRoutes.get(item.path)?.noindex === false) canonical.add(item.path)
  }
}

canonical.add('/blog/')
for (const blog of BLOGS) {
  if (blog.status === 'published') canonical.add(`/blog/${blog.slug}/`)
}

await addCollegeUrls(canonical)

for (const redirect of redirects) canonical.delete(redirect)

const urls = [...canonical].sort()
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((url) => `  <url><loc>${origin}${url}</loc></url>`).join('\n') +
  `\n</urlset>\n`

const out = path.resolve('public/sitemap.xml')
fs.writeFileSync(out, xml)
console.log(`Generated ${urls.length} sitemap URLs -> ${out}`)

import fs from 'node:fs'
import path from 'node:path'
import { collectSeoRoutes } from './collect-seo-meta.mjs'

const routes = collectSeoRoutes()
const errors = []
const warnings = []
const seenCanonicals = new Map()

for (const [route, meta] of routes) {
  if (!meta.title) errors.push(`${route}: missing title`)
  if (!meta.description) errors.push(`${route}: missing meta description`)
  if (!meta.noindex && meta.title && (meta.title.length < 30 || meta.title.length > 60)) warnings.push(`${route}: title length ${meta.title.length} (target 30–60)`)
  if (!meta.noindex && meta.description && (meta.description.length < 120 || meta.description.length > 160)) warnings.push(`${route}: description length ${meta.description.length} (target 120–160)`)
  if (!meta.canonical) errors.push(`${route}: missing canonical`)
  const prev = seenCanonicals.get(meta.canonical)
  if (prev) errors.push(`${route}: duplicate canonical with ${prev}`)
  seenCanonicals.set(meta.canonical, route)
  if (route !== '/' && !meta.breadcrumbs?.length) errors.push(`${route}: missing breadcrumbs`)
}

const home = routes.get('/')
if (!home || home.noindex) errors.push('Homepage must be indexable')

const sitemap = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf8')
for (const [route, meta] of routes) {
  if (meta.noindex && sitemap.includes(`<loc>https://collegeshine.com${route}</loc>`)) {
    errors.push(`${route}: noindex URL is present in sitemap.xml`)
  }
}

const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8')
if (!/lang="en-IN"/i.test(indexHtml)) errors.push('index.html: missing lang=en-IN')
if (!/meta name="viewport"/i.test(indexHtml)) errors.push('index.html: missing viewport')
if (!/meta name="description"/i.test(indexHtml)) errors.push('index.html: missing description')
if (!/link rel="canonical"/i.test(indexHtml)) errors.push('index.html: missing canonical')
if (!/assets\/collegeshine-logo\.svg/i.test(indexHtml)) warnings.push('index.html: favicon is not the CollegeShine logo')

console.log(`SEO route definitions: ${routes.size}`)
console.log(`Indexable routes: ${[...routes.values()].filter(x => !x.noindex).length}`)
console.log(`Noindex routes: ${[...routes.values()].filter(x => x.noindex).length}`)
console.log(`Warnings: ${warnings.length}`)
for (const w of warnings.slice(0, 100)) console.log(`WARN: ${w}`)

if (errors.length) {
  console.error(`\nSEO AUDIT FAILED (${errors.length} errors)`)
  for (const e of errors.slice(0, 200)) console.error(`ERROR: ${e}`)
  process.exit(1)
}
console.log('\nSEO AUDIT PASSED: metadata, canonical coverage, breadcrumbs, homepage indexability and sitemap/noindex consistency are valid.')

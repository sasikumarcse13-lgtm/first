import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = path.join(ROOT, 'dist')
const DATA = path.join(ROOT, 'public', 'data')
const fail = []
const ok = msg => console.log(`PASS ${msg}`)
const bad = msg => fail.push(msg)
const read = p => fs.readFileSync(p, 'utf8')

const index = JSON.parse(read(path.join(DATA, 'index.json')))
const taxonomy = JSON.parse(read(path.join(DATA, 'taxonomy.json')))
if (index.length === 3769) ok('3,769 college records')
else bad(`Expected 3,769 college records, got ${index.length}`)
if (new Set(index.map(x => x.id)).size === index.length) ok('unique college IDs')
else bad('duplicate college IDs')
if (new Set(index.map(x => x.slug)).size === index.length) ok('unique college slugs')
else bad('duplicate college slugs')
if (!taxonomy.categories.includes('all')) ok('reserved all category excluded from taxonomy')
else bad('reserved all category leaked into taxonomy')
if (taxonomy.districts.length === 42) ok('all 42 districts present')
else bad(`Expected 42 districts, got ${taxonomy.districts.length}`)

const sitemap = read(path.join(DIST, 'sitemap.xml'))
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
if (new Set(urls).size === urls.length) ok('sitemap has no duplicate URLs')
else bad('duplicate sitemap URLs')
if (!urls.some(u => u.endsWith('/colleges/all/'))) ok('reserved /colleges/all/ is absent from sitemap')
else bad('/colleges/all/ is still in sitemap')
const collegeUrlSet = new Set(index.map(x => `https://colleges.collegeshine.com/colleges/${x.slug}/`))
const missingCollegeUrls = [...collegeUrlSet].filter(u => !urls.includes(u))
if (missingCollegeUrls.length === 0) ok('all 3,769 college URLs are in sitemap')
else bad(`college sitemap coverage mismatch: ${missingCollegeUrls.length} missing`)

const representative = [
  'colleges/index.html',
  'colleges/engineering/index.html',
  'districts/coimbatore/index.html',
  'colleges/engineering/coimbatore/index.html',
  'colleges/dhanalakshmi-srinivasan-university/index.html',
]
for (const rel of representative) {
  const p = path.join(DIST, rel)
  if (!fs.existsSync(p)) { bad(`${rel} missing`); continue }
  const html = read(p)
  if (!/name="robots" content="index,follow"/i.test(html)) bad(`${rel} is not index,follow`)
  if (!/<link rel="canonical"/i.test(html)) bad(`${rel} missing canonical`)
  if (!/<title>[^<]+<\/title>/i.test(html)) bad(`${rel} missing title`)
  if (!/name="description"/i.test(html)) bad(`${rel} missing description`)
}
ok('representative valid pages have SEO head tags')

const allPage = read(path.join(DIST, 'colleges', 'index.html'))
if (/CollectionPage/.test(allPage) && /ItemList/.test(allPage)) ok('all-colleges page has CollectionPage + ItemList schema')
else bad('all-colleges page schema missing')
const collegePage = read(path.join(DIST, 'colleges', 'dhanalakshmi-srinivasan-university', 'index.html'))
if (/CollegeOrUniversity/.test(collegePage) && /BreadcrumbList/.test(collegePage)) ok('college page has institution + breadcrumb schema')
else bad('college schema missing')
if (/<iframe[^>]+google\.com\/maps\?q=/i.test(collegePage)) ok('college page contains lazy Google Maps iframe')
else bad('college page missing Google Maps iframe')
if (!/Fee Structure/i.test(collegePage)) ok('college page does not publish Fee Structure')
else bad('Fee Structure leaked into college page')

if (fail.length) {
  console.error(`FAIL ${fail.length} checks`)
  for (const x of fail) console.error(` - ${x}`)
  process.exit(1)
}
console.log('PASS v8 SEO audit completed with 0 failures')

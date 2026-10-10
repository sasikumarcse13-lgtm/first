import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = path.join(ROOT, 'dist')
const required = [
  /<title>[^<]+<\/title>/i,
  /<meta[^>]+name=["']description["'][^>]*>/i,
  /<link[^>]+rel=["']canonical["'][^>]*>/i,
  /<meta[^>]+name=["']robots["'][^>]*>/i,
  /application\/ld\+json/i,
]

if (!fs.existsSync(DIST)) throw new Error('dist does not exist. Run npm run build first.')
const files = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p)
    else if (entry.name === 'index.html') files.push(p)
  }
}
walk(path.join(DIST, 'colleges'))
let failed = 0
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  for (const rule of required) {
    if (!rule.test(html)) { failed++; console.error(`[seo-check] FAIL ${path.relative(DIST, file)}: ${rule}`) }
  }
}
console.log(`[seo-check] checked ${files.length} college pages; failures=${failed}`)
if (failed) process.exit(1)

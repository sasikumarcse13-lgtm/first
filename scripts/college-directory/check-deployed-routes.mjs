import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = path.join(ROOT, 'dist')
const routes = [
  'colleges/a-m-c-college-of-nursing/',
  'districts/coimbatore/',
  'colleges/aviation/',
]
let failed = 0
for (const route of routes) {
  const file = path.join(DIST, route, 'index.html')
  const ok = fs.existsSync(file) && fs.statSync(file).size > 1000
  console.log(`${ok ? 'OK' : 'MISSING'} /${route}`)
  if (!ok) failed++
}
if (failed) process.exit(1)
console.log('All critical audit routes have prerendered HTML.')

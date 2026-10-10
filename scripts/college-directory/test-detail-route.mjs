import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const ROOT = process.cwd()
const dataPath = path.join(ROOT, 'public', 'data', 'index.json')
const detailPath = path.join(ROOT, 'public', 'data', 'colleges', 'karpagam-nursing-college.json')
const index = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const karpagam = index.find(x => x.slug === 'karpagam-nursing-college')
if (!karpagam) throw new Error('Karpagam slug missing from index.json')
if (!fs.existsSync(detailPath)) throw new Error('Karpagam detail JSON missing')
const detail = JSON.parse(fs.readFileSync(detailPath, 'utf8'))
if (detail.slug !== 'karpagam-nursing-college') throw new Error('Detail JSON slug mismatch')
const app = fs.readFileSync(path.join(ROOT, 'src', 'App.jsx'), 'utf8')
const page = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'CollegeDetailPage.jsx'), 'utf8')
if (!app.includes('CollegeDetailPage slugOverride={category}')) throw new Error('Category-to-college slug handoff is missing')
if (!page.includes('const slug = slugOverride || routeSlug')) throw new Error('Detail page slug override is missing')
console.log('[detail-route-test] PASS: /colleges/karpagam-nursing-college/ resolves to the college slug and detail JSON.')

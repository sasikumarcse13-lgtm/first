import fs from 'node:fs'
import path from 'node:path'
import { COURSE_CATEGORIES, COURSE_ROUTES, COURSE_ALIASES } from '../src/data/courseRoutes.js'
import { SITE_ROUTES } from '../src/data/siteRoutes.js'
import { SECTION_ROUTES, SECTION_ALIASES } from '../src/data/sectionRoutes.js'
import { ABROAD_ADMISSION_ROUTES } from '../src/data/abroadAdmissionRoutes.js'
import { SECTION_COMPONENT_PATHS } from '../src/data/sectionComponentPaths.js'

const root = path.resolve('.')
const errors = []

const unique = (items, key = 'path') => new Set(items.map((x) => x[key]))
const categoryPaths = unique(COURSE_CATEGORIES)
const coursePaths = unique(COURSE_ROUTES)
const sitePaths = unique(SITE_ROUTES)
const aliasPaths = unique(COURSE_ALIASES)
const sectionPaths = unique(SECTION_ROUTES)
const sectionDetailPaths = new Set(SECTION_ROUTES.flatMap((s) => s.links.map((x) => x.path)))
const sectionAliasPaths = unique(SECTION_ALIASES)

if (categoryPaths.size !== COURSE_CATEGORIES.length) errors.push('Duplicate course category path')
if (coursePaths.size !== COURSE_ROUTES.length) errors.push('Duplicate course detail path')
if (sitePaths.size !== SITE_ROUTES.length) errors.push('Duplicate site path')
if (sectionPaths.size !== SECTION_ROUTES.length) errors.push('Duplicate section hub path')
if (sectionDetailPaths.size !== SECTION_ROUTES.reduce((n, s) => n + s.links.length, 0)) errors.push('Duplicate section detail path')
if (new Set(ABROAD_ADMISSION_ROUTES.links.map((x) => x.path)).size !== ABROAD_ADMISSION_ROUTES.links.length) errors.push('Duplicate abroad admission country path')

for (const item of COURSE_CATEGORIES) {
  if (!fs.existsSync(path.resolve(root, 'src', item.component.slice(2)))) errors.push(`Missing category component: ${item.component}`)
}
for (const item of COURSE_ROUTES) {
  if (!fs.existsSync(path.resolve(root, 'src', item.component.slice(2)))) errors.push(`Missing course component: ${item.component}`)
}

const allSectionFolders = {
  EntranceExams: 'src/pages/EntranceExams/EntranceExams.jsx',
  Counselling: 'src/pages/Counselling/Counselling.jsx',
  Scholarships: 'src/pages/Scholarships/Scholarships.jsx',
  Services: 'src/pages/Services/Services.jsx',
  Tools: 'src/pages/Tools/Tools.jsx',
}
for (const [name, rel] of Object.entries(allSectionFolders)) {
  if (!fs.existsSync(path.resolve(root, rel))) errors.push(`Missing section hub component: ${name}`)
}

for (const section of SECTION_ROUTES) {
  for (const item of section.links) {
    if (item.path === ABROAD_ADMISSION_ROUTES.path) continue
    const mapped = SECTION_COMPONENT_PATHS[`${section.key}:${item.component}`]
    const expected = mapped ? path.resolve(root, 'src', mapped.slice(2)) : path.resolve(root, `src/pages/${section.key}/${item.component}/${item.component}.jsx`)
    if (!fs.existsSync(expected)) errors.push(`Missing section detail component: ${section.title} -> ${item.label}`)
  }
}

const abroadHub = path.resolve(root, 'src/pages/Services/AbroadAdmission/AbroadAdmission.jsx')
if (!fs.existsSync(abroadHub)) errors.push('Missing Abroad Admissions hub component')
for (const item of ABROAD_ADMISSION_ROUTES.links) {
  const expected = path.resolve(root, `src/pages/Services/AbroadAdmission/${item.component}/${item.component}.jsx`)
  if (!fs.existsSync(expected)) errors.push(`Missing abroad admission country component: ${item.label}`)
}

const abroadPaths = new Set([ABROAD_ADMISSION_ROUTES.path, ...ABROAD_ADMISSION_ROUTES.links.map((x) => x.path)])
const overlaps = new Set([...sitePaths, ...categoryPaths, ...coursePaths, ...sectionPaths, ...sectionDetailPaths, ...abroadPaths])
console.log(`Site inventory: ${SITE_ROUTES.length} routes`)
console.log(`Course category pages: ${COURSE_CATEGORIES.length}`)
console.log(`Course detail pages: ${COURSE_ROUTES.length}`)
console.log(`Entrance / counselling / scholarship / services / tools hubs: ${SECTION_ROUTES.length}`)
console.log(`Section detail pages: ${sectionDetailPaths.size}`)
console.log(`Course compatibility aliases: ${COURSE_ALIASES.length}`)
console.log(`Section aliases: ${SECTION_ALIASES.length}`)
console.log(`Abroad admission pages: ${1 + ABROAD_ADMISSION_ROUTES.links.length}`)
console.log(`Combined unique route paths: ${overlaps.size}`)

if (errors.length) {
  console.error('\nROUTE AUDIT FAILED')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}
console.log('\nROUTE AUDIT PASSED: all generated course and site-section pages exist.')

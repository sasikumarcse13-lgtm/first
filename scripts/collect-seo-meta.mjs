import fs from 'node:fs'
import path from 'node:path'

const PAGES_DIR = path.resolve('src/pages')

function decodeHtml(value = '') {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

function getProp(source, name) {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([\\s\\S]*?)"`)
  const match = source.match(re)
  return match ? decodeHtml(match[1].trim()) : ''
}

function getBooleanProp(source, name, fallback = true) {
  const re = new RegExp(`\\b${name}\\s*=\\s*\\{\\s*(true|false)\\s*\\}`)
  const match = source.match(re)
  return match ? match[1] === 'true' : fallback
}

function getPageType(source) {
  const value = getProp(source, 'pageType')
  return value || 'webpage'
}

function getBreadcrumbs(source) {
  const match = source.match(/breadcrumbs\s*=\s*\{(\[[\s\S]*?\])\}/)
  if (!match) return []
  const items = []
  const itemRe = /\{\s*['"]?name['"]?\s*:\s*(['"])(.*?)\1\s*,\s*['"]?url['"]?\s*:\s*(['"])(.*?)\3\s*\}/g
  let item
  while ((item = itemRe.exec(match[1]))) items.push({ name: decodeHtml(item[2]), url: item[4] })
  return items
}

function walk(dir) {
  const output = []
  if (!fs.existsSync(dir)) return output
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) output.push(...walk(full))
    else if (entry.isFile() && full.endsWith('.jsx')) output.push(full)
  }
  return output
}

export function collectSeoRoutes() {
  const routes = new Map()
  for (const file of walk(PAGES_DIR)) {
    const source = fs.readFileSync(file, 'utf8')
    if (!source.includes('<SEO')) continue

    const canonical = getProp(source, 'canonical')
    const title = getProp(source, 'title')
    const description = getProp(source, 'description')
    const image = getProp(source, 'image')
    if (!canonical || !title || !description) continue

    const route = canonical === '/' ? '/' : `/${canonical.replace(/^\/+|\/+$/g, '')}/`
    routes.set(route, {
      title,
      description,
      canonical: route,
      noindex: getBooleanProp(source, 'noindex', true),
      pageType: getPageType(source),
      image,
      breadcrumbs: getBreadcrumbs(source),
      sourceFile: path.relative(process.cwd(), file).replaceAll('\\', '/'),
    })
  }

  return routes
}

export function getSeoMeta(route) {
  return collectSeoRoutes().get(route) || null
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const routes = Object.fromEntries(collectSeoRoutes())
  console.log(JSON.stringify(routes, null, 2))
}

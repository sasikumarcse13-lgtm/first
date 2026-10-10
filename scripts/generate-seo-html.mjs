import fs from 'node:fs'
import path from 'node:path'
import { collectSeoRoutes } from './collect-seo-meta.mjs'

const origin = (process.env.VITE_SITE_ORIGIN || 'https://collegeshine.com').replace(/\/+$/, '')
const forceNoindex = String(process.env.VITE_NOINDEX_ALL || '').trim().toLowerCase() === 'true'
const dist = path.resolve('dist')
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const routes = collectSeoRoutes()

if (!routes.has('/')) {
  routes.set('/', {
    title: 'CollegeShine | Colleges, Courses, Admissions & Scholarships',
    description: 'Explore colleges, courses, admissions, entrance exams, counselling, scholarships and education tools with CollegeShine.',
    canonical: '/',
    noindex: false,
    pageType: 'home',
  })
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function absolute(value = '/') {
  if (/^https?:\/\//i.test(String(value))) return String(value)
  return `${origin}${String(value).startsWith('/') ? value : `/${value}`}`
}

function robotsFor(meta) {
  return (forceNoindex || meta.noindex)
    ? 'noindex,follow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
}

function pageSchema(meta, route) {
  const canonical = absolute(meta.canonical || route)
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': meta.pageType === 'collection' ? 'CollectionPage' : 'WebPage',
    '@id': `${canonical}#webpage`,
    name: meta.title,
    url: canonical,
    description: meta.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${origin}/#website` },
    ...(meta.breadcrumbs?.length ? { breadcrumb: { '@id': `${canonical}#breadcrumbs` } } : {}),
  })
}

function htmlFor(meta, route) {
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const canonical = escapeHtml(absolute(meta.canonical || route))
  const robots = robotsFor(meta)
  const schema = pageSchema(meta, route)
  const ogImage = escapeHtml(absolute(meta.image || '/og-default.png'))
  const ogType = meta.pageType === 'article' ? 'article' : 'website'
  const siteSchema = route === '/' ? JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'CollegeShine', url: origin, logo: `${origin}/assets/collegeshine-logo.svg` },
      { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'CollegeShine', url: origin, inLanguage: 'en-IN', publisher: { '@id': `${origin}/#organization` } },
    ],
  }) : ''
  const breadcrumbSchema = meta.breadcrumbs?.length ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absolute(meta.canonical || route)}#breadcrumbs`,
    itemListElement: meta.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: absolute(item.url),
    })),
  }) : ''

  let html = baseHtml
  html = html.replace(/<html\b[^>]*>/i, '<html lang="en-IN">')
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
  html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
  html = html.replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
  html = html.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
  html = html.replace(/<meta name="googlebot"[^>]*>/gi, '')
  html = html.replace(/<meta name="bingbot"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:type"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:title"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:description"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:url"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:site_name"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:image"[^>]*>/gi, '')
  html = html.replace(/<meta property="og:locale"[^>]*>/gi, '')
  html = html.replace(/<meta name="twitter:card"[^>]*>/gi, '')
  html = html.replace(/<meta name="twitter:title"[^>]*>/gi, '')
  html = html.replace(/<meta name="twitter:description"[^>]*>/gi, '')
  html = html.replace(/<script type="application\/ld\+json" data-seo-jsonld="page">[\s\S]*?<\/script>/gi, '')
  html = html.replace(/<script type="application\/ld\+json" data-seo-jsonld="breadcrumbs">[\s\S]*?<\/script>/gi, '')
  html = html.replace('</head>', [
    `<meta name="googlebot" content="${robots}" />`,
    `<meta name="bingbot" content="${robots}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="CollegeShine" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json" data-seo-jsonld="page">${schema}</script>`,
    ...(siteSchema ? [`<script type="application/ld+json" data-seo-jsonld="site">${siteSchema}</script>`] : []),
    ...(breadcrumbSchema ? [`<script type="application/ld+json" data-seo-jsonld="breadcrumbs">${breadcrumbSchema}</script>`] : []),
    '</head>',
  ].join(''))
  return html
}

let count = 0
for (const [route, meta] of routes) {
  const clean = route === '/' ? '' : route.replace(/^\//, '').replace(/\/$/, '')
  const dir = clean ? path.join(dist, clean) : dist
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), htmlFor(meta, route))
  count++
}

console.log(`Generated SEO HTML shells for ${count} routes from the page SEO definitions.`)

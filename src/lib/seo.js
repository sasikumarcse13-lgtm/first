export const SITE_ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || 'https://collegeshine.com').replace(/\/+$/, '')
const FORCE_NOINDEX_ENV = String(import.meta.env.VITE_NOINDEX_ALL || '').trim().toLowerCase() === 'true'
const CURRENT_HOST = typeof window !== 'undefined' ? window.location.hostname.toLowerCase() : 'collegeshine.com'
export const FORCE_NOINDEX = FORCE_NOINDEX_ENV || !['collegeshine.com', 'www.collegeshine.com'].includes(CURRENT_HOST)
export const SITE_NAME = 'CollegeShine'
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-default.png`

// Generated shells stay out of search until their real, reviewed content is added.
export const NOINDEX_EMPTY_PAGES = true

export function normalizePath(pathname) {
  if (!pathname) return '/'
  let p = pathname.split('?')[0].split('#')[0]
  if (!p.startsWith('/')) p = `/${p}`
  p = p.replace(/\/{2,}/g, '/')
  if (p.length > 1 && !p.endsWith('/')) p += '/'
  return p
}

export function absoluteUrl(value = '/') {
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE_ORIGIN}${normalizePath(value)}`
}

function upsertMeta(attribute, key, content) {
  if (content == null || content === '') return null
  let el = document.head.querySelector(`meta[${attribute}="${CSS.escape(key)}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo-jsonld="${id}"]`)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.seoJsonld = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function removeJsonLd(id) {
  document.head.querySelector(`script[data-seo-jsonld="${id}"]`)?.remove()
}

function breadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: absoluteUrl(item.url) } : {}),
    })),
  }
}

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/assets/collegeshine-logo.svg`,
  }
}

export function setSEO({
  title,
  description = '',
  canonical,
  noindex = NOINDEX_EMPTY_PAGES,
  type = 'website',
  pageType = 'webpage',
  image = DEFAULT_OG_IMAGE,
  breadcrumbs = [],
}) {
  const canonicalUrl = absoluteUrl(canonical || window.location.pathname)
  const robots = (FORCE_NOINDEX || noindex)
    ? 'noindex,follow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

  document.documentElement.lang = 'en-IN'
  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'robots', robots)
  upsertMeta('name', 'googlebot', robots)
  upsertMeta('name', 'bingbot', robots)
  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonicalUrl)
  upsertMeta('property', 'og:image', absoluteUrl(image))
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:locale', 'en_IN')
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', absoluteUrl(image))
  upsertLink('canonical', canonicalUrl)

  const pageSchemaType = pageType === 'collection' ? 'CollectionPage' : 'WebPage'
  upsertJsonLd('page', {
    '@context': 'https://schema.org',
    '@type': pageSchemaType,
    '@id': `${canonicalUrl}#webpage`,
    name: title,
    url: canonicalUrl,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    ...(breadcrumbs.length ? { breadcrumb: { '@id': `${canonicalUrl}#breadcrumbs` } } : {}),
  })

  if (pageType === 'home') {
    upsertJsonLd('site', {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema(),
        {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          name: SITE_NAME,
          url: SITE_ORIGIN,
          inLanguage: 'en-IN',
          publisher: { '@id': `${SITE_ORIGIN}/#organization` },
        },
      ],
    })
  } else {
    removeJsonLd('site')
  }

  if (breadcrumbs.length) {
    const data = breadcrumbSchema(breadcrumbs)
    data['@id'] = `${canonicalUrl}#breadcrumbs`
    upsertJsonLd('breadcrumbs', data)
  } else {
    removeJsonLd('breadcrumbs')
  }
}

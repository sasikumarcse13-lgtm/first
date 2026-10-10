const SITE = 'https://colleges.collegeshine.com'

export function absoluteUrl(path) {
  if (!path) return SITE
  const value = String(path)
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE}${value.startsWith('/') ? value : `/${value}`}`
}

function trimDescription(text, max = 158) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[,.!?;:-]+$/, '')}.`
}

export function collegeTitle(c) {
  const dbTitle = String(c?.seo?.metaTitle || '').replace(/\s+/g, ' ').trim()
  if (dbTitle && dbTitle.length <= 60) return dbTitle
  const name = String(c?.name || 'College').replace(/\s+/g, ' ').trim()
  const district = String(c?.district || '').replace(/\s+/g, ' ').trim()
  const candidate = `${name} | ${district ? `${district} | ` : ''}CollegeShine`
  return candidate.length <= 60 ? candidate : `${name.slice(0, 42).replace(/\s+$/, '')} | CollegeShine`
}

export function collegeDescription(c) {
  const dbDescription = String(c?.seo?.metaDescription || '').replace(/\s+/g, ' ').trim()
  if (dbDescription) return trimDescription(dbDescription)
  const name = String(c?.name || 'College').replace(/\s+/g, ' ').trim()
  const district = String(c?.district || 'Tamil Nadu').replace(/\s+/g, ' ').trim()
  const category = String(c?.category || '').replace(/-/g, ' ').trim()
  return trimDescription(`Explore ${name}, a ${category || 'college'} in ${district}, Tamil Nadu. Find courses, admission details, facilities, affiliation and contact information on CollegeShine.`)
}


export function buildSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}#website`,
    name: 'CollegeShine',
    url: SITE,
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/colleges/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildCollegeWebPageSchema(c) {
  const canonical = absoluteUrl(`/colleges/${c.slug}/`)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: collegeTitle(c),
    description: collegeDescription(c),
    isPartOf: { '@id': `${SITE}#website` },
    about: { '@id': `${canonical}#college` },
    inLanguage: 'en-IN',
  }
}

export function buildCollegeSchema(c) {
  const canonical = absoluteUrl(`/colleges/${c.slug}/`)
  const cleanUrl = value => {
    const raw = String(value || '').trim()
    return /^https?:\/\/[^\s]+$/i.test(raw) ? raw : ''
  }
  const website = cleanUrl(c.website)
  const mapLink = cleanUrl(c.mapLink)
  const locality = String(c.location || '').split(',')[0].trim()
  const postalCode = String(c.address || '').match(/\b\d{6}\b/)?.[0]
  const schema = {
    '@context': 'https://schema.org',
    '@type': c?.seo?.structuredData?.schemaType || 'CollegeOrUniversity',
    '@id': `${canonical}#college`,
    name: c.name,
    url: canonical,
    mainEntityOfPage: canonical,
  }
  if (c.about) schema.description = c.about
  if (c.image) schema.image = [absoluteUrl(c.image)]
  if (website) schema.sameAs = [website]
  if (c.phone) schema.telephone = String(c.phone).replace(/^tel:/, '')
  if (c.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(c.email).replace(/^mailto:/, ''))) schema.email = String(c.email).replace(/^mailto:/, '')
  if (c.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: c.address,
      addressLocality: locality || c.district || undefined,
      addressRegion: 'Tamil Nadu',
      postalCode,
      addressCountry: 'IN',
    }
  }
  if (c.district) schema.areaServed = [
    { '@type': 'AdministrativeArea', name: c.district },
    ...(locality && locality.toLowerCase() !== String(c.district).toLowerCase() ? [{ '@type': 'Place', name: locality }] : []),
  ]
  if (mapLink) schema.hasMap = mapLink
  if (locality) schema.location = { '@type': 'Place', name: locality, address: schema.address }
  if (Array.isArray(c.departments) && c.departments.length) {
    schema.hasCourse = c.departments.slice(0, 50).map(course => ({
      '@type': 'Course',
      name: typeof course === 'string' ? course : course?.name,
      provider: { '@type': 'CollegeOrUniversity', name: c.name, url: canonical },
    })).filter(course => course.name)
  }
  return schema
}


export function buildDirectorySchema({ title, canonical, count, colleges = [], category = '', district = '', ownership = '' }) {
  const items = colleges.slice(0, 24).map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    url: absoluteUrl(`/colleges/${c.slug}/`),
  }))
  const schema = [{
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#page`,
    name: title,
    url: canonical,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: count,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: items,
    },
  }]
  if (district || category || ownership) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: title,
      description: title,
      url: canonical,
      spatialCoverage: district ? { '@type': 'AdministrativeArea', name: district } : { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
      isPartOf: { '@type': 'WebSite', name: 'CollegeShine', url: SITE },
    })
  }
  return schema
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function setHead({ title, description, canonical, robots = 'index,follow', image, schema = [] }) {
  document.title = title
  const ensure = (selector, create) => {
    let el = document.head.querySelector(selector)
    if (!el) { el = create(); document.head.appendChild(el) }
    return el
  }
  ensure('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' })).content = description
  ensure('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' })).content = robots
  const link = ensure('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }))
  link.href = canonical
  const metas = [
    ['og:title', title], ['og:description', description], ['og:url', canonical], ['og:type', 'website'], ['og:site_name', 'CollegeShine'],
    ['twitter:title', title], ['twitter:description', description], ['twitter:card', 'summary_large_image'],
  ]
  if (image) metas.push(['og:image', absoluteUrl(image)], ['twitter:image', absoluteUrl(image)])
  metas.forEach(([name, content]) => {
    const attr = name.startsWith('og:') ? 'property' : 'name'
    const selector = `meta[${attr}="${name}"]`
    const el = ensure(selector, () => { const m = document.createElement('meta'); m.setAttribute(attr, name); return m })
    el.content = content
  })
  document.querySelectorAll('script[data-cs-schema]').forEach(s => s.remove())
  schema.filter(Boolean).forEach((obj, i) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.csSchema = String(i)
    script.textContent = JSON.stringify(obj)
    document.head.appendChild(script)
  })
}

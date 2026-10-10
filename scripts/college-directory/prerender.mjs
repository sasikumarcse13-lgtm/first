import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import { buildUniqueCollegeTitles } from './seo-utils.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = path.join(ROOT, 'dist')
dotenv.config({ path: path.join(ROOT, '.env') })
const SITE = (process.env.SITE_URL || 'https://colleges.collegeshine.com').replace(/\/$/, '')

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const jsonEsc = obj => JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
function slugify(input) { return String(input || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ').replace(/[’']/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, '-') }
async function load() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    charset: 'utf8mb4',
  })

  try {
    const [rows] = await pool.query('SELECT * FROM colleges ORDER BY id ASC')
    const colleges = rows.map(row => {
      let data = row.data
      if (typeof data === 'string') {
        try { data = JSON.parse(data) } catch { data = {} }
      }
      const seo = data?.seo || {}
      return {
        ...data,
        id: row.id,
        slug: row.slug,
        name: row.name,
        shortName: row.short_name || data?.shortName || '',
        category: row.category || data?.category || '',
        type: row.type || data?.type || '',
        ownership: row.ownership || data?.ownership || '',
        established: row.established ?? data?.established ?? null,
        location: row.location || data?.location || '',
        district: row.district || data?.district || '',
        address: row.address || data?.address || '',
        mapLink: row.map_link || data?.mapLink || '',
        mapQuery: data?.mapQuery || '',
        website: row.website || data?.website || '',
        phone: row.phone || data?.phone || '',
        email: row.email || data?.email || '',
        image: row.image || data?.image || '',
        metaTitle: row.meta_title || data?.metaTitle || '',
        metaDescription: row.meta_description || data?.metaDescription || '',
        canonicalUrl: row.canonical_url || data?.canonicalUrl || '',
        seo: {
          ...seo,
          metaTitle: row.meta_title || seo.metaTitle || '',
          metaDescription: row.meta_description || seo.metaDescription || '',
          canonicalUrl: row.canonical_url || seo.canonicalUrl || '',
        },
      }
    })
    return buildUniqueCollegeTitles(colleges)
  } finally {
    await pool.end()
  }
}
function cleanImage(value) { return /YOUR_|example\.com|placeholder/i.test(String(value || '')) ? '' : String(value || '') }
function trimDesc(x, max = 158) { const clean = String(x || '').replace(/\s+/g, ' ').trim(); if (clean.length <= max) return clean; return `${clean.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[,.!?;:-]+$/, '')}.` }
function trimTitle(x, max = 60) { const clean = String(x || '').replace(/\s+/g, ' ').trim(); if (clean.length <= max) return clean; const suffix = ' | CollegeShine'; const room = max - suffix.length; return `${clean.slice(0, room).replace(/\s+\S*$/, '').replace(/[|,:;-]+$/, '').trim()}${suffix}` }
function title(c) { const db = String(c.seo?.metaTitle || '').replace(/\s+/g, ' ').trim(); if (db && db.length <= 60) return db; const name = String(c.name || 'College').replace(/\s+/g, ' ').trim(); const value = `${name} | CollegeShine`; return value.length <= 60 ? value : `${name.slice(0, 47).replace(/\s+$/, '')} | CollegeShine` }
function desc(c) { const db = String(c.seo?.metaDescription || '').replace(/\s+/g, ' ').trim(); if (db) return trimDesc(db); const category = String(c.category || 'college').replace(/-/g, ' '); return trimDesc(`Explore ${c.name}, a ${category} college in ${c.district || 'Tamil Nadu'}, Tamil Nadu. Find courses, admissions, facilities, placements and contact information on CollegeShine.`) }
function ownershipGroup(value) { const owner = String(value || '').trim().toLowerCase(); if (owner.includes('aided') || owner.includes('grant-in-aid')) return 'government-aided'; if (owner.includes('government')) return 'government'; if (owner.includes('private')) return 'private'; return '' }
function ownershipLabel(slug) { return slug === 'government-aided' ? 'Government Aided' : slug.charAt(0).toUpperCase() + slug.slice(1) }
function directoryPath({ category = '', district = '', ownership = '' }) {
  if (category && district && ownership) return `/colleges/${category}/${district}/${ownership}/`
  if (category && district) return `/colleges/${category}/${district}/`
  if (category && ownership) return `/colleges/${category}/ownership/${ownership}/`
  if (district && ownership) return `/districts/${district}/ownership/${ownership}/`
  if (category) return `/colleges/${category}/`
  if (district) return `/districts/${district}/`
  if (ownership) return `/colleges/ownership/${ownership}/`
  return '/colleges/'
}
function directoryTitle({ category = '', districtName = '', ownership = '' }) {
  const cat = category ? category.replace(/-/g, ' ') : ''
  const owner = ownership ? ownershipLabel(ownership) : ''
  if (category && districtName && ownership) return trimTitle(`${owner} ${cat} Colleges in ${districtName} | CollegeShine`)
  if (category && districtName) return trimTitle(`${cat} Colleges in ${districtName} | CollegeShine`)
  if (category && ownership) return trimTitle(`${owner} ${cat} Colleges | CollegeShine`)
  if (districtName && ownership) return trimTitle(`${owner} Colleges in ${districtName} | CollegeShine`)
  if (category) return trimTitle(`${cat} Colleges in Tamil Nadu | CollegeShine`)
  if (districtName) return trimTitle(`Colleges in ${districtName} | CollegeShine`)
  if (ownership) return trimTitle(`${owner} Colleges in Tamil Nadu | CollegeShine`)
  return 'Colleges in Tamil Nadu | Search & Filter Colleges | CollegeShine'
}
function directoryDesc({ category = '', districtName = '', ownership = '', count }) {
  const owner = ownership ? `${ownershipLabel(ownership).toLowerCase()} ` : ''
  const cat = category ? `${category.replace(/-/g, ' ').toLowerCase()} ` : ''
  const location = districtName ? `in ${districtName}, Tamil Nadu` : 'in Tamil Nadu'
  return trimDesc(`Explore ${owner}${cat}colleges ${location}. Browse ${count} CollegeShine listings with courses, admissions, placements, facilities and contact details.`)
}
function head(template, { title, description, canonical, robots = 'index,follow', image, schema = [], preloadHero = false }) {
  let html = template
  const replace = (start, end, value) => { html = html.replace(new RegExp(`${start}[\\s\\S]*?${end}`), value) }
  replace('<!-- SEO-TITLE-START -->', '<!-- SEO-TITLE-END -->', `<!-- SEO-TITLE-START --><title>${esc(title)}</title><!-- SEO-TITLE-END -->`)
  replace('<!-- SEO-DESCRIPTION-START -->', '<!-- SEO-DESCRIPTION-END -->', `<!-- SEO-DESCRIPTION-START --><meta name="description" content="${esc(description)}"><!-- SEO-DESCRIPTION-END -->`)
  replace('<!-- SEO-CANONICAL-START -->', '<!-- SEO-CANONICAL-END -->', `<!-- SEO-CANONICAL-START --><link rel="canonical" href="${esc(canonical)}"><!-- SEO-CANONICAL-END -->`)
  replace('<!-- SEO-ROBOTS-START -->', '<!-- SEO-ROBOTS-END -->', `<!-- SEO-ROBOTS-START --><meta name="robots" content="${esc(robots)}"><!-- SEO-ROBOTS-END -->`)
  const og = `<!-- SEO-OG-START --><meta property="og:type" content="website"><meta property="og:site_name" content="CollegeShine"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}">${image ? `<meta property="og:image" content="${esc(image)}">` : ''}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}">${image ? `<meta name="twitter:image" content="${esc(image)}">` : ''}<!-- SEO-OG-END -->`
  replace('<!-- SEO-OG-START -->', '<!-- SEO-OG-END -->', og)
  const heroPreload = preloadHero ? '<link rel="preload" as="image" href="/assets/college-directory-hero-tamilnadu.webp" fetchpriority="high" type="image/webp">' : ''
  html = html.replace('</head>', `${heroPreload}${schema.map(x => `<script type="application/ld+json">${jsonEsc(x)}</script>`).join('')}</head>`)
  return html
}
function collegeSchema(c, slug) {
  const canonical = `${SITE}/colleges/${slug}/`
  const cleanUrl = value => /^https?:\/\/[^\s]+$/i.test(String(value || '').trim()) ? String(value).trim() : ''
  const image = cleanImage(c.image)
  const website = cleanUrl(c.website)
  const mapLink = cleanUrl(c.mapLink)
  const locality = String(c.location || '').split(',')[0].trim()
  const postalCode = String(c.address || '').match(/\b\d{6}\b/)?.[0]
  const obj = { '@context': 'https://schema.org', '@type': c?.seo?.structuredData?.schemaType || 'CollegeOrUniversity', '@id': `${canonical}#college`, name: c.name, url: canonical, mainEntityOfPage: canonical }
  if (c.about) obj.description = c.about
  if (image) obj.image = [image]
  if (website) obj.sameAs = [website]
  if (c.phone) obj.telephone = String(c.phone).replace(/^tel:/, '')
  if (c.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(c.email).replace(/^mailto:/, ''))) obj.email = String(c.email).replace(/^mailto:/, '')
  if (c.address) obj.address = { '@type': 'PostalAddress', streetAddress: c.address, addressLocality: locality || c.district || undefined, addressRegion: 'Tamil Nadu', postalCode, addressCountry: 'IN' }
  if (c.district) obj.areaServed = [{ '@type': 'AdministrativeArea', name: c.district }]
  if (mapLink) obj.hasMap = mapLink
  if (locality) obj.location = { '@type': 'Place', name: locality, address: obj.address }
  if (Array.isArray(c.departments) && c.departments.length) obj.hasCourse = c.departments.slice(0, 50).map(d => ({ '@type': 'Course', name: d?.name || d, provider: { '@type': 'CollegeOrUniversity', name: c.name, url: canonical } }))
  return obj
}

function breadcrumb(items) { return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, item: `${SITE}${x.path}` })) } }
function siteSchema() { return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}#website`, name: 'CollegeShine', url: SITE, inLanguage: 'en-IN', potentialAction: { '@type': 'SearchAction', target: `${SITE}/colleges/?q={search_term_string}`, 'query-input': 'required name=search_term_string' } } }
function collegeWebPageSchema(c, slug) { const canonical = `${SITE}/colleges/${slug}/`; return { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title(c), description: desc(c), isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${canonical}#college` }, inLanguage: 'en-IN' } }
function iconText(name) { const map = { 'ti-location': '●', 'ti-desktop': '▣', 'ti-calendar': '▣', 'ti-check': '✓', 'ti-globe': '◎', 'ti-info': 'i', 'ti-crown': '♛', 'ti-chart': '▥', 'ti-briefcase': '▣', 'ti-plane': '✈', 'ti-train': '▣', 'ti-bus': '▣', 'ti-heart': '♥', 'ti-shield': '⬡', 'ti-gamepad': '◆', 'ti-laundry': '▣', 'ti-drop': '●', 'ti-home': '⌂', 'ti-books': '▤', 'ti-flask': '⚗', 'ti-wifi': '⌁', 'ti-microphone': '●', 'ti-world': '◎', 'ti-cpu': '▣' }; return map[name] || '✓' }
function featureIcon(value) {
  const text = String(value || '').toLowerCase()
  if (text.includes('campus') || text.includes('hostel')) return 'ti-home'
  if (text.includes('clinical') || text.includes('hospital') || text.includes('health')) return 'ti-heart'
  if (text.includes('lab') || text.includes('laborator') || text.includes('simulation')) return 'ti-flask'
  if (text.includes('faculty') || text.includes('experienced')) return 'ti-medall'
  if (text.includes('research') || text.includes('innovation')) return 'ti-light-bulb'
  if (text.includes('library') || text.includes('learning')) return 'ti-books'
  if (text.includes('community')) return 'ti-world'
  if (text.includes('skill') || text.includes('placement')) return 'ti-chart'
  if (text.includes('smart') || text.includes('classroom') || text.includes('digital')) return 'ti-desktop'
  if (text.includes('student')) return 'ti-heart'
  return 'ti-check'
}
function hostelIcon(value) {
  const text = String(value || '').toLowerCase()
  if (text.includes('security') || text.includes('24x7')) return 'ti-shield'
  if (text.includes('wifi') || text.includes('wi-fi')) return 'ti-wifi'
  if (text.includes('mess') || text.includes('food') || text.includes('nutritious')) return 'ti-cup'
  if (text.includes('study')) return 'ti-books'
  if (text.includes('recreation') || text.includes('game')) return 'ti-gamepad'
  if (text.includes('medical') || text.includes('health')) return 'ti-heart'
  if (text.includes('laundry')) return 'ti-laundry'
  if (text.includes('water') || text.includes('drinking')) return 'ti-drop'
  return 'ti-home'
}
function facilityIcon(value) {
  const text = String(value || '').toLowerCase()
  if (text.includes('wifi')) return 'ti-wifi'
  if (text.includes('library')) return 'ti-books'
  if (text.includes('lab')) return 'ti-flask'
  if (text.includes('hostel')) return 'ti-home'
  if (text.includes('transport')) return 'ti-bus'
  if (text.includes('classroom') || text.includes('computer')) return 'ti-desktop'
  if (text.includes('placement')) return 'ti-crown'
  if (text.includes('medical') || text.includes('health')) return 'ti-heart'
  if (text.includes('sport')) return 'ti-crown'
  if (text.includes('auditorium') || text.includes('seminar')) return 'ti-microphone'
  if (text.includes('innovation')) return 'ti-light-bulb'
  if (text.includes('incubation')) return 'ti-bolt'
  return 'ti-check'
}
function cardHtml(c, slug) {
  const placement = [c.placementRate != null ? `<div><span>Placement</span><strong>${esc(c.placementRate)}%</strong></div>` : '', c.avgPackage ? `<div><span>Average Package</span><strong>${esc(c.avgPackage)}</strong></div>` : '', c.highestPackage ? `<div><span>Highest Package</span><strong>${esc(c.highestPackage)}</strong></div>` : ''].filter(Boolean).join('')
  return `<article class="directory-college-card"><a class="directory-card-image" href="/colleges/${esc(slug)}/">${cleanImage(c.image) ? `<img src="${esc(c.image)}" alt="${esc(c.name)} logo" width="360" height="220" loading="lazy">` : '<span class="directory-card-placeholder">CS</span>'}</a><div class="directory-card-body"><div class="directory-card-topline"><span class="directory-card-category">${esc(c.category || 'college')}</span>${c.established ? `<span class="directory-card-established">Established ${esc(c.established)}</span>` : ''}</div><h2><a href="/colleges/${esc(slug)}/">${esc(c.name)}</a></h2>${c.tagline ? `<p class="directory-card-tagline">${esc(c.tagline)}</p>` : ''}<div class="directory-card-location"><span>${iconText('ti-location')}</span>${esc(c.location || c.district || 'Tamil Nadu')}</div><div class="directory-card-meta"><span>${esc(c.ownership || 'College')}</span><span>${esc(c.type || 'Institution')}</span></div>${placement ? `<div class="directory-card-placement" aria-label="Placement information">${placement}</div>` : ''}${c.departments?.length ? `<div class="directory-card-courses" aria-label="Course levels"><span>UG</span><span>PG</span>${c.departments.some(d => /ph\.?d/i.test(String(d?.level || d?.name || d || ''))) ? '<span>PhD</span>' : ''}</div>` : ''}<a class="directory-card-link" href="/colleges/${esc(slug)}/">View college details <span>→</span></a>${c.website ? `<a class="directory-official-site" href="${esc(c.website)}" target="_blank" rel="noopener noreferrer">Official Website ↗</a>` : ''}</div></article>`
}
function featureGrid(items, resolver = () => 'ti-check', className = '') { if (!items?.length) return '<p class="detail-empty">Information is not currently available in the supplied database.</p>'; return `<div class="feature-grid ${className}">${items.map((item, i) => { const name = typeof item === 'string' ? item : item?.name || item?.title || ''; const icon = item?.icon || resolver(name); return `<div class="feature-card"><span class="college-icon">${iconText(icon)}</span><span>${esc(name)}</span></div>` }).join('')}</div>` }
function bulletList(items) { if (!items?.length) return '<p class="detail-empty">Information is not currently available in the supplied database.</p>'; return `<ul class="detail-bullet-list">${items.map(x => `<li><span class="college-icon">✓</span>${esc(typeof x === 'string' ? x : x?.name || x?.title || '')}</li>`).join('')}</ul>` }
function courseTable(departments) { if (!departments?.length) return '<p class="detail-empty">Course information is not currently available in the supplied database.</p>'; return `<div class="detail-course-table"><div class="detail-course-row detail-course-head"><span>S.No</span><span>Course Name</span><span>Level</span></div>${departments.map((d, i) => `<div class="detail-course-row"><span>${i + 1}</span><span>${esc(d.name)}</span><span>${esc(d.level || '—')}</span></div>`).join('')}</div>` }
function mapHtml(c) { const query = c.mapQuery || c.address || `${c.name} ${c.district || ''} Tamil Nadu`; const mapUrl = c.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`; return `<section class="detail-section" id="map"><h2 class="detail-section-title"><span>Google Map Location</span></h2><div class="map-embed-wrap"><iframe title="${esc(c.name)} location map" src="${esc(embedUrl)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><div class="map-under-row"><span>${iconText('ti-location')}${esc(c.address || c.location || 'Location is not currently available in the supplied database.')}</span><a class="map-button" href="${esc(mapUrl)}" target="_blank" rel="noopener noreferrer">${iconText('ti-location')} Open in Google Maps</a></div></section>` }
function staticCollege(c, slug) {
  const categoryIsReal = Boolean(c.category) && slugify(c.category) !== 'all'; const categoryPath = categoryIsReal ? `/colleges/${slugify(c.category)}/` : '/colleges/'; const categoryLabel = categoryIsReal ? String(c.category).replace(/-/g, ' ') : 'Colleges'; const districtSlug = slugify(c.district || 'tamil-nadu'); const districtPath = `/districts/${districtSlug}/`; const badges = [...(c.accreditation || [])]; if (c.affiliation && !badges.includes(c.affiliation)) badges.push(c.affiliation); const distance = c.distanceInfo || {}
  const placement = [c.placementRate != null ? `<div class="placement-card placement-0"><span class="college-icon">▥</span><div><span>Placement Rate${c.placementYear ? ` (${esc(c.placementYear)})` : ''}</span><strong>${esc(c.placementRate)}%</strong></div></div>` : '', c.avgPackage ? `<div class="placement-card placement-1"><span class="college-icon">▣</span><div><span>Average Package</span><strong>${esc(c.avgPackage)}</strong></div></div>` : '', c.highestPackage ? `<div class="placement-card placement-2"><span class="college-icon">♛</span><div><span>Highest Package</span><strong>${esc(c.highestPackage)}</strong></div></div>` : ''].filter(Boolean).join('')
  const campusGroups = [{ label: 'Technical Clubs', icon: 'ti-cpu', items: c.technicalClubs }, { label: 'Cultural Clubs', icon: 'ti-microphone', items: c.culturalClubs }, { label: 'Community Service', icon: 'ti-world', items: c.communityService }].filter(x => x.items?.length)
  const campusHtml = campusGroups.length ? `<section class="detail-section" id="campus-life"><h2 class="detail-section-title"><span>Campus Life</span></h2><div class="campus-life-tabs" role="tablist" aria-label="Campus life categories">${campusGroups.map((g, i) => `<button type="button" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" class="${i === 0 ? 'active' : ''}">${iconText(g.icon)} ${esc(g.label)}</button>`).join('')}</div><div class="campus-life-columns">${campusGroups.map(g => `<div class="campus-life-panel"><div class="campus-life-panel-icon">${iconText(g.icon)}</div><div><h3>${esc(g.label)}</h3>${bulletList(g.items)}</div></div>`).join('')}</div></section>` : ''
  return `<main id="main-content" class="college-detail-page"><section class="college-detail-hero"><div class="container"><nav class="detail-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>›</span><a href="/colleges/">Colleges</a><span>›</span><a href="${categoryPath}">${esc(categoryLabel)}</a><span>›</span><a href="${districtPath}">${esc(c.district || 'Tamil Nadu')}</a><span>›</span><span aria-current="page">${esc(c.name)}</span></nav><div class="detail-hero-main"><div class="detail-logo-wrap">${cleanImage(c.image) ? `<img class="detail-college-logo" src="${esc(c.image)}" alt="${esc(c.name)} logo" width="150" height="150" loading="eager">` : `<div class="detail-logo-fallback">${esc(String(c.name || 'CS').slice(0,2).toUpperCase())}</div>`}</div><div class="detail-hero-copy"><h1>${esc(c.seo?.h1 || c.name)}</h1>${c.shortName ? `<div class="detail-short-name">${esc(c.shortName)}</div>` : ''}${c.tagline ? `<p class="detail-tagline">${esc(c.tagline)}</p>` : ''}<div class="detail-facts">${c.location ? `<span>${iconText('ti-location')} ${esc(c.location)}</span>` : ''}${c.type ? `<span>${iconText('ti-desktop')} ${esc(c.type)}</span>` : ''}${c.established ? `<span>${iconText('ti-calendar')} Established in ${esc(c.established)}</span>` : ''}</div>${badges.length ? `<div class="detail-badges">${badges.map(x => `<span class="college-badge">${iconText('ti-check')}${esc(x)}</span>`).join('')}</div>` : ''}<div class="detail-hero-actions">${c.website ? `<a class="detail-action primary detail-official-site" href="${esc(c.website)}" target="_blank" rel="noopener noreferrer">${iconText('ti-globe')} Official Website ↗</a>` : ''}<a class="detail-action gold" href="#admission">${iconText('ti-info')} Get Admission Info</a></div></div></div></div></section><div class="container college-detail-content"><section class="detail-section" id="overview"><h2 class="detail-section-title"><span>About ${esc(c.name)}</span></h2><p class="detail-about">${esc(c.about || 'College overview is not currently available in the supplied database.')}</p></section>${c.highlights?.length ? `<section class="detail-section" id="highlights"><h2 class="detail-section-title"><span>Highlights</span></h2>${featureGrid(c.highlights, featureIcon, 'highlights-grid')}</section>` : ''}<section class="detail-section" id="courses"><h2 class="detail-section-title"><span>Courses Offered</span></h2>${courseTable(c.departments)}</section><section class="detail-section" id="admission"><h2 class="detail-section-title"><span>Admission Process</span></h2>${c.admissionProcess?.length ? `<div class="admission-steps">${c.admissionProcess.map((x, i) => `<div class="admission-step"><div class="admission-number">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p></div></div>`).join('')}</div>` : '<p class="detail-empty">Admission information is not currently available in the supplied database.</p>'}</section>${c.facilities?.length ? `<section class="detail-section" id="facilities"><h2 class="detail-section-title"><span>Facilities</span></h2>${featureGrid(c.facilities, facilityIcon)}</section>` : ''}${placement ? `<section class="detail-section" id="placements"><h2 class="detail-section-title"><span>Placement Information</span></h2><div class="placement-grid">${placement}</div></section>` : ''}${c.scholarships?.length ? `<section class="detail-section" id="scholarships"><h2 class="detail-section-title"><span>Scholarships</span></h2><div class="scholarship-panel">${bulletList(c.scholarships)}</div></section>` : ''}${c.hostelFeatures?.length ? `<section class="detail-section" id="hostel"><h2 class="detail-section-title"><span>Hostel Facilities</span></h2>${featureGrid(c.hostelFeatures, hostelIcon, 'hostel-feature-grid')}</section>` : ''}${c.events?.length ? `<section class="detail-section" id="events"><h2 class="detail-section-title"><span>Events</span></h2><div class="events-grid">${bulletList(c.events)}</div></section>` : ''}${campusHtml}<section class="detail-section" id="location"><h2 class="detail-section-title"><span>Location &amp; Distance</span></h2><div class="distance-grid">${distance.airport ? `<div class="distance-card"><span>✈</span><span>Airport</span><strong>${esc(distance.airport)}</strong></div>` : ''}${distance.railway ? `<div class="distance-card"><span>▣</span><span>Railway Station</span><strong>${esc(distance.railway)}</strong></div>` : ''}${distance.bustand ? `<div class="distance-card"><span>▣</span><span>Bus Stand</span><strong>${esc(distance.bustand)}</strong></div>` : ''}${distance.metro ? `<div class="distance-card"><span>▣</span><span>Metro</span><strong>${esc(distance.metro)}</strong></div>` : ''}${distance.hospital ? `<div class="distance-card"><span>♥</span><span>Hospital</span><strong>${esc(distance.hospital)}</strong></div>` : ''}</div></section>${mapHtml(c)}<section class="detail-section contact-section" id="contact"><h2 class="detail-section-title"><span>Contact Details</span></h2><div class="contact-row"><div class="contact-address"><span class="college-icon">${iconText('ti-location')}</span><span>${esc(c.address || c.location || 'Address is not currently available in the supplied database.')}</span></div>${c.phone ? `<a class="contact-item" href="tel:${esc(String(c.phone).replace(/[^+\d]/g,''))}"><span class="college-icon">${iconText('ti-phone')}</span><span>${esc(c.phone)}</span></a>` : ''}${c.email ? `<a class="contact-item" href="${esc(c.email.startsWith('mailto:') ? c.email : `mailto:${c.email}`)}"><span class="college-icon">${iconText('ti-mail')}</span><span>${esc(c.email.replace(/^mailto:/,''))}</span></a>` : ''}${c.website ? `<a class="contact-item" href="${esc(c.website)}"><span class="college-icon">${iconText('ti-globe')}</span><span>${esc(c.website.replace(/^https?:\/\//,''))}</span></a>` : ''}${c.mapLink ? `<a class="map-button" href="${esc(c.mapLink)}">${iconText('ti-location')} Open in Google Maps</a>` : ''}</div></section></div></main>`
}
function staticNav() {
  return `<a class="skip-link" href="#main-content">Skip to main content</a><header class="site-header"><div class="container nav-inner"><a class="brand" href="/colleges/" aria-label="CollegeShine Colleges home"><span class="brand-mark">CS</span><span>CollegeShine</span></a><nav aria-label="Primary navigation"><a href="/colleges/">Colleges</a><a href="/colleges/engineering/">Engineering</a><a href="/colleges/nursing/">Nursing</a><a href="/districts/coimbatore/">Coimbatore</a><a href="/search/">Search</a></nav></div></header>`
}
function staticFooter() {
  return `<footer class="site-footer"><div class="container footer-grid"><div><strong>CollegeShine</strong><p>Explore college information across Tamil Nadu.</p></div><div><strong>Explore</strong><a href="/colleges/">All Colleges</a><a href="/districts/">Districts</a><a href="/search/">Search Colleges</a></div><div><strong>Popular</strong><a href="/colleges/engineering/">Engineering</a><a href="/colleges/nursing/">Nursing</a><a href="/colleges/arts-science/">Arts &amp; Science</a></div></div><div class="container footer-bottom">© ${new Date().getFullYear()} CollegeShine. College information is subject to source availability and institutional updates.</div></footer>`
}
function staticDirectory(titleText, descText, cards, count, districtName = '', category = '', ownership = '') {
  const local = districtName ? `Find ${category ? `${category.replace(/-/g, ' ')} ` : ''}colleges in ${districtName}, Tamil Nadu, with local course, admission, facilities and contact information where available.` : `Explore colleges across Tamil Nadu by course category, district and ownership. Browse ${count.toLocaleString()} directory listings and open individual college pages for detailed institutional information.`
  return `${staticNav()}<main id="main-content"><section class="directory-clean-header"><div class="container"><div class="directory-kicker">Tamil Nadu College Directory</div><h1>${esc(titleText)}</h1><p>${esc(descText)}</p></div></section><section class="container directory-single"><div class="single-column-college-list">${cards}</div></section><section class="directory-seo-copy"><div class="container"><div class="seo-copy-card"><div><div class="directory-kicker">CollegeShine Local College Directory</div><h2>${esc(districtName ? `Colleges in ${districtName}, Tamil Nadu` : 'Colleges across Tamil Nadu')}</h2></div><p>${esc(local)}</p></div></div></section></main>${staticFooter()}`
}
function writePage(rel, html) { const out = path.join(DIST, rel); fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(out, html, 'utf8') }

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const rawDb = await load()
const districtDisplay = new Map()
for (const c of rawDb) { const k = String(c?.district || '').trim().toLowerCase(); if (k && !districtDisplay.has(k)) districtDisplay.set(k, String(c.district).trim()) }
const db = rawDb.map(c => ({ ...c, district: districtDisplay.get(String(c?.district || '').trim().toLowerCase()) || c.district }))
const slugMap = new Map()
const colleges = db.map(c => { let base = slugify(c.id) || slugify(c.name); let s = base; if (slugMap.has(s)) s = `${base}-${slugify(c.district)}`; let n = 2; while (slugMap.has(s)) s = `${base}-${n++}`; slugMap.set(s, c.id); return { c, slug: s } })
const cats = [...new Set(db.map(c => c.category).filter(Boolean).filter(category => slugify(category) !== 'all'))].sort()
const districts = [...new Set(db.map(c => c.district).filter(Boolean))].sort()
const districtBySlug = new Map(districts.map(d => [slugify(d), d]))
const ownerships = ['private', 'government', 'government-aided']
const index = colleges.map(x => x.c)

const directoryPages = []
function addDirectory(filters, cardsSource) {
  const pathValue = directoryPath(filters)
  if (directoryPages.some(x => x.path === pathValue)) return
  // Keep every directory URL indexable while limiting initial HTML to the first 20 listings.
  // Individual college pages remain fully prerendered.
  const cards = cardsSource.filter(Boolean).slice(0, 20).map(x => cardHtml(x.c, x.slug)).join('')
  if (!cards) return
  directoryPages.push({ ...filters, path: pathValue, cards, count: cardsSource.length, source: cardsSource })
}
addDirectory({}, colleges)
for (const cat of cats) addDirectory({ category: cat }, colleges.filter(x => x.c.category === cat))
for (const d of districts) addDirectory({ district: slugify(d), districtName: d }, colleges.filter(x => x.c.district === d))
for (const o of ownerships) addDirectory({ ownership: o }, colleges.filter(x => ownershipGroup(x.c.ownership) === o))
for (const cat of cats) for (const d of districts) addDirectory({ category: cat, district: slugify(d), districtName: d }, colleges.filter(x => x.c.category === cat && x.c.district === d))
for (const cat of cats) for (const o of ownerships) addDirectory({ category: cat, ownership: o }, colleges.filter(x => x.c.category === cat && ownershipGroup(x.c.ownership) === o))
for (const d of districts) for (const o of ownerships) addDirectory({ district: slugify(d), districtName: d, ownership: o }, colleges.filter(x => x.c.district === d && ownershipGroup(x.c.ownership) === o))
for (const cat of cats) for (const d of districts) for (const o of ownerships) addDirectory({ category: cat, district: slugify(d), districtName: d, ownership: o }, colleges.filter(x => x.c.category === cat && x.c.district === d && ownershipGroup(x.c.ownership) === o))

for (const page of directoryPages) {
  const canonical = `${SITE}${page.path}`
  const pageTitle = directoryTitle(page)
  const pageDescription = directoryDesc({ ...page, count: page.count })
  const schemaItems = [{ name: 'Colleges', path: '/colleges/' }]
  if (page.category) schemaItems.push({ name: page.category.replace(/-/g, ' '), path: `/colleges/${page.category}/` })
  if (page.districtName) schemaItems.push({ name: page.districtName, path: `/districts/${page.district}/` })
  if (page.ownership) schemaItems.push({ name: ownershipLabel(page.ownership), path: page.path })
  const listItems = page.source.slice(0, 20).map((x, i) => ({ name: x.c.name, slug: x.slug }))
  const schema = [siteSchema(), breadcrumb(schemaItems), {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#page`,
    name: pageTitle,
    url: canonical,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: page.count,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: listItems.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: `${SITE}/colleges/${x.slug}/` })),
    },
  }]
  if (page.districtName) schema.push({ '@context': 'https://schema.org', '@type': 'AdministrativeArea', name: page.districtName, containedInPlace: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }, url: canonical })
  const html = head(template, { title: pageTitle, description: pageDescription, canonical, robots: 'index,follow', schema, preloadHero: true })
  writePage(path.join(page.path.replace(/^\//, ''), 'index.html'), html.replace('<div id="root"></div>', staticDirectory(pageTitle.replace(' | CollegeShine', ''), pageDescription, page.cards, page.count, page.districtName || '', page.category || '', page.ownership || '')))
}

for (const { c, slug } of colleges) {
  const canonical = `${SITE}/colleges/${slug}/`
  const categoryIsReal = Boolean(c.category) && slugify(c.category) !== 'all'
  const categoryPath = categoryIsReal ? `/colleges/${slugify(c.category)}/` : '/colleges/'
  const categoryLabel = categoryIsReal ? String(c.category).replace(/-/g, ' ') : 'Colleges'
  const districtPath = `/districts/${slugify(c.district || 'tamil-nadu')}/`
  const html = head(template, { title: title(c), description: desc(c), canonical, robots: 'index,follow', image: cleanImage(c.image), schema: [siteSchema(), collegeWebPageSchema(c, slug), collegeSchema(c, slug), breadcrumb([{ name: 'Colleges', path: '/colleges/' }, { name: categoryLabel, path: categoryPath }, { name: c.district || 'Tamil Nadu', path: districtPath }, { name: c.name, path: `/colleges/${slug}/` }])] })
  writePage(path.join('colleges', slug, 'index.html'), html.replace('<div id="root"></div>', `${staticNav()}${staticCollege(c, slug)}${staticFooter()}`))
}

const districtCards = districts.map(d => `<a class="taxonomy-tile" href="/districts/${slugify(d)}/"><strong>${esc(d)}</strong><span>Explore colleges →</span></a>`).join('')
const districtIndex = head(template, { title: 'Districts in Tamil Nadu | CollegeShine', description: 'Browse CollegeShine college directories by district across Tamil Nadu.', canonical: `${SITE}/districts/`, robots: 'index,follow', schema: [breadcrumb([{ name: 'Colleges', path: '/colleges/' }, { name: 'Districts', path: '/districts/' }])] })
writePage(path.join('districts', 'index.html'), districtIndex.replace('<div id="root"></div>', `${staticNav()}<main id="main-content"><section class="directory-hero compact"><div class="container"><div class="eyebrow">Tamil Nadu</div><h1>Colleges by district in Tamil Nadu</h1><p>Explore all ${districts.length} district directories in the CollegeShine database and discover local colleges by location.</p></div></section><section class="container tile-grid">${districtCards}</section><section class="directory-seo-copy"><div class="container"><div class="seo-copy-card"><div><div class="directory-kicker">Local College Search</div><h2>Find colleges by district in Tamil Nadu</h2></div><p>Browse local college directories for Coimbatore, Chennai, Erode, Salem, Namakkal, Tirupur, Madurai, Trichy and other Tamil Nadu districts. Each district page links to individual college profiles with address, courses, admissions and contact information where available.</p></div></div></section></main>${staticFooter()}`))

const urls = directoryPages.map(x => `${SITE}${x.path}`).concat(colleges.map(x => `${SITE}/colleges/${x.slug}/`), [`${SITE}/districts/`])
const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u => `<url><loc>${esc(u)}</loc></url>`).join('')}</urlset>`
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml)
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /search\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
fs.writeFileSync(path.join(DIST, 'llms.txt'), `# CollegeShine\n\nCollegeShine is a Tamil Nadu college discovery directory with individual college profiles and browsable directory pages.\n\n## Primary resources\n- [CollegeShine](${SITE}/): College discovery homepage.\n- [Colleges directory](${SITE}/colleges/): Browse Tamil Nadu colleges.\n- [District directories](${SITE}/districts/): Browse colleges by Tamil Nadu district.\n- [College sitemap](${SITE}/sitemap.xml): Complete XML sitemap of indexable college and directory pages.\n\n## Individual college pages\nEach college has a stable URL under /colleges/{college-slug}/ with title, description, canonical URL, Open Graph metadata, breadcrumb data and CollegeOrUniversity structured data where applicable.\n\n## Search\n- [Search colleges](${SITE}/search/): Search the CollegeShine directory.\n`)
console.log(`[prerender] colleges=${colleges.length} directoryPages=${directoryPages.length} districts=${districts.length} urls=${urls.length}`)

const MAX_TITLE = 60
const SITE_SUFFIX = ' | CollegeShine'

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

function trimToWords(value, max) {
  const text = clean(value)
  if (text.length <= max) return text
  const cut = text.slice(0, max).replace(/\s+\S*$/, '').replace(/[|,:;\-]+$/, '').trim()
  return cut || text.slice(0, max).trim()
}

function titleWithParts(name, middle = '') {
  const suffix = `${middle ? ` | ${middle}` : ''}${SITE_SUFFIX}`
  const room = MAX_TITLE - suffix.length
  return `${trimToWords(name, Math.max(20, room))}${suffix}`
}

/**
 * Create deterministic, human-readable college titles and guarantee uniqueness.
 * Existing source meta titles are preserved only when they are already unique.
 */
export function buildUniqueCollegeTitles(colleges) {
  const used = new Set()
  const result = []

  for (const original of colleges || []) {
    const c = { ...original, seo: { ...(original.seo || {}) } }
    const name = clean(c.name) || 'College'
    const district = clean(c.district)
    const location = clean(String(c.location || '').split(',')[0])
    const category = clean(c.category).replace(/[-_]+/g, ' ')
    const originalTitle = clean(c.seo?.metaTitle)

    let candidates = [
      originalTitle,
      titleWithParts(name, district),
      titleWithParts(name, location || district),
      titleWithParts(name, category),
      titleWithParts(name, district && category ? `${district} • ${category}` : district || category),
    ]

    let title = ''
    for (const candidate of candidates) {
      if (!candidate || candidate.length > MAX_TITLE || used.has(candidate)) continue
      title = candidate
      break
    }

    if (!title) {
      const baseMiddle = location || district || category || 'Tamil Nadu'
      let base = titleWithParts(name, baseMiddle)
      let counter = 2
      while (used.has(base)) {
        const marker = ` #${counter++}`
        const room = MAX_TITLE - SITE_SUFFIX.length - marker.length
        base = `${trimToWords(name, Math.max(16, room))}${marker}${SITE_SUFFIX}`
      }
      title = base
    }

    used.add(title)
    c.seo.metaTitle = title
    result.push(c)
  }

  return result
}

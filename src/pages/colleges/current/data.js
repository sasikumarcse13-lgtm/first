const cache = new Map()
let indexValue = null
let taxonomyValue = null

export function getCachedIndex() { return indexValue }
export function getCachedTaxonomy() { return taxonomyValue }

// College detail HTML is prerendered with its own JSON payload. Use it for the
// first client render so a direct visit does not briefly replace the page with a loading spinner.
export function getPrerenderedCollege(slug) {
  if (typeof window === 'undefined') return null
  const payload = window.__COLLEGE_PAGE_DATA__
  return payload && payload.slug === slug && payload.college ? payload.college : null
}

export function getPrerenderedRelated(slug) {
  if (typeof window === 'undefined') return []
  const payload = window.__COLLEGE_PAGE_DATA__
  return payload && payload.slug === slug && Array.isArray(payload.related) ? payload.related : []
}

async function fetchWithStaticFallback(apiUrl, staticUrl, message) {
  let response
  try { response = await fetch(apiUrl) } catch { response = null }
  if (response?.ok) return response.json()
  if (response?.status === 404) {
    // A 404 from the API means a detail record might genuinely not exist;
    // static fallback is still useful during migration and local development.
    if (staticUrl) {
      const fallback = await fetch(staticUrl)
      if (fallback.status === 404) return null
      if (fallback.ok) return fallback.json()
    }
    return null
  }
  if (staticUrl) {
    const fallback = await fetch(staticUrl)
    if (fallback.ok) return fallback.json()
  }
  throw new Error(message)
}

export function getIndex() {
  if (!cache.has('index')) {
    cache.set('index', fetchWithStaticFallback('/api/colleges?limit=5000', '/data/index.json', 'Unable to load college index').then(data => {
      // The production API returns a paginated object; static migration data is an array.
      const items = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : null)
      if (!items) throw new Error('Invalid college index response')
      indexValue = items
      return items
    }))
  }
  return cache.get('index')
}

export function getTaxonomy() {
  if (!cache.has('taxonomy')) {
    cache.set('taxonomy', fetchWithStaticFallback('/api/taxonomy', '/data/taxonomy.json', 'Unable to load taxonomy').then(data => {
      if (!data) throw new Error('Invalid taxonomy response')
      taxonomyValue = data
      return data
    }))
  }
  return cache.get('taxonomy')
}

export function getCollege(slug) {
  const key = `college:${slug}`
  if (!cache.has(key)) {
    cache.set(key, fetchWithStaticFallback(`/api/colleges/${encodeURIComponent(slug)}`, `/data/colleges/${encodeURIComponent(slug)}.json`, 'Unable to load college'))
  }
  return cache.get(key)
}

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import SEO from '../../components/SEO/SEO.jsx'
import CollegeIcon from '../../components/CollegeIcon/CollegeIcon.jsx'
import Loading from '../../components/Loading/Loading.jsx'
import AdmissionLeadModal from '../../components/Admission/AdmissionLeadModal.jsx'
import CounsellingModal from '../../components/Counselling/CounsellingModal.jsx'
import { getIndex, getTaxonomy, getCachedIndex, getCachedTaxonomy } from '../../data.js'
import { absoluteUrl, buildBreadcrumbSchema, buildDirectorySchema, buildSiteSchema } from '../../seo.js'
import { slugify } from '../../slug.js'

const PAGE_SIZE = 20
const OWNERSHIP_OPTIONS = [
  { label: 'Private', slug: 'private' },
  { label: 'Government', slug: 'government' },
  { label: 'Government Aided', slug: 'government-aided' },
]

const pretty = value => String(value || '').replace(/-/g, ' ').replace(/\b\w/g, m => m.toUpperCase())

function ownershipGroup(value) {
  const owner = String(value || '').trim().toLowerCase()
  if (owner.includes('aided') || owner.includes('grant-in-aid')) return 'government-aided'
  if (owner.includes('government')) return 'government'
  if (owner.includes('private')) return 'private'
  return ''
}

function getRouteFilters(params, taxonomy) {
  const categories = taxonomy?.categories || []
  const districts = taxonomy?.districts || []
  const rawCategoryParam = params.category ?? params.slug ?? ''
  const categoryParam = rawCategoryParam ? slugify(rawCategoryParam) : ''
  const category = categoryParam && categoryParam !== 'all' && categories.includes(categoryParam) ? categoryParam : ''
  const district = params.districtSlug && districts.some(d => slugify(d) === params.districtSlug) ? params.districtSlug : ''
  const ownership = params.ownership && OWNERSHIP_OPTIONS.some(x => x.slug === params.ownership) ? params.ownership : ''
  return { category, district, ownership }
}

function buildDirectoryPath({ category = '', district = '', ownership = '' }) {
  if (category && district && ownership) return `/colleges/${category}/${district}/${ownership}/`
  if (category && district) return `/colleges/${category}/${district}/`
  if (category && ownership) return `/colleges/${category}/ownership/${ownership}/`
  if (district && ownership) return `/districts/${district}/ownership/${ownership}/`
  if (category) return `/colleges/${category}/`
  if (district) return `/districts/${district}/`
  if (ownership) return `/colleges/ownership/${ownership}/`
  return '/colleges/'
}

function buildPageTitle({ category, districtName, ownership }) {
  const parts = []
  if (ownership) parts.push(ownership === 'government-aided' ? 'Government Aided' : pretty(ownership))
  if (category) parts.push(pretty(category))
  if (districtName) parts.push(`Colleges in ${districtName}`)
  if (!parts.length) return 'Colleges in Tamil Nadu | Search & Filter Colleges | CollegeShine'
  if (category && districtName) return `${parts.filter(Boolean).join(' ')} | CollegeShine`
  if (ownership && districtName) return `${pretty(ownership)} Colleges in ${districtName} | CollegeShine`
  if (category) return `${pretty(category)} Colleges in Tamil Nadu | CollegeShine`
  if (districtName) return `Colleges in ${districtName} | CollegeShine`
  return `${pretty(ownership)} Colleges in Tamil Nadu | CollegeShine`
}

function buildPageDescription({ category, districtName, ownership, count }) {
  const ownerText = ownership ? `${ownership === 'government-aided' ? 'government aided' : ownership} ` : ''
  const categoryText = category ? `${pretty(category).toLowerCase()} ` : ''
  const districtText = districtName ? ` in ${districtName}, Tamil Nadu` : ' in Tamil Nadu'
  return `Explore ${ownerText}${categoryText}colleges${districtText}. Browse ${count.toLocaleString()} CollegeShine listings with courses, admissions, placements, facilities and contact details.`
}

function Pagination({ page, totalPages, onChange }) {
  const [input, setInput] = useState(String(page))
  useEffect(() => setInput(String(page)), [page])
  const pages = []
  const start = Math.max(1, Math.min(page - 2, totalPages - 4))
  const end = Math.min(totalPages, start + 4)
  for (let n = start; n <= end; n++) pages.push(n)
  const go = () => {
    const value = Number.parseInt(input, 10)
    if (!Number.isFinite(value)) return setInput(String(page))
    onChange(Math.max(1, Math.min(totalPages, value)))
  }
  return <nav className="directory-pagination-v24" aria-label="College directory pagination">
    <button type="button" className="pager-arrow" disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="Previous page">‹</button>
    {start > 1 && <><button type="button" onClick={() => onChange(1)}>1</button>{start > 2 && <i>…</i>}</>}
    {pages.map(n => <button key={n} type="button" className={n === page ? 'active' : ''} onClick={() => onChange(n)} aria-current={n === page ? 'page' : undefined}>{n}</button>)}
    {end < totalPages && <>{end < totalPages - 1 && <i>…</i>}<button type="button" onClick={() => onChange(totalPages)}>{totalPages}</button></>}
    <button type="button" className="pager-arrow" disabled={page === totalPages} onClick={() => onChange(page + 1)} aria-label="Next page">›</button>
    <form className="pagination-jump-v24" onSubmit={e => { e.preventDefault(); go() }} aria-label="Go to page">
      <label htmlFor="page-jump-v24">Go to</label>
      <input id="page-jump-v24" type="number" min="1" max={totalPages} inputMode="numeric" value={input} onChange={e => setInput(e.target.value)} aria-label={`Page number, 1 to ${totalPages}`} />
      <button type="submit">Go</button>
    </form>
  </nav>
}

function FilterSelect({ label, value, onChange, options, format = x => x, slugValues = false }) {
  return <label className="filter-field-v24">
    <span>{label}</span>
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">All {label.toLowerCase()}</option>
      {options.map(option => {
        const optionValue = slugValues ? slugify(option) : option
        return <option key={optionValue} value={optionValue}>{format(option)}</option>
      })}
    </select>
  </label>
}

function getCollegeLevels(college) {
  if (Array.isArray(college.levels) && college.levels.length) return college.levels
  const courses = Array.isArray(college.departments) ? college.departments : []
  const levels = new Set()
  courses.forEach(course => {
    const name = String(typeof course === 'string' ? course : course?.name || '').toLowerCase()
    const explicit = typeof course === 'object' ? String(course?.level || '').trim().toUpperCase() : ''
    if (explicit.includes('PHD') || name.includes('ph.d') || name.includes('phd')) levels.add('PhD')
    else if (explicit === 'PG' || /(^|\s)(m\.|m\.sc|m\.tech|m\.e|m\.a|m\.com|mba|mca|md|ms|mpt|m\.pharm|master|post graduate|post basic)/i.test(name)) levels.add('PG')
    else if (explicit === 'UG' || /(^|\s)(b\.|b\.sc|b\.tech|b\.e|b\.a|b\.com|bba|bca|be|bt|mbbs|bds|bpt|b\.pharm|bachelor|under graduate)/i.test(name)) levels.add('UG')
    else if (explicit) levels.add(explicit.replace(/\b\w/g, m => m.toUpperCase()))
  })
  return [...levels]
}

export default function DirectoryPage() {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const cachedIndex = getCachedIndex()
  const cachedTaxonomy = getCachedTaxonomy()
  const [items, setItems] = useState(cachedIndex || [])
  const [taxonomy, setTaxonomy] = useState(cachedTaxonomy || { categories: [], districts: [] })
  const [loading, setLoading] = useState(!cachedIndex || !cachedTaxonomy)
  const [q, setQ] = useState('')
  const [draftQ, setDraftQ] = useState('')
  const [sort, setSort] = useState('name-asc')
  const [page, setPage] = useState(1)
  const [mobileFilters, setMobileFilters] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [admissionCollege, setAdmissionCollege] = useState(null)
  const [suggestionIndex, setSuggestionIndex] = useState(-1)
  const [counsellingOpen, setCounsellingOpen] = useState(false)
  const filterCloseRef = useRef(null)

  useEffect(() => {
    let alive = true
    Promise.all([getIndex(), getTaxonomy()]).then(([i, t]) => {
      if (!alive) return
      setItems(i)
      setTaxonomy(t)
    }).finally(() => alive && setLoading(false))
    return () => { alive = false }
  }, [])

  const routeFilters = useMemo(() => getRouteFilters(params, taxonomy), [params.category, params.slug, params.districtSlug, params.ownership, taxonomy])
  const routeCategoryParam = params.category ?? params.slug ?? ''
  const routeIsInvalid = Boolean(
    (routeCategoryParam && slugify(routeCategoryParam) !== 'all' && !routeFilters.category) ||
    (params.districtSlug && !routeFilters.district) ||
    (params.ownership && !routeFilters.ownership)
  )
  const districtName = useMemo(() => taxonomy.districts?.find(d => slugify(d) === routeFilters.district) || '', [taxonomy.districts, routeFilters.district])
  const activePath = buildDirectoryPath(routeFilters)

  const navigateWith = next => {
    const path = buildDirectoryPath({
      category: next.category ?? routeFilters.category,
      district: next.district ?? routeFilters.district,
      ownership: next.ownership ?? routeFilters.ownership,
    })
    setPage(1)
    navigate(path)
  }

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    const result = items.filter(c => {
      const haystack = [c.name, c.shortName, c.district, c.location, c.type, c.ownership, c.affiliation].join(' ').toLowerCase()
      return (!query || haystack.includes(query)) &&
        (!routeFilters.category || c.category === routeFilters.category) &&
        (!routeFilters.district || slugify(c.district) === routeFilters.district) &&
        (!routeFilters.ownership || ownershipGroup(c.ownership) === routeFilters.ownership)
    })
    if (sort === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name))
    if (sort === 'newest') result.sort((a, b) => (b.established || 9999) - (a.established || 9999))
    if (sort === 'oldest') result.sort((a, b) => (a.established || 9999) - (b.established || 9999))
    if (sort === 'placement') result.sort((a, b) => (Number(b.placementRate) || 0) - (Number(a.placementRate) || 0))
    return result
  }, [items, q, routeFilters.category, routeFilters.district, routeFilters.ownership, sort])

  useEffect(() => setPage(1), [q, routeFilters.category, routeFilters.district, routeFilters.ownership, sort])
  useEffect(() => {
    if (!mobileFilters) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = event => { if (event.key === 'Escape') setMobileFilters(false) }
    document.addEventListener('keydown', onKeyDown)
    window.requestAnimationFrame(() => filterCloseRef.current?.focus())
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown) }
  }, [mobileFilters])

  const baseFiltered = useMemo(() => items.filter(c =>
    (!routeFilters.category || c.category === routeFilters.category) &&
    (!routeFilters.district || slugify(c.district) === routeFilters.district) &&
    (!routeFilters.ownership || ownershipGroup(c.ownership) === routeFilters.ownership)
  ), [items, routeFilters.category, routeFilters.district, routeFilters.ownership])
  const routeHasNoResults = Boolean((routeFilters.category || routeFilters.district || routeFilters.ownership) && baseFiltered.length === 0)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const hasFilters = Boolean(routeFilters.category || routeFilters.district || routeFilters.ownership || q)

  const districtCounts = useMemo(() => {
    const map = new Map()
    items.forEach(c => {
      const key = String(c.district || '').trim()
      if (key) map.set(key, (map.get(key) || 0) + 1)
    })
    return [...map.entries()].sort((a, b) => b[1] - a[1])
  }, [items])
  const topDistricts = districtCounts.slice(0, 9)

  const clearFilters = () => {
    setQ(''); setDraftQ(''); setSort('name-asc'); setPage(1); navigate('/colleges/')
  }
  const submitSearch = e => {
    e.preventDefault()
    const value = draftQ.trim()
    setQ(value)
    setPage(1)
    setSearchOpen(false)
    setSuggestionIndex(-1)
  }

  const suggestions = useMemo(() => {
    const term = draftQ.trim().toLowerCase()
    if (!term) return []
    const results = []
    const seen = new Set()
    const add = (label, type, meta = '') => {
      const key = `${type}:${label}`.toLowerCase()
      if (!label || seen.has(key)) return
      if (label.toLowerCase().includes(term) || meta.toLowerCase().includes(term)) {
        seen.add(key)
        results.push({ label, type, meta })
      }
    }
    items.forEach(c => add(c.name, 'College', c.district || c.location || ''))
    return results.slice(0, 8)
  }, [draftQ, items, taxonomy.categories, taxonomy.districts])

  const chooseSuggestion = suggestion => {
    const value = suggestion.label
    setDraftQ(value)
    setQ(value)
    setPage(1)
    setSearchOpen(false)
    setSuggestionIndex(-1)
  }

  const active = [
    q && ['search', `“${q}”`, () => { setQ(''); setDraftQ('') }],
    routeFilters.category && ['category', pretty(routeFilters.category), () => navigateWith({ category: '' })],
    routeFilters.district && ['district', districtName, () => navigateWith({ district: '' })],
    routeFilters.ownership && ['ownership', routeFilters.ownership === 'government-aided' ? 'Government Aided' : pretty(routeFilters.ownership), () => navigateWith({ ownership: '' })],
  ].filter(Boolean)

  if (loading) return <Loading label="Loading colleges…" />
  if (routeIsInvalid || routeHasNoResults) {
    return <><SEO title="Directory page not found | CollegeShine" description="The requested CollegeShine directory page could not be found." canonical={absoluteUrl(location.pathname)} robots="noindex,follow" /><div className="container not-found"><h1>Directory page not found</h1><p>The selected college directory combination does not exist.</p><button className="button" type="button" onClick={() => navigate('/colleges/')}>Browse all colleges</button></div></>
  }

  const title = buildPageTitle({ category: routeFilters.category, districtName, ownership: routeFilters.ownership })
  const description = buildPageDescription({ category: routeFilters.category, districtName, ownership: routeFilters.ownership, count: filtered.length })
  const localPhrase = [routeFilters.category ? pretty(routeFilters.category) : '', districtName ? `colleges in ${districtName}` : 'colleges across Tamil Nadu', routeFilters.ownership ? (routeFilters.ownership === 'government-aided' ? 'government aided' : pretty(routeFilters.ownership).toLowerCase()) : ''].filter(Boolean).join(' ')
  const breadcrumb = [{ name: 'Colleges', path: '/colleges/' }]
  if (routeFilters.category) breadcrumb.push({ name: pretty(routeFilters.category), path: `/colleges/${routeFilters.category}/` })
  if (districtName) breadcrumb.push({ name: districtName, path: `/districts/${routeFilters.district}/` })
  if (routeFilters.ownership) breadcrumb.push({ name: routeFilters.ownership === 'government-aided' ? 'Government Aided' : pretty(routeFilters.ownership), path: activePath })
  const visibleForSchema = filtered.slice(0, 24)
  const directorySchema = buildDirectorySchema({ title, canonical: absoluteUrl(activePath), count: filtered.length, colleges: visibleForSchema, category: routeFilters.category, district: districtName, ownership: routeFilters.ownership })

  return <>
    <SEO title={title} description={description} canonical={absoluteUrl(activePath)} robots="index,follow" schema={[buildSiteSchema(), buildBreadcrumbSchema(breadcrumb), ...directorySchema]} />

    <section className="directory-v24-hero directory-reference-hero">
      <div className="directory-v24-hero-bg" aria-hidden="true" />
      <div className="container directory-v24-hero-inner">
        <div className="directory-v24-hero-copy directory-reference-copy">
          <div className="directory-v24-kicker">Tamil Nadu College Directory</div>
<h1>
  {routeFilters.category || routeFilters.district || routeFilters.ownership
    ? title.replace(' | CollegeShine', '')
    : 'Find Colleges in Tamil Nadu'}
</h1>          <p>Search colleges by name</p>
          <form className="directory-v24-search directory-reference-search" onSubmit={submitSearch} role="search" onFocus={() => draftQ.trim() && setSearchOpen(true)} onBlur={() => setTimeout(() => setSearchOpen(false), 160)}>
            <CollegeIcon name="ti-location" size={25} />
            <div className="directory-autocomplete">
              <input
                value={draftQ}
                onChange={e => { setDraftQ(e.target.value); setSearchOpen(true); setSuggestionIndex(-1) }}
                onKeyDown={e => {
                  if (!searchOpen || !suggestions.length) return
                  if (e.key === 'ArrowDown') { e.preventDefault(); setSuggestionIndex(i => Math.min(i + 1, suggestions.length - 1)) }
                  if (e.key === 'ArrowUp') { e.preventDefault(); setSuggestionIndex(i => Math.max(i - 1, 0)) }
                  if (e.key === 'Enter' && suggestionIndex >= 0) { e.preventDefault(); chooseSuggestion(suggestions[suggestionIndex]) }
                  if (e.key === 'Escape') setSearchOpen(false)
                }}
                placeholder="Search college name"
                aria-label="Search college name"
                autoComplete="off"
              />
              {searchOpen && draftQ.trim() && suggestions.length > 0 && (
                <div className="directory-autocomplete-menu" role="listbox">
                  {suggestions.map((s, i) => (
                    <button key={`${s.type}-${s.label}-${i}`} type="button" className={i === suggestionIndex ? 'is-active' : ''} onMouseDown={e => e.preventDefault()} onClick={() => chooseSuggestion(s)} role="option" aria-selected={i === suggestionIndex}>
                      <span className="autocomplete-icon"><CollegeIcon name={s.type === 'College' ? 'ti-building' : s.type === 'District' ? 'ti-location' : s.type === 'Course' ? 'ti-books' : 'ti-books'} size={18} /></span>
                      <span className="autocomplete-copy"><strong>{s.label}</strong><small>{s.type}{s.meta ? ` · ${s.meta}` : ''}</small></span>
                      <span className="autocomplete-arrow">↗</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {draftQ && <button className="directory-v24-search-clear" type="button" onClick={() => { setDraftQ(''); setQ(''); setSearchOpen(false) }} aria-label="Clear search">×</button>}
            <button type="submit">Search <span>→</span></button>
          </form>

          <div className="directory-popular-searches" aria-label="Popular searches">
            <strong>Popular Searches:</strong>
            {[['Engineering','engineering','ti-cpu'],['Arts & Science','arts-science','ti-books'],['Medical','medical','ti-heartbeat'],['Nursing','nursing','ti-heart']].map(([label, slug, icon]) => {
              const match = (taxonomy.categories || []).find(c => slugify(c).includes(slug) || slug.includes(slugify(c)))
              return <button key={label} type="button" onClick={() => match && navigateWith({ category: slugify(match) })}><CollegeIcon name={icon} size={18} /> {label}</button>
            })}
          </div>

          <div className="directory-v24-stats directory-reference-stats">
            <div><span className="stat-icon blue"><CollegeIcon name="ti-building" size={25} /></span><strong>{items.length.toLocaleString()}+</strong><small>Colleges</small></div>
<div>
  <span className="stat-icon gold">
    <CollegeIcon name="ti-location" size={25} />
  </span>
  <strong>38</strong>
  <small>Districts</small>
</div>            <div><span className="stat-icon green"><CollegeIcon name="ti-books" size={25} /></span><strong>{taxonomy.categories?.filter(x => slugify(x) !== 'all').length || 0}</strong><small>Course Categories</small></div>
          </div>
        </div>
      </div>

    </section>

    <section id="directory-v24-workspace" className="directory-v24-workspace container">
      <button className="directory-v24-mobile-filter" type="button" aria-expanded={mobileFilters} onClick={() => setMobileFilters(true)}><CollegeIcon name="ti-cpu" size={18} /> Filters {active.length ? `(${active.length})` : ''}</button>
      {mobileFilters && <div className="directory-v24-overlay" onClick={() => setMobileFilters(false)} aria-hidden="true" />}

      <aside className={`directory-v24-sidebar ${mobileFilters ? 'is-open' : ''}`} role={mobileFilters ? 'dialog' : undefined} aria-modal={mobileFilters ? 'true' : undefined} aria-label="College filters">
        <div className="directory-v24-filter-head"><div><CollegeIcon name="ti-cpu" size={21} /><strong>Filter Colleges</strong></div><button ref={filterCloseRef} type="button" onClick={() => setMobileFilters(false)} aria-label="Close filters">×</button></div>
        <FilterSelect label="Course / Category" value={routeFilters.category} onChange={value => navigateWith({ category: value })} options={(taxonomy.categories || []).filter(x => slugify(x) !== 'all')} format={pretty} />
        <FilterSelect label="District" value={routeFilters.district} onChange={value => navigateWith({ district: value })} options={taxonomy.districts || []} format={pretty} slugValues />
        <FilterSelect label="Ownership" value={routeFilters.ownership} onChange={value => navigateWith({ ownership: value })} options={OWNERSHIP_OPTIONS.map(x => x.slug)} format={value => OWNERSHIP_OPTIONS.find(x => x.slug === value)?.label || pretty(value)} />
        <button className="directory-v24-apply" type="button" onClick={() => setMobileFilters(false)}><CollegeIcon name="ti-cpu" size={17} /> Apply Filters</button>
        <button className="directory-v24-clear" type="button" onClick={clearFilters}>↻ &nbsp; Clear All</button>

        <div className="directory-v24-explore">
          <div className="directory-v24-explore-title"><div><strong>Explore<br />by District</strong></div><span><CollegeIcon name="ti-location" size={31} /></span></div>
          {topDistricts.map(([district, count]) => <button key={district} type="button" onClick={() => navigate(`/districts/${slugify(district)}/`)}><span><CollegeIcon name="ti-location" size={14} /> {pretty(district)}</span><b>{count}</b></button>)}
          <button className="directory-v24-all-districts" type="button" onClick={() => navigate('/districts/')}>View All Districts <span>→</span></button>
        </div>

        <div className="directory-v24-help"><CollegeIcon name="ti-phone" size={31} /><h2>Need Help?</h2><p>Get guidance on courses, colleges and admissions.</p><button type="button" onClick={() => setCounsellingOpen(true)}>Get Free Counselling <span>→</span></button></div>
      </aside>

      <main className="directory-v24-results">
        <div className="directory-v24-results-head">
          <div><div className="directory-v24-count"><strong>{filtered.length.toLocaleString()}</strong> <span>colleges found</span></div><p>{hasFilters ? 'Showing colleges matching your selected filters.' : 'Browse the complete Tamil Nadu college directory'}</p></div>
          <div className="directory-v24-toolbar"><label>Sort by <select value={sort} onChange={e => setSort(e.target.value)}><option value="name-asc">Name A–Z</option><option value="relevance">Relevance</option><option value="name-desc">Name Z–A</option><option value="newest">Recently established</option><option value="oldest">Oldest colleges</option><option value="placement">Placement rate</option></select></label></div>
        </div>

        {active.length > 0 && <div className="directory-v24-active-filters">{active.map(([key, label, remove]) => <button key={key} type="button" onClick={remove}>{label} ×</button>)}<button className="clear-inline" type="button" onClick={clearFilters}>Clear All</button></div>}

        {visible.length > 0 ? <div className="directory-v24-list">{visible.map((c, i) => {
          const levels = getCollegeLevels(c)
          return <article className="directory-v24-card" key={c.id}>
            <div className="directory-v24-rank" aria-hidden="true"><span>{String((safePage - 1) * PAGE_SIZE + i + 1).padStart(2, '0')}</span></div>
            <Link className="directory-v24-logo" to={`/colleges/${c.slug}/`} aria-label={`View ${c.name}`}>
              {c.image ? <img src={c.image} alt={`${c.name} logo`} width="150" height="150" loading={i < 2 ? 'eager' : 'lazy'} /> : <span>CS</span>}
            </Link>
            <div className="directory-v24-card-main">
              <span className="directory-v24-category">{pretty(c.category || 'college')}</span>
              <h2><Link to={`/colleges/${c.slug}/`}>{c.name}</Link></h2>
              {c.tagline && <p className="directory-card-tagline">{c.tagline}</p>}
              <div className="directory-v24-meta"><span><CollegeIcon name="ti-location" size={15} /> {c.location || c.district || 'Tamil Nadu'}</span><span>•</span><span>{c.ownership || 'College'}</span>{c.established && <><span>•</span><span>Established {c.established}</span></>}</div>
              <div className="directory-v24-courses" aria-label="Course levels">{levels.length ? levels.map(level => <span key={level}>{level}</span>) : <span>UG</span>}</div>
            </div>
            <div className="directory-v24-card-side">
              <div className="directory-v24-metrics">
                <div className="metric-green"><CollegeIcon name="ti-chart" size={19} /><strong>{c.placementRate != null ? `${c.placementRate}%` : 'N/A'}</strong><small>Placement Rate</small></div>
                <div className="metric-purple"><CollegeIcon name="ti-briefcase" size={19} /><strong>{c.avgPackage || 'N/A'}</strong><small>Average Package</small></div>
                <div className="metric-gold"><CollegeIcon name="ti-crown" size={19} /><strong>{c.highestPackage || 'N/A'}</strong><small>Highest Package</small></div>
              </div>
              <div className="directory-v24-card-actions">
                <button className="directory-v24-apply" type="button" onClick={() => setAdmissionCollege(c)}>Apply Now <span>↗</span></button>
                <Link className="directory-v24-details" to={`/colleges/${c.slug}/`}>View Details <span>→</span></Link>
              </div>
              {c.website && <a className="directory-official-site" href={c.website} target="_blank" rel="noopener noreferrer">Official Website ↗</a>}
            </div>
          </article>
        })}</div> : <div className="directory-empty"><div className="empty-icon">⌕</div><h2>No colleges found</h2><p>Try a broader search or remove one of the filters.</p><button type="button" onClick={clearFilters}>Clear all filters</button></div>}
        {totalPages > 1 && <Pagination page={safePage} totalPages={totalPages} onChange={n => { setPage(n); window.scrollTo({ top: 330, behavior: 'smooth' }) }} />}
      </main>
    </section>

    <section className="directory-v24-seo"><div className="container"><div className="directory-v24-seo-card"><div className="directory-v24-kicker">CollegeShine Local College Directory</div><h2>{routeFilters.category || routeFilters.district || routeFilters.ownership ? `Explore ${localPhrase}` : 'Explore colleges by course and location across Tamil Nadu'}</h2><p>{districtName ? `Find ${routeFilters.category ? `${pretty(routeFilters.category).toLowerCase()} ` : ''}colleges in ${districtName}, Tamil Nadu, including local institutions with course, admission, facilities, affiliation, placement and contact information where available.` : `Explore colleges across Tamil Nadu by course category, district and ownership. CollegeShine connects each directory listing to a dedicated college page so students can move from local discovery to detailed institutional information.`}</p></div></div></section>
    <a className="directory-floating-whatsapp" href="https://wa.me/919865553629?text=Hi%20CollegeShine%2C%20I%20need%20help%20finding%20a%20college." target="_blank" rel="noopener noreferrer" aria-label="Chat with CollegeShine on WhatsApp"><CollegeIcon name="ti-phone" size={23} /><span>WhatsApp</span></a>
    <AdmissionLeadModal college={admissionCollege} open={Boolean(admissionCollege)} onClose={() => setAdmissionCollege(null)} />
    <CounsellingModal open={counsellingOpen} onClose={() => setCounsellingOpen(false)} />
  </>
}

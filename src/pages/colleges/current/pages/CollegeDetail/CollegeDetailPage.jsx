import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SEO from '../../components/SEO/SEO.jsx'
import CollegeIcon from '../../components/CollegeIcon/CollegeIcon.jsx'
import Loading from '../../components/Loading/Loading.jsx'
import AdmissionLeadModal from '../../components/Admission/AdmissionLeadModal.jsx'
import { getCachedIndex, getCollege, getIndex, getPrerenderedCollege, getPrerenderedRelated } from '../../data.js'
import { absoluteUrl, buildBreadcrumbSchema, buildCollegeSchema, buildCollegeWebPageSchema, buildSiteSchema, collegeDescription, collegeTitle } from '../../seo.js'
import { slugify } from '../../slug.js'

const pretty = value => String(value || '').replace(/-/g, ' ').replace(/\b\w/g, m => m.toUpperCase())

function Section({ title, children, id, className = '' }) {
  return <section className={`detail-section detail-section--${id} ${className}`.trim()} id={id}>
    <h2 className="detail-section-title"><span>{title}</span></h2>
    {children}
  </section>
}

function Badge({ children, icon = 'ti-check' }) {
  return <span className="college-badge"><CollegeIcon name={icon} size={15} />{children}</span>
}

function textValue(item) {
  return typeof item === 'string' ? item : item?.name || item?.title || ''
}

function highlightIcon(value) {
  const text = String(value || '').toLowerCase()
  if (text.includes('campus') || text.includes('hostel')) return 'ti-home'
  if (text.includes('clinical') || text.includes('hospital') || text.includes('health')) return 'ti-heartbeat'
  if (text.includes('lab') || text.includes('laborator') || text.includes('simulation')) return 'ti-flask'
  if (text.includes('faculty') || text.includes('experienced')) return 'ti-medall'
  if (text.includes('research') || text.includes('innovation')) return 'ti-light-bulb'
  if (text.includes('library') || text.includes('learning')) return 'ti-books'
  if (text.includes('community')) return 'ti-world'
  if (text.includes('skill') || text.includes('placement')) return 'ti-chart'
  if (text.includes('smart') || text.includes('classroom') || text.includes('digital')) return 'ti-desktop'
  if (text.includes('student')) return 'ti-heart'
  if (text.includes('industry') || text.includes('tie-up') || text.includes('collaboration')) return 'ti-briefcase'
  return 'ti-check'
}

function hostelIcon(value) {
  const text = String(value || '').toLowerCase()
  if (text.includes('security') || text.includes('24x7')) return 'ti-shield'
  if (text.includes('wifi') || text.includes('wi-fi')) return 'ti-wifi'
  if (text.includes('mess') || text.includes('food') || text.includes('nutritious')) return 'ti-cup'
  if (text.includes('study') || text.includes('library')) return 'ti-books'
  if (text.includes('recreation') || text.includes('game')) return 'ti-gamepad'
  if (text.includes('medical') || text.includes('health')) return 'ti-heartbeat'
  if (text.includes('laundry')) return 'ti-laundry'
  if (text.includes('water') || text.includes('drinking')) return 'ti-drop'
  if (text.includes('boys') || text.includes('girls') || text.includes('hostel')) return 'ti-home'
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
  if (text.includes('medical') || text.includes('health')) return 'ti-heartbeat'
  if (text.includes('sport')) return 'ti-trophy'
  if (text.includes('auditorium') || text.includes('seminar')) return 'ti-microphone'
  if (text.includes('media') || text.includes('camera')) return 'ti-camera'
  if (text.includes('innovation')) return 'ti-light-bulb'
  if (text.includes('incubation')) return 'ti-bolt'
  return 'ti-check'
}

function FeatureGrid({ items = [], iconFallback = 'ti-check', iconResolver, className = '' }) {
  if (!items?.length) return <p className="detail-empty">Information is not currently available in the supplied database.</p>
  return <div className={`feature-grid ${className}`.trim()}>
    {items.map((item, i) => {
      const name = textValue(item)
      const icon = typeof item === 'object' && item?.icon ? item.icon : (iconResolver ? iconResolver(name) : iconFallback)
      return <div className="feature-card" key={`${name}-${i}`}><CollegeIcon name={icon} size={28} /><span>{name}</span></div>
    })}
  </div>
}

function BulletList({ items = [], className = '', iconResolver }) {
  if (!items?.length) return <p className="detail-empty">Information is not currently available in the supplied database.</p>
  return <ul className={`detail-bullet-list ${className}`.trim()}>{items.map((item, i) => {
    const value = textValue(item)
    const icon = typeof item === 'object' && item?.icon ? item.icon : (iconResolver ? iconResolver(value, i) : 'ti-check')
    return <li key={`${value}-${i}`}><span className="detail-list-icon" aria-hidden="true"><CollegeIcon name={icon} size={16} /></span><span>{value}</span></li>
  })}</ul>
}

function CourseTable({ departments }) {
  if (!departments?.length) return <p className="detail-empty">Course information is not currently available in the supplied database.</p>
  return <div className="detail-course-table" role="table" aria-label="Courses offered">
    <div role="rowgroup">
      <div className="detail-course-row detail-course-head" role="row"><span role="columnheader">S.No</span><span role="columnheader">Course Name</span><span role="columnheader">Level</span></div>
    </div>
    <div role="rowgroup">
      {departments.map((course, i) => <div className="detail-course-row" role="row" key={`${course.name}-${i}`}><span role="cell">{i + 1}</span><span role="cell">{course.name}</span><span role="cell">{course.level || '—'}</span></div>)}
    </div>
  </div>
}

function AdmissionSteps({ steps }) {
  if (!steps?.length) return <p className="detail-empty">Admission information is not currently available in the supplied database.</p>
  return <div className="admission-steps">
    {steps.map((step, i) => <div className="admission-step" key={`${step.title}-${i}`}>
      <div className="admission-number">{String(i + 1).padStart(2, '0')}</div>
      <div><h3>{step.title}</h3><p>{step.desc}</p></div>
    </div>)}
  </div>
}


function RelatedCollegeCard({ c }) {
  return <Link className="related-college-card" to={`/colleges/${c.slug}/`}>
    <div className="related-card-topline"><span>{c.category || 'College'}</span><span>{c.established ? `Est. ${c.established}` : ''}</span></div>
    <div className="related-college-logo">{c.image ? <img src={c.image} alt={`${c.name} logo`} width="74" height="74" loading="lazy" decoding="async" /> : <span>{String(c.name || 'CS').slice(0, 2).toUpperCase()}</span>}</div>
    <div className="related-college-body">
      <strong>{c.name}</strong>
      <span><CollegeIcon name="ti-location" size={12} />{c.location || c.district || 'Tamil Nadu'}</span>
      <div className="related-college-metrics">
        {c.placementRate != null && <em><CollegeIcon name="ti-chart" size={11} />{c.placementRate}%</em>}
        {c.avgPackage && <em><CollegeIcon name="ti-briefcase" size={11} />{c.avgPackage}</em>}
        {c.highestPackage && <em><CollegeIcon name="ti-crown" size={11} />{c.highestPackage}</em>}
      </div>
    </div>
    <span className="related-card-arrow" aria-hidden="true">→</span>
  </Link>
}

function CollegeShineAd() {
  return <div className="cs-eng-wrap">
    <div className="container ad-container">
      <div className="ad-wrap">
        <span className="ad-label">Sponsored</span>
        <div className="ad-content">
          <h3 className="ad-title">PARTNER WITH COLLEGESHINE</h3>
          <p className="ad-subtitle">Promote your college, courses and admissions to students searching for the right education opportunities.</p>
          <a href="tel:9865553629" className="ad-phone" onClick={e => e.stopPropagation()}>📞 Call 98655 53629</a>
          <a href="/advertise-with-us" className="ad-phone" onClick={e => e.stopPropagation()}>Advertise With Us</a>
        </div>
      </div>
    </div>
  </div>
}

function Placement({ c }) {
  const items = [
    ['Placement Rate', c.placementRate != null ? `${c.placementRate}%` : 'Not available', 'ti-chart'],
    ['Average Package', c.avgPackage || 'Not available', 'ti-briefcase'],
    ['Highest Package', c.highestPackage || 'Not available', 'ti-crown'],
  ]
  return <Section title="Placement Information" id="placements">
    <div className="placement-grid">
      {items.map(([label, value, icon], i) => <div className={`placement-card placement-${i}`} key={label}>
        <CollegeIcon name={icon} size={26} />
        <div><span>{label}</span><strong>{value}</strong></div>
      </div>)}
    </div>
  </Section>
}

function CampusLife({ c }) {
  const groups = [
    ['Technical Clubs', c.technicalClubs, 'ti-cpu'],
    ['Cultural Clubs', c.culturalClubs, 'ti-star'],
    ['Community Service', c.communityService, 'ti-world'],
  ]
  return <Section title="Campus Life" id="campus-life">
    <div className="campus-life-columns">
      {groups.map(([label, items, icon]) => <article className="campus-life-column" key={label}>
        <div className="campus-life-column-head"><span className="campus-life-icon"><CollegeIcon name={icon} size={22} /></span><h3>{label}</h3></div>
        <BulletList items={items || []} iconResolver={() => icon} />
      </article>)}
    </div>
  </Section>
}

function MapSection({ c }) {
  const query = c.mapQuery || c.address || `${c.name} ${c.district || ''} Tamil Nadu`
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  return <Section title="Google Map Location" id="map">
    <div className="map-embed-wrap">
      <iframe
        title={`${c.name} location map`}
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <div className="map-under-row">
      <span><CollegeIcon name="ti-location" size={18} />{c.address || c.location || 'Location is not currently available in the supplied database.'}</span>
      {c.mapLink && <a className="map-button" href={c.mapLink} target="_blank" rel="noopener noreferrer"><CollegeIcon name="ti-location" size={18} />Open in Google Maps</a>}
    </div>
  </Section>
}

export default function CollegeDetailPage({ slugOverride = '' }) {
  const { slug: routeSlug } = useParams()
  const location = useLocation()
  const slug = slugOverride || routeSlug
  const initialCollege = getPrerenderedCollege(slug)
  const initialIndex = getCachedIndex() || []
  const [c, setC] = useState(() => initialCollege)
  const [related, setRelated] = useState(() => getPrerenderedRelated(slug).length ? getPrerenderedRelated(slug) : (initialCollege ? initialIndex.filter(x => x.id !== initialCollege.id && (x.category === initialCollege.category || x.district === initialCollege.district)).slice(0, 10) : []))
  const [loading, setLoading] = useState(() => !initialCollege)
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false)

  useEffect(() => {
    let alive = true
    Promise.all([getCollege(slug), getIndex()]).then(([college, index]) => {
      if (!alive) return
      setC(college)
      if (college) setRelated(index.filter(x => x.id !== college.id && (x.category === college.category || x.district === college.district)).slice(0, 10))
    }).finally(() => alive && setLoading(false))
    return () => { alive = false }
  }, [slug])

  useEffect(() => {
    if (!c) return undefined
    const timer = window.setTimeout(() => setAdmissionModalOpen(true), 3000)
    return () => window.clearTimeout(timer)
  }, [c?.slug])

  useEffect(() => {
    // Every college detail route should start at the top, including related-college navigation.
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!c) return undefined
    const root = document.querySelector('.college-detail-page')
    if (!root) return undefined
    root.classList.add('reveal-ready')
    const sections = [...root.querySelectorAll('.detail-section, .detail-info-ribbon, .related-detail')]
    sections.forEach((section, index) => {
      section.style.setProperty('--reveal-delay', `${Math.min(index * 55, 420)}ms`)
      section.querySelectorAll('.feature-card, .placement-card, .admission-step, .distance-card, .detail-info-ribbon-item, .campus-life-column, .detail-bullet-list li, .related-college-card').forEach((item, i) => {
        item.style.setProperty('--item-delay', `${Math.min(i * 45, 360)}ms`)
      })
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [c])

  if (loading) return <Loading label="Loading college details…" />
  if (!c) return <><SEO title="College not found | CollegeShine" description="The requested college page could not be found." canonical={absoluteUrl('/colleges/')} robots="noindex,follow" /><div className="container not-found"><h1>College not found</h1><p>The requested college page does not exist.</p><Link className="button" to="/colleges/">Browse colleges</Link></div></>

  const canonical = absoluteUrl(`/colleges/${c.slug}/`)
  const categoryPath = c.category && slugify(c.category) !== 'all' ? `/colleges/${slugify(c.category)}/` : '/colleges/'
  const districtSlug = slugify(c.district || 'tamil-nadu')
  const districtPath = `/districts/${districtSlug}/`
  const breadcrumbItems = [{ name: 'Colleges', path: '/colleges/' }, { name: c.category && slugify(c.category) !== 'all' ? pretty(c.category) : 'Colleges', path: categoryPath }, { name: c.district || 'Tamil Nadu', path: districtPath }, { name: c.name }]
  const schema = [buildSiteSchema(), buildCollegeWebPageSchema(c), buildCollegeSchema(c), buildBreadcrumbSchema(breadcrumbItems.map(x => ({ name: x.name, path: x.path || canonical })))]
  const badges = [...(c.accreditation || [])]
  if (c.affiliation && !badges.includes(c.affiliation)) badges.push(c.affiliation)
  const distance = c.distanceInfo || {}

  return <>
    <SEO title={collegeTitle(c)} description={c.seo?.metaDescription || collegeDescription(c)} canonical={canonical} robots="index,follow" image={c.image} schema={schema} />

    <div className="college-detail-page college-detail-v15">
      <section className="college-detail-hero" id="overview">
        <div className="container">
          <div className="detail-hero-topline">
            <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span>›</span><Link to="/colleges/">Colleges</Link><span>›</span><Link to={categoryPath}>{c.category && slugify(c.category) !== 'all' ? pretty(c.category) : 'Colleges'}</Link><span>›</span><Link to={districtPath}>{c.district || 'Tamil Nadu'}</Link><span>›</span><span aria-current="page">{c.name}</span>
            </nav>
          </div>
          <div className="detail-hero-main">
            <div className="detail-logo-wrap">
              {c.image ? <img className="detail-college-logo" src={c.image} alt={`${c.name} logo`} width="150" height="150" loading="eager" fetchpriority="high" /> : <div className="detail-logo-fallback" aria-hidden="true">{String(c.name || 'CS').slice(0, 2).toUpperCase()}</div>}
            </div>
            <div className="detail-hero-copy">
              <h1>{c.seo?.h1 || c.name}</h1>
              {c.tagline && <p className="detail-tagline">{c.tagline}</p>}
              <div className="detail-facts">
                {c.location && <span><CollegeIcon name="ti-location" size={17} />{c.location}</span>}
                {c.type && <span><CollegeIcon name="ti-desktop" size={17} />{c.type}</span>}
                {c.established && <span><CollegeIcon name="ti-calendar" size={17} />Established in {c.established}</span>}
              </div>
              {badges.length > 0 && <div className="detail-badges">{badges.map((badge, i) => <Badge key={`${badge}-${i}`}>{badge}</Badge>)}</div>}
              <div className="detail-hero-actions">
                <button className="detail-action gold" type="button" onClick={() => setAdmissionModalOpen(true)}><CollegeIcon name="ti-clipboard" size={18} />Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="detail-info-ribbon" aria-label="College information">
        <div className="detail-info-ribbon-item">
          <div className="detail-info-ribbon-icon"><CollegeIcon name="ti-home" size={20} /></div>
          <div><small>Ownership</small><strong>{c.ownership || 'Not available'}</strong></div>
        </div>
        <div className="detail-info-ribbon-item">
          <div className="detail-info-ribbon-icon"><CollegeIcon name="ti-desktop" size={20} /></div>
          <div><small>College Type</small><strong>{c.type || 'Not available'}</strong></div>
        </div>
        <div className="detail-info-ribbon-item">
          <div className="detail-info-ribbon-icon"><CollegeIcon name="ti-calendar" size={20} /></div>
          <div><small>Established</small><strong>{c.established || 'Not available'}</strong></div>
        </div>
        <div className="detail-info-ribbon-item">
          <div className="detail-info-ribbon-icon"><CollegeIcon name="ti-books" size={20} /></div>
          <div><small>Affiliated To</small><strong>{c.affiliation || (Array.isArray(c.accreditation) ? c.accreditation.find(item => /affiliat(?:ed|ion)/i.test(String(item))) : '') || 'Not available'}</strong></div>
        </div>
        <div className="detail-info-ribbon-item">
          <div className="detail-info-ribbon-icon"><CollegeIcon name="ti-shield" size={20} /></div>
          <div><small>Accreditation</small><strong>{c.accreditation?.[0] || 'Not available'}</strong></div>
        </div>
      </div>

      <DetailSectionNav />

      <div className="container college-detail-content">
        <Section title={`About ${c.name}`} id="about">
          <div className="about-overview-single">
            <p className="detail-about">{c.about || 'College overview is not currently available in the supplied database.'}</p>
          </div>
        </Section>

        {c.highlights?.length > 0 && <Section title="Highlights" id="highlights"><FeatureGrid items={c.highlights} iconResolver={highlightIcon} className="highlights-grid" /></Section>}


        <Section title="Courses & Programmes" id="departments" className="courses-reference-section"><CourseTable departments={c.departments} /></Section>

        <Section title="Admission Process" id="admission"><AdmissionSteps steps={c.admissionProcess} /></Section>

        <CollegeShineAd />

        {c.facilities?.length > 0 && <Section title="Facilities" id="facilities"><FeatureGrid items={c.facilities} iconResolver={facilityIcon} /></Section>}

        <Placement c={c} />
        {c.scholarships?.length > 0 && <Section title="Scholarships" id="scholarships"><div className="scholarship-panel"><BulletList items={c.scholarships} iconResolver={() => 'ti-medall'} /></div></Section>}

        {c.hostelFeatures?.length > 0 && <Section title="Hostel Facilities" id="hostel"><FeatureGrid items={c.hostelFeatures} iconResolver={hostelIcon} className="hostel-feature-grid" /></Section>}

        {c.events?.length > 0 && <Section title="Events" id="events"><div className="events-grid"><BulletList items={c.events} iconResolver={() => 'ti-calendar'} /></div></Section>}

        <CampusLife c={c} />


        <Section title="Location & Distance" id="location">
          <div className="distance-grid">
            {distance.airport && <Distance icon="ti-plane" label="Airport" value={distance.airport} />}
            {distance.railway && <Distance icon="ti-train" label="Railway Station" value={distance.railway} />}
            {distance.bustand && <Distance icon="ti-bus" label="Bus Stand" value={distance.bustand} />}
            {distance.metro && <Distance icon="ti-train" label="Metro" value={distance.metro} />}
            {distance.hospital && <Distance icon="ti-heart" label="Hospital" value={distance.hospital} />}
          </div>
          <div className="location-map-block">
            <div className="location-map-heading"><CollegeIcon name="ti-location" size={22} /><span>Google Map Location</span></div>
            <div className="map-embed-wrap">
              <iframe
                title={`${c.name} location map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery || c.address || `${c.name} ${c.district || ''} Tamil Nadu`)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="map-under-row">
              <span><CollegeIcon name="ti-location" size={18} />{c.address || c.location || 'Location is not currently available in the supplied database.'}</span>
              {c.mapLink && <a className="map-button" href={c.mapLink} target="_blank" rel="noopener noreferrer"><CollegeIcon name="ti-location" size={18} />Open in Google Maps</a>}
            </div>
          </div>
        </Section>

        <Section title="Contact Details" id="contact" className="contact-section">
          <div className="contact-grid">
            <div className="contact-card"><CollegeIcon name="ti-location" size={24} /><div><small>Address</small><span>{c.address || c.location || 'Address is not currently available in the supplied database.'}</span></div></div>
            {c.phone && <a className="contact-card" href={`tel:${String(c.phone).replace(/[^+\d]/g, '')}`}><CollegeIcon name="ti-phone" size={22} /><div><small>Phone</small><span>{c.phone}</span></div></a>}
            {c.email && <a className="contact-card" href={c.email.startsWith('mailto:') ? c.email : `mailto:${c.email}`}><CollegeIcon name="ti-mail" size={22} /><div><small>Email</small><span>{c.email.replace(/^mailto:/, '')}</span></div></a>}
            {c.website && <a className="contact-card" href={c.website} target="_blank" rel="noopener noreferrer"><CollegeIcon name="ti-globe" size={22} /><div><small>Website</small><span>{c.website.replace(/^https?:\/\//, '')}</span></div></a>}
          </div>
        </Section>

        {related.length > 0 && <RelatedCollegesCarousel items={related} />}
      </div>
    </div>
    <div className="detail-floating-actions" aria-label="College quick actions">
      <a className="detail-floating-whatsapp" href="https://wa.me/919865553629?text=Hi%20CollegeShine%2C%20I%20need%20admission%20information." target="_blank" rel="noopener noreferrer"><CollegeIcon name="ti-phone" size={21} /><span>WhatsApp</span></a>
      <button className="detail-floating-apply" type="button" onClick={() => setAdmissionModalOpen(true)}><CollegeIcon name="ti-clipboard" size={21} /><span>Apply Now</span><b>↗</b></button>
    </div>
    <AdmissionLeadModal college={c} open={admissionModalOpen} onClose={() => setAdmissionModalOpen(false)} />
  </>
}


function RelatedCollegesCarousel({ items }) {
  const trackRef = useRef(null)
  const move = direction => {
    const node = trackRef.current
    if (!node) return
    node.scrollBy({ left: direction * Math.max(300, node.clientWidth * 0.82), behavior: 'smooth' })
  }
  return <section className="related-detail related-carousel" aria-labelledby="related-colleges-title">
    <div className="related-carousel-head">
      <div className="detail-related-heading"><span>Explore Nearby</span><h2 id="related-colleges-title">Related Colleges</h2><p>More colleges from the same category or district.</p></div>
      <div className="related-carousel-controls">
        <button type="button" aria-label="Previous related colleges" onClick={() => move(-1)}>←</button>
        <button type="button" aria-label="Next related colleges" onClick={() => move(1)}>→</button>
      </div>
    </div>
    <div className="related-carousel-track" ref={trackRef} tabIndex="0" aria-label="Related colleges carousel">
      {items.slice(0, 8).map(x => <RelatedCollegeCard key={x.id} c={x} />)}
    </div>
    <div className="related-carousel-hint"><span>Swipe or scroll to explore</span><span>{Math.min(items.length, 8)} colleges</span></div>
  </section>
}


function DetailSectionNav() {
  const [activeId, setActiveId] = useState('about')
  const items = [
    ['About','about','ti-info'],
    ['Highlights','highlights','ti-star'],
    ['Courses','departments','ti-books'],
    ['Admission','admission','ti-clipboard'],
    ['Facilities','facilities','ti-home'],
    ['Placements','placements','ti-briefcase'],
    ['Scholarships','scholarships','ti-medall'],
    ['Hostel','hostel','ti-home'],
    ['Events','events','ti-calendar'],
    ['Campus Life','campus-life','ti-world'],
    ['Location','location','ti-location'],
    ['Contact','contact','ti-phone']
  ]
  useEffect(() => {
    const nodes = items.map(([, id]) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return undefined
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActiveId(visible[0].target.id)
    }, { rootMargin: '-150px 0px -55% 0px', threshold: [0, .2, .5, .8] })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <nav className="detail-section-nav" aria-label="College detail sections">
    <div className="detail-section-nav-inner">
      {items.map(([label, id, icon]) => <a key={id} className={activeId === id ? 'active' : ''} href={`#${id}`} onClick={() => setActiveId(id)}><CollegeIcon name={icon} size={17} /><span>{label}</span></a>)}
    </div>
  </nav>
}

function Distance({ icon, label, value }) {
  return <div className="distance-card"><CollegeIcon name={icon} size={25} /><span>{label}</span><strong>{value}</strong></div>
}

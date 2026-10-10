import React from "react"
import AdRail from "../../../components/Advertisement/AdRail"

const COURSES = [
  ["engineering", "Engineering Courses", ["B.E", "B.Tech", "M.E", "M.Tech", "Ph.D"], "/course/engineering/"],
  ["agriculture", "Agriculture Courses", ["B.Sc", "BE", "B.Tech", "M.Sc", "Ph.D"], "/course/agriculture/"],
  ["occupational", "Occupational Therapy Courses", ["BOT", "MOT", "Ph.D"], "/course/occupational-therapy/"],
  ["management", "Management & MBA Courses", ["BBA", "BBM", "MBA", "Ph.D"], "/course/management-mba/"],
  ["nursing", "Nursing Courses", ["ANM", "GNM", "B.Sc Nursing", "M.Sc Nursing"], "/course/nursing/"],
  ["alliedHealth", "Allied Health Science Courses", ["B.Sc AHS", "M.Sc AHS", "Diploma"], "/course/allied-health-science/"],
  ["pharmacy", "Pharmacy Courses", ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"], "/course/pharmacy/"],
  ["architecture", "Architecture & Design Courses", ["B.Arch", "M.Arch", "Ph.D"], "/course/architecture-design/"],
  ["bds", "BDS Courses", ["BDS", "MDS", "DDH", "DDM", "PhD"], "/course/bds/"],
  ["hotel", "Hotel Management Courses", ["BHM", "B.Sc", "MHM", "MBA"], "/course/hotel-management/"],
  ["teacher", "Teacher Education Course", ["B.Ed", "M.Ed", "B.P.Ed", "M.P.Ed", "PhD"], "/course/teacher-education/"],
  ["artsScience", "Arts & Science", ["BA", "B.Sc", "B.Com", "BBA", "MA", "M.Sc", "M.Com", "MBA", "PhD"], "/course/arts-science/"],
  ["marine", "Marine & Nautical Course", ["DNS", "B.Sc", "B.Tech", "GP Rating", "ETO", "MBA"], "/course/marine-nautical/"],
  ["diploma", "Diploma / Polytechnic Courses", ["Diploma"], "/course/diploma/", "(Engineering & Technical Courses)"],
  ["physio", "Physiotherapy Courses", ["BPT", "MPT"], "/course/physiotherapy/", "(Orthopaedics, Neurology, Sports, Pediatrics)", ["Ph.D"]]
]

const ICONS = {
  engineering: "https://collegeshine.com/wp-content/uploads/2026/03/icons8-engineering-50-1.png",
  agriculture: "https://collegeshine.com/wp-content/uploads/2026/03/agriculture-1.png",
  occupational: "https://collegeshine.com/wp-content/uploads/2026/03/Occupational-Therapy.png",
  management: "https://collegeshine.com/wp-content/uploads/2026/03/icons8-time-management-50.png",
  nursing: "https://collegeshine.com/wp-content/uploads/2026/03/Nursing-Course.png",
  alliedHealth: "https://collegeshine.com/wp-content/uploads/2026/03/icons8-pneumonia-50.png",
  pharmacy: "https://collegeshine.com/wp-content/uploads/2026/03/Pharmacy-Course.png",
  architecture: "https://collegeshine.com/wp-content/uploads/2026/03/architecture-design.png",
  bds: "https://collegeshine.com/wp-content/uploads/2026/03/icons8-dental-care-50-1.png",
  hotel: "https://collegeshine.com/wp-content/uploads/2026/03/Hotel-Management.png",
  teacher: "https://collegeshine.com/wp-content/uploads/2026/03/icons8-teacher-50.png",
  artsScience: "https://collegeshine.com/wp-content/uploads/2026/03/Arts-and-Science.png",
  marine: "https://collegeshine.com/wp-content/uploads/2026/03/marine-nautical.png",
  diploma: "https://collegeshine.com/wp-content/uploads/2026/03/diploma.png",
  physio: "https://collegeshine.com/wp-content/uploads/2026/03/Physiotherapy.png"
}

const HEADER_MARKUP = `
  <div class="cs-section-header">
    <div>
      <span class="cs-eyebrow">TOP CATEGORIES</span>
      <h2>Explore Courses by Category</h2>
    </div>
    <a class="cs-view-all" href="/course/">
      EXPLORE ALL CATEGORIES
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  </div>
`

export default function CourseCategoriesSection() {
  return (
    <section className="cs-page" aria-labelledby="course-categories-title">
      <div dangerouslySetInnerHTML={{ __html: HEADER_MARKUP.replace('<h2>', '<h2 id="course-categories-title">') }} />
      <div className="cs-layout">
        <div className="cs-cat-grid" id="csCourseGrid" aria-live="polite">
          {COURSES.map(([icon, title, tags, url, note, noteSuffix], i) => (
            <a className="cs-cat-card" style={{'--i': i}} href={url} key={url}>
              <div className="cs-cat-icon">
                <img src={ICONS[icon]} alt={title} loading={i < 6 ? "eager" : "lazy"} width="44" height="44" />
              </div>
              <div className="cs-cat-body">
                <h2 className="cs-cat-title">{title}</h2>
                <div className="cs-cat-tags">
                  {tags.map((tag, n) => <React.Fragment key={tag}><span>{tag}</span>{n < tags.length - 1 && <span className="sep">|</span>}</React.Fragment>)}
                  {note && <span className="note"> {note}</span>}
                  {noteSuffix && <><span className="sep">|</span>{noteSuffix.map(x => <span className="note" key={x}> {x}</span>)}</>}
                </div>
              </div>
              <span className="cs-cat-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
          ))}
        </div>
        <div className="cs-ad-rail" aria-label="Advertisements">
          <AdRail />
        </div>
      </div>
    </section>
  )
}

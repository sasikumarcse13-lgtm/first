import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeAerospaceTechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeAerospaceTechnology(){
return <><SEO
  title="M.E. Aerospace Technology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Aerospace Technology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-aerospace-technology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Aerospace Technology', 'M.E. Aerospace Technology course', 'M.E. Aerospace Technology eligibility', 'M.E. Aerospace Technology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Aerospace Technology", "url": "/course/engineering/me-aerospace-technology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

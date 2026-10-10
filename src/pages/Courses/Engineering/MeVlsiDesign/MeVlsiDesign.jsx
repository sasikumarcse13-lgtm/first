import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeVlsiDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeVlsiDesign(){
return <><SEO
  title="M.E. VLSI Design | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. VLSI Design course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-vlsi-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. VLSI Design', 'M.E. VLSI Design course', 'M.E. VLSI Design eligibility', 'M.E. VLSI Design colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. VLSI Design", "url": "/course/engineering/me-vlsi-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

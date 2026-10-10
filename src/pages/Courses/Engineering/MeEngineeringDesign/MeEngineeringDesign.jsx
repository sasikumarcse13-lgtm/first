import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeEngineeringDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeEngineeringDesign(){
return <><SEO
  title="M.E. Engineering Design | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Engineering Design course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-engineering-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Engineering Design', 'M.E. Engineering Design course', 'M.E. Engineering Design eligibility', 'M.E. Engineering Design colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Engineering Design", "url": "/course/engineering/me-engineering-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

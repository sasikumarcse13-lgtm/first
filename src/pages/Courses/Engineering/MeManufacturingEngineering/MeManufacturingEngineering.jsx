import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeManufacturingEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeManufacturingEngineering(){
return <><SEO
  title="M.E. Manufacturing Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Manufacturing Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-manufacturing-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Manufacturing Engineering', 'M.E. Manufacturing Engineering course', 'M.E. Manufacturing Engineering eligibility', 'M.E. Manufacturing Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Manufacturing Engineering", "url": "/course/engineering/me-manufacturing-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

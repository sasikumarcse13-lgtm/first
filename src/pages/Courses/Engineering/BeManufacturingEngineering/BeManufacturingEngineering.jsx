import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeManufacturingEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeManufacturingEngineering(){
return <><SEO
  title="B.E. Manufacturing Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Manufacturing Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-manufacturing-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Manufacturing Engineering', 'B.E. Manufacturing Engineering course', 'B.E. Manufacturing Engineering eligibility', 'B.E. Manufacturing Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Manufacturing Engineering", "url": "/course/engineering/be-manufacturing-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

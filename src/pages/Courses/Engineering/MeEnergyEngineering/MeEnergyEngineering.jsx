import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeEnergyEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeEnergyEngineering(){
return <><SEO
  title="M.E. Energy Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Energy Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-energy-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Energy Engineering', 'M.E. Energy Engineering course', 'M.E. Energy Engineering eligibility', 'M.E. Energy Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Energy Engineering", "url": "/course/engineering/me-energy-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

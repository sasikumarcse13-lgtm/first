import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeAutomobileEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeAutomobileEngineering(){
return <><SEO
  title="M.E. Automobile Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Automobile Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-automobile-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Automobile Engineering', 'M.E. Automobile Engineering course', 'M.E. Automobile Engineering eligibility', 'M.E. Automobile Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Automobile Engineering", "url": "/course/engineering/me-automobile-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

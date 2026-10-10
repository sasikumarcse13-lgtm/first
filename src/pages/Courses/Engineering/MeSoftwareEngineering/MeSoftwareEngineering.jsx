import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeSoftwareEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeSoftwareEngineering(){
return <><SEO
  title="M.E. Software Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Software Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-software-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Software Engineering', 'M.E. Software Engineering course', 'M.E. Software Engineering eligibility', 'M.E. Software Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Software Engineering", "url": "/course/engineering/me-software-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

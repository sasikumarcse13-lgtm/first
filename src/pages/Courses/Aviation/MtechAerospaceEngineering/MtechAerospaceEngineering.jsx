import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechAerospaceEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechAerospaceEngineering(){
return <><SEO
  title="M.Tech Aerospace Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Aerospace Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/mtech-aerospace-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Aerospace Engineering', 'M.Tech Aerospace Engineering course', 'M.Tech Aerospace Engineering eligibility', 'M.Tech Aerospace Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "M.Tech Aerospace Engineering", "url": "/course/aviation/mtech-aerospace-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

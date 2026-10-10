import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechAeronauticalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechAeronauticalEngineering(){
return <><SEO
  title="M.Tech Aeronautical Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Aeronautical Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/mtech-aeronautical-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Aeronautical Engineering', 'M.Tech Aeronautical Engineering course', 'M.Tech Aeronautical Engineering eligibility', 'M.Tech Aeronautical Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "M.Tech Aeronautical Engineering", "url": "/course/aviation/mtech-aeronautical-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

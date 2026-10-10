import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechAerospaceEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechAerospaceEngineering(){
return <><SEO
  title="B.Tech Aerospace Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Aerospace Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-aerospace-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Aerospace Engineering', 'B.Tech Aerospace Engineering course', 'B.Tech Aerospace Engineering eligibility', 'B.Tech Aerospace Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Aerospace Engineering", "url": "/course/engineering/btech-aerospace-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

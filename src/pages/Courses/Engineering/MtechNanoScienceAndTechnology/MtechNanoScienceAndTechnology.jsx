import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechNanoScienceAndTechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechNanoScienceAndTechnology(){
return <><SEO
  title="M.Tech Nano Science &amp; Technology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Nano Science &amp; Technology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-nano-science-and-technology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Nano Science & Technology', 'M.Tech Nano Science & Technology course', 'M.Tech Nano Science & Technology eligibility', 'M.Tech Nano Science & Technology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Nano Science & Technology", "url": "/course/engineering/mtech-nano-science-and-technology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

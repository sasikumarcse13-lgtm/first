import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechNanotechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechNanotechnology(){
return <><SEO
  title="B.Tech Nanotechnology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Nanotechnology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-nanotechnology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Nanotechnology', 'B.Tech Nanotechnology course', 'B.Tech Nanotechnology eligibility', 'B.Tech Nanotechnology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Nanotechnology", "url": "/course/engineering/btech-nanotechnology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

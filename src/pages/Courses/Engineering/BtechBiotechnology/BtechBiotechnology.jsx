import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechBiotechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechBiotechnology(){
return <><SEO
  title="B.Tech Biotechnology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Biotechnology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-biotechnology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Biotechnology', 'B.Tech Biotechnology course', 'B.Tech Biotechnology eligibility', 'B.Tech Biotechnology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Biotechnology", "url": "/course/engineering/btech-biotechnology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

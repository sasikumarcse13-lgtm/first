import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechBiotechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechBiotechnology(){
return <><SEO
  title="M.Tech Biotechnology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Biotechnology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-biotechnology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Biotechnology', 'M.Tech Biotechnology course', 'M.Tech Biotechnology eligibility', 'M.Tech Biotechnology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Biotechnology", "url": "/course/engineering/mtech-biotechnology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

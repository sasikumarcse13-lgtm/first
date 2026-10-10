import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaHistory.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaHistory(){
return <><SEO
  title="B.A. History | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. History course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-history/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. History', 'B.A. History course', 'B.A. History eligibility', 'B.A. History colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. History", "url": "/course/arts-science/ba-history/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

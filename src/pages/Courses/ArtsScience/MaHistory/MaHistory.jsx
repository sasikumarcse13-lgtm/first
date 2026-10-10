import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaHistory.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaHistory(){
return <><SEO
  title="M.A. History | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. History course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-history/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. History', 'M.A. History course', 'M.A. History eligibility', 'M.A. History colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. History", "url": "/course/arts-science/ma-history/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

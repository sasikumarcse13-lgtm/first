import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaTamil.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaTamil(){
return <><SEO
  title="M.A. Tamil | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Tamil course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-tamil/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Tamil', 'M.A. Tamil course', 'M.A. Tamil eligibility', 'M.A. Tamil colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Tamil", "url": "/course/arts-science/ma-tamil/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaSociology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaSociology(){
return <><SEO
  title="M.A. Sociology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Sociology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-sociology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Sociology', 'M.A. Sociology course', 'M.A. Sociology eligibility', 'M.A. Sociology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Sociology", "url": "/course/arts-science/ma-sociology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

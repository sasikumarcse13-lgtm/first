import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaRchGeneral.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaRchGeneral(){
return <><SEO
  title="M.Arch. (General) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Arch. (General) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/ma-rch-general/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Arch. (General)', 'M.Arch. (General) course', 'M.Arch. (General) eligibility', 'M.Arch. (General) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Arch. (General)", "url": "/course/architecture-design/ma-rch-general/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

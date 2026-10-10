import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaRchDigitalArchitecture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaRchDigitalArchitecture(){
return <><SEO
  title="M.Arch. (Digital Architecture) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Arch. (Digital Architecture) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/ma-rch-digital-architecture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Arch. (Digital Architecture)', 'M.Arch. (Digital Architecture) course', 'M.Arch. (Digital Architecture) eligibility', 'M.Arch. (Digital Architecture) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Arch. (Digital Architecture)", "url": "/course/architecture-design/ma-rch-digital-architecture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

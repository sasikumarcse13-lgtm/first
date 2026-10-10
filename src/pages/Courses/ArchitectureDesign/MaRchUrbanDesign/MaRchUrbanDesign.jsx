import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaRchUrbanDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaRchUrbanDesign(){
return <><SEO
  title="M.Arch. (Urban Design) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Arch. (Urban Design) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/ma-rch-urban-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Arch. (Urban Design)', 'M.Arch. (Urban Design) course', 'M.Arch. (Urban Design) eligibility', 'M.Arch. (Urban Design) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Arch. (Urban Design)", "url": "/course/architecture-design/ma-rch-urban-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

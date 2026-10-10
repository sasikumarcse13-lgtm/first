import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaRchInteriorDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaRchInteriorDesign(){
return <><SEO
  title="M.Arch. (Interior Design) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Arch. (Interior Design) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/ma-rch-interior-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Arch. (Interior Design)', 'M.Arch. (Interior Design) course', 'M.Arch. (Interior Design) eligibility', 'M.Arch. (Interior Design) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Arch. (Interior Design)", "url": "/course/architecture-design/ma-rch-interior-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

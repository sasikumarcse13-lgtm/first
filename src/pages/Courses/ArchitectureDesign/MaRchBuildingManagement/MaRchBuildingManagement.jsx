import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaRchBuildingManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaRchBuildingManagement(){
return <><SEO
  title="M.Arch. (Building Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Arch. (Building Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/ma-rch-building-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Arch. (Building Management)', 'M.Arch. (Building Management) course', 'M.Arch. (Building Management) eligibility', 'M.Arch. (Building Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Arch. (Building Management)", "url": "/course/architecture-design/ma-rch-building-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

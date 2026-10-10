import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MplanMasterOfPlanning.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MplanMasterOfPlanning(){
return <><SEO
  title="M.Plan. — Master of Planning | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Plan. — Master of Planning course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/mplan-master-of-planning/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Plan. — Master of Planning', 'M.Plan. — Master of Planning course', 'M.Plan. — Master of Planning eligibility', 'M.Plan. — Master of Planning colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Plan. — Master of Planning", "url": "/course/architecture-design/mplan-master-of-planning/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

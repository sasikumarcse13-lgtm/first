import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MdEsMasterOfDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MdEsMasterOfDesign(){
return <><SEO
  title="M.Des. — Master of Design | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Des. — Master of Design course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/md-es-master-of-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Des. — Master of Design', 'M.Des. — Master of Design course', 'M.Des. — Master of Design eligibility', 'M.Des. — Master of Design colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "M.Des. — Master of Design", "url": "/course/architecture-design/md-es-master-of-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

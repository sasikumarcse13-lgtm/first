import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeDSpecialEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeDSpecialEducation(){
return <><SEO
  title="M.Ed. Special Education | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Ed. Special Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/me-d-special-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Ed. Special Education', 'M.Ed. Special Education course', 'M.Ed. Special Education eligibility', 'M.Ed. Special Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "M.Ed. Special Education", "url": "/course/teacher-education/me-d-special-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

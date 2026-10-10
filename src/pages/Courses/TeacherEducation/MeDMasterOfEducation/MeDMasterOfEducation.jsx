import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeDMasterOfEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeDMasterOfEducation(){
return <><SEO
  title="M.Ed. – Master of Education | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Ed. – Master of Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/me-d-master-of-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Ed. – Master of Education', 'M.Ed. – Master of Education course', 'M.Ed. – Master of Education eligibility', 'M.Ed. – Master of Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "M.Ed. – Master of Education", "url": "/course/teacher-education/me-d-master-of-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

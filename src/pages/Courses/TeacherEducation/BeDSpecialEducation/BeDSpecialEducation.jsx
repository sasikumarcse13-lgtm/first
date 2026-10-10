import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeDSpecialEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeDSpecialEducation(){
return <><SEO
  title="B.Ed Special Education | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Ed Special Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/be-d-special-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Ed Special Education', 'B.Ed Special Education course', 'B.Ed Special Education eligibility', 'B.Ed Special Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "B.Ed Special Education", "url": "/course/teacher-education/be-d-special-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

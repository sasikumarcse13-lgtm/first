import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeDBachelorOfEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeDBachelorOfEducation(){
return <><SEO
  title="B.Ed – Bachelor of Education | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Ed – Bachelor of Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/be-d-bachelor-of-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Ed – Bachelor of Education', 'B.Ed – Bachelor of Education course', 'B.Ed – Bachelor of Education eligibility', 'B.Ed – Bachelor of Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "B.Ed – Bachelor of Education", "url": "/course/teacher-education/be-d-bachelor-of-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './TeacherEducation.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function TeacherEducation(){
return <><SEO
  title="Teacher Education Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Teacher Education courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/teacher-education/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Teacher Education courses', 'Teacher Education courses in India', 'Teacher Education course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

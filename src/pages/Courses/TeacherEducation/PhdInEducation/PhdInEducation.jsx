import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInEducation(){
return <><SEO
  title="Ph.D. in Education | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. in Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/phd-in-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. in Education', 'Ph.D. in Education course', 'Ph.D. in Education eligibility', 'Ph.D. in Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "Ph.D. in Education", "url": "/course/teacher-education/phd-in-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

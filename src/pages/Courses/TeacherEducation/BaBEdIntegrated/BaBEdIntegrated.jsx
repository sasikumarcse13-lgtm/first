import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaBEdIntegrated.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaBEdIntegrated(){
return <><SEO
  title="B.A B.Ed (Integrated) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A B.Ed (Integrated) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/teacher-education/ba-b-ed-integrated/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A B.Ed (Integrated)', 'B.A B.Ed (Integrated) course', 'B.A B.Ed (Integrated) eligibility', 'B.A B.Ed (Integrated) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Teacher Education Courses", "url": "/course/teacher-education/"}, {"name": "B.A B.Ed (Integrated)", "url": "/course/teacher-education/ba-b-ed-integrated/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

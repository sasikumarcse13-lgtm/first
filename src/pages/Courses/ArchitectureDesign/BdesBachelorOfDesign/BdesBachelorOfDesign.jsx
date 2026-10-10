import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BdesBachelorOfDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BdesBachelorOfDesign(){
return <><SEO
  title="B.Des. — Bachelor of Design | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Des. — Bachelor of Design course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/bdes-bachelor-of-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Des. — Bachelor of Design', 'B.Des. — Bachelor of Design course', 'B.Des. — Bachelor of Design eligibility', 'B.Des. — Bachelor of Design colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "B.Des. — Bachelor of Design", "url": "/course/architecture-design/bdes-bachelor-of-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

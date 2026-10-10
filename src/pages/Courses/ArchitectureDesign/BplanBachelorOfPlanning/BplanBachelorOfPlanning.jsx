import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BplanBachelorOfPlanning.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BplanBachelorOfPlanning(){
return <><SEO
  title="B.Plan. — Bachelor of Planning | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Plan. — Bachelor of Planning course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/bplan-bachelor-of-planning/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Plan. — Bachelor of Planning', 'B.Plan. — Bachelor of Planning course', 'B.Plan. — Bachelor of Planning eligibility', 'B.Plan. — Bachelor of Planning colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "B.Plan. — Bachelor of Planning", "url": "/course/architecture-design/bplan-bachelor-of-planning/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

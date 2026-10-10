import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeMechanicalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeMechanicalEngineering(){
return <><SEO
  title="B.E. Mechanical Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Mechanical Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-mechanical-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Mechanical Engineering', 'B.E. Mechanical Engineering course', 'B.E. Mechanical Engineering eligibility', 'B.E. Mechanical Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Mechanical Engineering", "url": "/course/engineering/be-mechanical-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeEnvironmentalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeEnvironmentalEngineering(){
return <><SEO
  title="B.E. Environmental Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Environmental Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-environmental-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Environmental Engineering', 'B.E. Environmental Engineering course', 'B.E. Environmental Engineering eligibility', 'B.E. Environmental Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Environmental Engineering", "url": "/course/engineering/be-environmental-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

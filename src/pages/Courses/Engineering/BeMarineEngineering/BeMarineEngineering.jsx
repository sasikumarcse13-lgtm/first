import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeMarineEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeMarineEngineering(){
return <><SEO
  title="B.E. Marine Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Marine Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-marine-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Marine Engineering', 'B.E. Marine Engineering course', 'B.E. Marine Engineering eligibility', 'B.E. Marine Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Marine Engineering", "url": "/course/engineering/be-marine-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

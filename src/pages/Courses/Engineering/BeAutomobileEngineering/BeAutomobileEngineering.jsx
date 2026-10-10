import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeAutomobileEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeAutomobileEngineering(){
return <><SEO
  title="B.E. Automobile Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Automobile Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-automobile-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Automobile Engineering', 'B.E. Automobile Engineering course', 'B.E. Automobile Engineering eligibility', 'B.E. Automobile Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Automobile Engineering", "url": "/course/engineering/be-automobile-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

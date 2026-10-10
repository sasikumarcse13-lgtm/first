import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeCivilEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeCivilEngineering(){
return <><SEO
  title="B.E. Civil Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Civil Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-civil-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Civil Engineering', 'B.E. Civil Engineering course', 'B.E. Civil Engineering eligibility', 'B.E. Civil Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Civil Engineering", "url": "/course/engineering/be-civil-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

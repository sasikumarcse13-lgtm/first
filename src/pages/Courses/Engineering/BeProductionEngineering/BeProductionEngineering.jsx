import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeProductionEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeProductionEngineering(){
return <><SEO
  title="B.E. Production Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Production Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-production-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Production Engineering', 'B.E. Production Engineering course', 'B.E. Production Engineering eligibility', 'B.E. Production Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Production Engineering", "url": "/course/engineering/be-production-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

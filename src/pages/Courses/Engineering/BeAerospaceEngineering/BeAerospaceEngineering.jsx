import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeAerospaceEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeAerospaceEngineering(){
return <><SEO
  title="B.E. Aerospace Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Aerospace Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-aerospace-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Aerospace Engineering', 'B.E. Aerospace Engineering course', 'B.E. Aerospace Engineering eligibility', 'B.E. Aerospace Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Aerospace Engineering", "url": "/course/engineering/be-aerospace-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeAeronauticalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeAeronauticalEngineering(){
return <><SEO
  title="B.E. Aeronautical Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Aeronautical Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-aeronautical-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Aeronautical Engineering', 'B.E. Aeronautical Engineering course', 'B.E. Aeronautical Engineering eligibility', 'B.E. Aeronautical Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Aeronautical Engineering", "url": "/course/engineering/be-aeronautical-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

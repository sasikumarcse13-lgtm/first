import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeAgriculturalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeAgriculturalEngineering(){
return <><SEO
  title="B.E. Agricultural Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Agricultural Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-agricultural-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Agricultural Engineering', 'B.E. Agricultural Engineering course', 'B.E. Agricultural Engineering eligibility', 'B.E. Agricultural Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Agricultural Engineering", "url": "/course/engineering/be-agricultural-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

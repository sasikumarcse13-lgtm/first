import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeAgriculturalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeAgriculturalEngineering(){
return <><SEO
  title="M.E. Agricultural Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Agricultural Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-agricultural-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Agricultural Engineering', 'M.E. Agricultural Engineering course', 'M.E. Agricultural Engineering eligibility', 'M.E. Agricultural Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Agricultural Engineering", "url": "/course/engineering/me-agricultural-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

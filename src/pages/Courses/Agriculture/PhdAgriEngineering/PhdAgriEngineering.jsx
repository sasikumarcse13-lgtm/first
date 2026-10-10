import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdAgriEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdAgriEngineering(){
return <><SEO
  title="Ph.D. Agri-Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Agri-Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/phd-agri-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Agri-Engineering', 'Ph.D. Agri-Engineering course', 'Ph.D. Agri-Engineering eligibility', 'Ph.D. Agri-Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "Ph.D. Agri-Engineering", "url": "/course/agriculture/phd-agri-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

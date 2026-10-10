import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomGeneral.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomGeneral(){
return <><SEO
  title="M.Com (General) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com (General) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/mcom-general/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com (General)', 'M.Com (General) course', 'M.Com (General) eligibility', 'M.Com (General) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Com (General)", "url": "/course/arts-science/mcom-general/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

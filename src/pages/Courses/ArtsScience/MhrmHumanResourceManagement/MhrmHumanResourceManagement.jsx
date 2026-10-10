import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MhrmHumanResourceManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MhrmHumanResourceManagement(){
return <><SEO
  title="MHRM (Human Resource Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore MHRM (Human Resource Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/mhrm-human-resource-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MHRM (Human Resource Management)', 'MHRM (Human Resource Management) course', 'MHRM (Human Resource Management) eligibility', 'MHRM (Human Resource Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "MHRM (Human Resource Management)", "url": "/course/arts-science/mhrm-human-resource-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

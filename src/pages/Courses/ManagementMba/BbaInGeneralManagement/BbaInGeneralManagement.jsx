import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaInGeneralManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaInGeneralManagement(){
return <><SEO
  title="BBA in General Management | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA in General Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/bba-in-general-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA in General Management', 'BBA in General Management course', 'BBA in General Management eligibility', 'BBA in General Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "BBA in General Management", "url": "/course/management-mba/bba-in-general-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

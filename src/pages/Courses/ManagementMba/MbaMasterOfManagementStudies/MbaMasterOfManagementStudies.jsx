import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaMasterOfManagementStudies.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaMasterOfManagementStudies(){
return <><SEO
  title="MBA Master of Management Studies | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Master of Management Studies course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-master-of-management-studies/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Master of Management Studies', 'MBA Master of Management Studies course', 'MBA Master of Management Studies eligibility', 'MBA Master of Management Studies colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Master of Management Studies", "url": "/course/management-mba/mba-master-of-management-studies/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

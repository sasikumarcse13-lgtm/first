import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaEventManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaEventManagement(){
return <><SEO
  title="MBA Event Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Event Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-event-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Event Management', 'MBA Event Management course', 'MBA Event Management eligibility', 'MBA Event Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Event Management", "url": "/course/management-mba/mba-event-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaSportsManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaSportsManagement(){
return <><SEO
  title="MBA Sports Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Sports Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-sports-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Sports Management', 'MBA Sports Management course', 'MBA Sports Management eligibility', 'MBA Sports Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Sports Management", "url": "/course/management-mba/mba-sports-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaSportsManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaSportsManagement(){
return <><SEO
  title="MBA Sports Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Sports Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/mba-sports-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Sports Management', 'MBA Sports Management course', 'MBA Sports Management eligibility', 'MBA Sports Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "MBA Sports Management", "url": "/course/sports-physical-education/mba-sports-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

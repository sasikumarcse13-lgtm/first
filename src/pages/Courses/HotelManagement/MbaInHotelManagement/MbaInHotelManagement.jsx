import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaInHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaInHotelManagement(){
return <><SEO
  title="MBA in Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA in Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/mba-in-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA in Hotel Management', 'MBA in Hotel Management course', 'MBA in Hotel Management eligibility', 'MBA in Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "MBA in Hotel Management", "url": "/course/hotel-management/mba-in-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

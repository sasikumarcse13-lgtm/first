import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaHotelManagement(){
return <><SEO
  title="BBA Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/bba-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA Hotel Management', 'BBA Hotel Management course', 'BBA Hotel Management eligibility', 'BBA Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "BBA Hotel Management", "url": "/course/hotel-management/bba-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaTourismAndHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaTourismAndHotelManagement(){
return <><SEO
  title="BBA Tourism &amp; Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA Tourism &amp; Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/bba-tourism-and-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA Tourism & Hotel Management', 'BBA Tourism & Hotel Management course', 'BBA Tourism & Hotel Management eligibility', 'BBA Tourism & Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "BBA Tourism & Hotel Management", "url": "/course/hotel-management/bba-tourism-and-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

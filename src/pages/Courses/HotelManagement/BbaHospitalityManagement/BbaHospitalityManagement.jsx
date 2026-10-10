import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaHospitalityManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaHospitalityManagement(){
return <><SEO
  title="BBA Hospitality Management | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA Hospitality Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/bba-hospitality-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA Hospitality Management', 'BBA Hospitality Management course', 'BBA Hospitality Management eligibility', 'BBA Hospitality Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "BBA Hospitality Management", "url": "/course/hotel-management/bba-hospitality-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

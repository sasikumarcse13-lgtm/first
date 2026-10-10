import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaInHospitalityManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaInHospitalityManagement(){
return <><SEO
  title="MBA in Hospitality Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA in Hospitality Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/mba-in-hospitality-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA in Hospitality Management', 'MBA in Hospitality Management course', 'MBA in Hospitality Management eligibility', 'MBA in Hospitality Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "MBA in Hospitality Management", "url": "/course/hotel-management/mba-in-hospitality-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

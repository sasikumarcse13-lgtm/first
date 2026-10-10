import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DiplomaInHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DiplomaInHotelManagement(){
return <><SEO
  title="Diploma in Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore Diploma in Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/diploma-in-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diploma in Hotel Management', 'Diploma in Hotel Management course', 'Diploma in Hotel Management eligibility', 'Diploma in Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "Diploma in Hotel Management", "url": "/course/hotel-management/diploma-in-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

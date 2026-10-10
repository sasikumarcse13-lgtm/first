import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscHotelManagement(){
return <><SEO
  title="B.Sc Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/bsc-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc Hotel Management', 'B.Sc Hotel Management course', 'B.Sc Hotel Management eligibility', 'B.Sc Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "B.Sc Hotel Management", "url": "/course/hotel-management/bsc-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

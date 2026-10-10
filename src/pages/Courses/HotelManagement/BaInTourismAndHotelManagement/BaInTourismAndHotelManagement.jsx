import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaInTourismAndHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaInTourismAndHotelManagement(){
return <><SEO
  title="B.A in Tourism &amp; Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A in Tourism &amp; Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/ba-in-tourism-and-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A in Tourism & Hotel Management', 'B.A in Tourism & Hotel Management course', 'B.A in Tourism & Hotel Management eligibility', 'B.A in Tourism & Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "B.A in Tourism & Hotel Management", "url": "/course/hotel-management/ba-in-tourism-and-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

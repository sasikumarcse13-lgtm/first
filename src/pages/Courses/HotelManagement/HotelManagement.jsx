import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './HotelManagement.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function HotelManagement(){
return <><SEO
  title="Hotel Management Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Hotel Management courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/hotel-management/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Hotel Management courses', 'Hotel Management courses in India', 'Hotel Management course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

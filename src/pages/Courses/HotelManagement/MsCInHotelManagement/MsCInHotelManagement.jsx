import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCInHotelManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCInHotelManagement(){
return <><SEO
  title="M.Sc. in Hotel Management | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. in Hotel Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/hotel-management/ms-c-in-hotel-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. in Hotel Management', 'M.Sc. in Hotel Management course', 'M.Sc. in Hotel Management eligibility', 'M.Sc. in Hotel Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Hotel Management Courses", "url": "/course/hotel-management/"}, {"name": "M.Sc. in Hotel Management", "url": "/course/hotel-management/ms-c-in-hotel-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

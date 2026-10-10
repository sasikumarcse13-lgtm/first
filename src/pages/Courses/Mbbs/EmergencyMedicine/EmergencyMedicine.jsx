import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './EmergencyMedicine.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function EmergencyMedicine(){
return <><SEO
  title="Emergency Medicine | Course Details, Eligibility &amp; Colleges"
  description="Explore Emergency Medicine course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/emergency-medicine/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Emergency Medicine', 'Emergency Medicine course', 'Emergency Medicine eligibility', 'Emergency Medicine colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Emergency Medicine", "url": "/course/mbbs/emergency-medicine/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

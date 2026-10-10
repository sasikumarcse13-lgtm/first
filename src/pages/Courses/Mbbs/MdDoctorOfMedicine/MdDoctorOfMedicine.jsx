import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MdDoctorOfMedicine.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MdDoctorOfMedicine(){
return <><SEO
  title="MD – Doctor of Medicine | Course Details, Eligibility &amp; Colleges"
  description="Explore MD – Doctor of Medicine course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/md-doctor-of-medicine/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MD – Doctor of Medicine', 'MD – Doctor of Medicine course', 'MD – Doctor of Medicine eligibility', 'MD – Doctor of Medicine colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "MD – Doctor of Medicine", "url": "/course/mbbs/md-doctor-of-medicine/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

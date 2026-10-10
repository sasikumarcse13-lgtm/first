import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Pediatrics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Pediatrics(){
return <><SEO
  title="Pediatrics | Course Details, Eligibility &amp; Colleges"
  description="Explore Pediatrics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/pediatrics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Pediatrics', 'Pediatrics course', 'Pediatrics eligibility', 'Pediatrics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Pediatrics", "url": "/course/mbbs/pediatrics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

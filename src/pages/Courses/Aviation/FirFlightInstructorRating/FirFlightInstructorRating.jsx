import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './FirFlightInstructorRating.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function FirFlightInstructorRating(){
return <><SEO
  title="FIR – Flight Instructor Rating | Course Details, Eligibility &amp; Colleges"
  description="Explore FIR – Flight Instructor Rating course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/fir-flight-instructor-rating/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['FIR – Flight Instructor Rating', 'FIR – Flight Instructor Rating course', 'FIR – Flight Instructor Rating eligibility', 'FIR – Flight Instructor Rating colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "FIR – Flight Instructor Rating", "url": "/course/aviation/fir-flight-instructor-rating/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

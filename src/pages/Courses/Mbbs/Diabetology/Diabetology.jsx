import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Diabetology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Diabetology(){
return <><SEO
  title="Diabetology | Course Details, Eligibility &amp; Colleges"
  description="Explore Diabetology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/diabetology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diabetology', 'Diabetology course', 'Diabetology eligibility', 'Diabetology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Diabetology", "url": "/course/mbbs/diabetology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

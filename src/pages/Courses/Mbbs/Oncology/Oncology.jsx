import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Oncology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Oncology(){
return <><SEO
  title="Oncology | Course Details, Eligibility &amp; Colleges"
  description="Explore Oncology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/oncology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Oncology', 'Oncology course', 'Oncology eligibility', 'Oncology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Oncology", "url": "/course/mbbs/oncology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

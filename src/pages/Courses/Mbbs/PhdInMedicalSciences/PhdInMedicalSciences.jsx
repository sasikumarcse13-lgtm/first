import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInMedicalSciences.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInMedicalSciences(){
return <><SEO
  title="Ph.D in Medical Sciences | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Medical Sciences course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/phd-in-medical-sciences/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Medical Sciences', 'Ph.D in Medical Sciences course', 'Ph.D in Medical Sciences eligibility', 'Ph.D in Medical Sciences colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Ph.D in Medical Sciences", "url": "/course/mbbs/phd-in-medical-sciences/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

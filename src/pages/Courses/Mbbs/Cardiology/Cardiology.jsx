import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Cardiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Cardiology(){
return <><SEO
  title="Cardiology | Course Details, Eligibility &amp; Colleges"
  description="Explore Cardiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/cardiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Cardiology', 'Cardiology course', 'Cardiology eligibility', 'Cardiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Cardiology", "url": "/course/mbbs/cardiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

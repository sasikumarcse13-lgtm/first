import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Neurology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Neurology(){
return <><SEO
  title="Neurology | Course Details, Eligibility &amp; Colleges"
  description="Explore Neurology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/neurology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Neurology', 'Neurology course', 'Neurology eligibility', 'Neurology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "Neurology", "url": "/course/mbbs/neurology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

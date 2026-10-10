import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaInAviation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaInAviation(){
return <><SEO
  title="BBA in Aviation | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA in Aviation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/bba-in-aviation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA in Aviation', 'BBA in Aviation course', 'BBA in Aviation eligibility', 'BBA in Aviation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "BBA in Aviation", "url": "/course/aviation/bba-in-aviation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

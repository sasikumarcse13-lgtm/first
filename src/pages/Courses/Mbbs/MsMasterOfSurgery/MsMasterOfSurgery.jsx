import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsMasterOfSurgery.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsMasterOfSurgery(){
return <><SEO
  title="MS – Master of Surgery | Course Details, Eligibility &amp; Colleges"
  description="Explore MS – Master of Surgery course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/ms-master-of-surgery/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MS – Master of Surgery', 'MS – Master of Surgery course', 'MS – Master of Surgery eligibility', 'MS – Master of Surgery colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "MS – Master of Surgery", "url": "/course/mbbs/ms-master-of-surgery/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

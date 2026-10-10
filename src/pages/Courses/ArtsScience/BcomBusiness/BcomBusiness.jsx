import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomBusiness.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomBusiness(){
return <><SEO
  title="B.Com / Business | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com / Business course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bcom-business/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com / Business', 'B.Com / Business course', 'B.Com / Business eligibility', 'B.Com / Business colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Com / Business", "url": "/course/arts-science/bcom-business/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaInternationalBusiness.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaInternationalBusiness(){
return <><SEO
  title="MBA International Business | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA International Business course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-international-business/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA International Business', 'MBA International Business course', 'MBA International Business eligibility', 'MBA International Business colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA International Business", "url": "/course/management-mba/mba-international-business/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

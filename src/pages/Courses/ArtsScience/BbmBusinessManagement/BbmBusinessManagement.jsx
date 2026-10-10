import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbmBusinessManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbmBusinessManagement(){
return <><SEO
  title="BBM (Business Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore BBM (Business Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bbm-business-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBM (Business Management)', 'BBM (Business Management) course', 'BBM (Business Management) eligibility', 'BBM (Business Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "BBM (Business Management)", "url": "/course/arts-science/bbm-business-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

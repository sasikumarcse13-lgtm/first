import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaInBusinessAnalytics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaInBusinessAnalytics(){
return <><SEO
  title="BBA in Business Analytics | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA in Business Analytics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/bba-in-business-analytics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA in Business Analytics', 'BBA in Business Analytics course', 'BBA in Business Analytics eligibility', 'BBA in Business Analytics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "BBA in Business Analytics", "url": "/course/management-mba/bba-in-business-analytics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaBusinessAnalytics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaBusinessAnalytics(){
return <><SEO
  title="MBA Business Analytics | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Business Analytics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-business-analytics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Business Analytics', 'MBA Business Analytics course', 'MBA Business Analytics eligibility', 'MBA Business Analytics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Business Analytics", "url": "/course/management-mba/mba-business-analytics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

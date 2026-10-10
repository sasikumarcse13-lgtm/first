import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaMarketing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaMarketing(){
return <><SEO
  title="BBA Marketing | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA Marketing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/bba-marketing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA Marketing', 'BBA Marketing course', 'BBA Marketing eligibility', 'BBA Marketing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "BBA Marketing", "url": "/course/management-mba/bba-marketing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

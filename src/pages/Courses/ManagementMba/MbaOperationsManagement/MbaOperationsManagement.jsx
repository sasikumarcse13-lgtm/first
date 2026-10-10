import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaOperationsManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaOperationsManagement(){
return <><SEO
  title="MBA Operations Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Operations Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-operations-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Operations Management', 'MBA Operations Management course', 'MBA Operations Management eligibility', 'MBA Operations Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Operations Management", "url": "/course/management-mba/mba-operations-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

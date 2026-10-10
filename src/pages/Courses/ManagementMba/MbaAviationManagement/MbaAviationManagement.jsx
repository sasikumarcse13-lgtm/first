import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaAviationManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaAviationManagement(){
return <><SEO
  title="MBA Aviation Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Aviation Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-aviation-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Aviation Management', 'MBA Aviation Management course', 'MBA Aviation Management eligibility', 'MBA Aviation Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Aviation Management", "url": "/course/management-mba/mba-aviation-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

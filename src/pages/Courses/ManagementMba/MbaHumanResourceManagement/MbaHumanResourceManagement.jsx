import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaHumanResourceManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaHumanResourceManagement(){
return <><SEO
  title="MBA Human Resource Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Human Resource Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-human-resource-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Human Resource Management', 'MBA Human Resource Management course', 'MBA Human Resource Management eligibility', 'MBA Human Resource Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Human Resource Management", "url": "/course/management-mba/mba-human-resource-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

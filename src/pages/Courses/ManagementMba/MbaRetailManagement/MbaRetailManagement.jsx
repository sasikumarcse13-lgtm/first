import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaRetailManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaRetailManagement(){
return <><SEO
  title="MBA Retail Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Retail Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-retail-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Retail Management', 'MBA Retail Management course', 'MBA Retail Management eligibility', 'MBA Retail Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Retail Management", "url": "/course/management-mba/mba-retail-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

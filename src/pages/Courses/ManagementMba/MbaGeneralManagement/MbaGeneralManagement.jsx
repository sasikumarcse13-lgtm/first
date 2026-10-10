import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaGeneralManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaGeneralManagement(){
return <><SEO
  title="MBA General Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA General Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-general-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA General Management', 'MBA General Management course', 'MBA General Management eligibility', 'MBA General Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA General Management", "url": "/course/management-mba/mba-general-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

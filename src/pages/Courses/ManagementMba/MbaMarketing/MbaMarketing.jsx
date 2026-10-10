import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaMarketing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaMarketing(){
return <><SEO
  title="MBA Marketing | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Marketing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-marketing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Marketing', 'MBA Marketing course', 'MBA Marketing eligibility', 'MBA Marketing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Marketing", "url": "/course/management-mba/mba-marketing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

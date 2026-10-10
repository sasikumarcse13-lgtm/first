import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaFinance(){
return <><SEO
  title="MBA Finance | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Finance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Finance', 'MBA Finance course', 'MBA Finance eligibility', 'MBA Finance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Finance", "url": "/course/management-mba/mba-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

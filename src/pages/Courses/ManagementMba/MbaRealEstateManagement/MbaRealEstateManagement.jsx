import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaRealEstateManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaRealEstateManagement(){
return <><SEO
  title="MBA Real Estate Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Real Estate Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba-real-estate-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Real Estate Management', 'MBA Real Estate Management course', 'MBA Real Estate Management eligibility', 'MBA Real Estate Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "MBA Real Estate Management", "url": "/course/management-mba/mba-real-estate-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

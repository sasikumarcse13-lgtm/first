import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaAgriBusinessManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaAgriBusinessManagement(){
return <><SEO
  title="MBA (Agri Business Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA (Agri Business Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/mba-agri-business-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA (Agri Business Management)', 'MBA (Agri Business Management) course', 'MBA (Agri Business Management) eligibility', 'MBA (Agri Business Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "MBA (Agri Business Management)", "url": "/course/agriculture/mba-agri-business-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

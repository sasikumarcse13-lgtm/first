import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaInEntrepreneurship.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaInEntrepreneurship(){
return <><SEO
  title="BBA in Entrepreneurship | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA in Entrepreneurship course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/bba-in-entrepreneurship/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA in Entrepreneurship', 'BBA in Entrepreneurship course', 'BBA in Entrepreneurship eligibility', 'BBA in Entrepreneurship colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "BBA in Entrepreneurship", "url": "/course/management-mba/bba-in-entrepreneurship/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

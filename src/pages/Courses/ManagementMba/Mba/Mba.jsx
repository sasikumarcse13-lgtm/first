import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Mba.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Mba(){
return <><SEO
  title="mba --&gt; | Course Details, Eligibility &amp; Colleges"
  description="Explore mba --&gt; course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/management-mba/mba/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['mba -->', 'mba --> course', 'mba --> eligibility', 'mba --> colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}, {"name": "mba -->", "url": "/course/management-mba/mba/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

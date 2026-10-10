import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdBehavioralScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdBehavioralScience(){
return <><SEO
  title="Ph.D. Behavioral Science | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Behavioral Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/phd-behavioral-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Behavioral Science', 'Ph.D. Behavioral Science course', 'Ph.D. Behavioral Science eligibility', 'Ph.D. Behavioral Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "Ph.D. Behavioral Science", "url": "/course/psychology/phd-behavioral-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdAppliedPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdAppliedPsychology(){
return <><SEO
  title="Ph.D. Applied Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Applied Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/phd-applied-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Applied Psychology', 'Ph.D. Applied Psychology course', 'Ph.D. Applied Psychology eligibility', 'Ph.D. Applied Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "Ph.D. Applied Psychology", "url": "/course/psychology/phd-applied-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCAppliedPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCAppliedPsychology(){
return <><SEO
  title="M.Sc. Applied Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Applied Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ms-c-applied-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Applied Psychology', 'M.Sc. Applied Psychology course', 'M.Sc. Applied Psychology eligibility', 'M.Sc. Applied Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "M.Sc. Applied Psychology", "url": "/course/psychology/ms-c-applied-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

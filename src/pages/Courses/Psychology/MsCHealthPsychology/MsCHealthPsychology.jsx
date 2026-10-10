import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCHealthPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCHealthPsychology(){
return <><SEO
  title="M.Sc. Health Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Health Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ms-c-health-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Health Psychology', 'M.Sc. Health Psychology course', 'M.Sc. Health Psychology eligibility', 'M.Sc. Health Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "M.Sc. Health Psychology", "url": "/course/psychology/ms-c-health-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

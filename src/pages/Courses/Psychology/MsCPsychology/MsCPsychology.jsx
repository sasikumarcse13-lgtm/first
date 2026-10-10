import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCPsychology(){
return <><SEO
  title="M.Sc. Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ms-c-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Psychology', 'M.Sc. Psychology course', 'M.Sc. Psychology eligibility', 'M.Sc. Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "M.Sc. Psychology", "url": "/course/psychology/ms-c-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

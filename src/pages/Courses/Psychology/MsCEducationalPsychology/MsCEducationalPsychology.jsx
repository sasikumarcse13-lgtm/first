import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCEducationalPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCEducationalPsychology(){
return <><SEO
  title="M.Sc. Educational Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Educational Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ms-c-educational-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Educational Psychology', 'M.Sc. Educational Psychology course', 'M.Sc. Educational Psychology eligibility', 'M.Sc. Educational Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "M.Sc. Educational Psychology", "url": "/course/psychology/ms-c-educational-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

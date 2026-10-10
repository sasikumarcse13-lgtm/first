import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaPsychology(){
return <><SEO
  title="M.A. Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ma-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Psychology', 'M.A. Psychology course', 'M.A. Psychology eligibility', 'M.A. Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "M.A. Psychology", "url": "/course/psychology/ma-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

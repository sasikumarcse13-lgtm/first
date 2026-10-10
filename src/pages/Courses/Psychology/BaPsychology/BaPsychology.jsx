import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaPsychology(){
return <><SEO
  title="B.A. Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/ba-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Psychology', 'B.A. Psychology course', 'B.A. Psychology eligibility', 'B.A. Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "B.A. Psychology", "url": "/course/psychology/ba-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

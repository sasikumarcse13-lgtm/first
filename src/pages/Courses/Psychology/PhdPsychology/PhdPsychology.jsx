import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdPsychology(){
return <><SEO
  title="Ph.D. Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/phd-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Psychology', 'Ph.D. Psychology course', 'Ph.D. Psychology eligibility', 'Ph.D. Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "Ph.D. Psychology", "url": "/course/psychology/phd-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

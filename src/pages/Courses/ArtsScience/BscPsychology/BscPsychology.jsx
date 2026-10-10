import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPsychology(){
return <><SEO
  title="B.Sc. Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Psychology', 'B.Sc. Psychology course', 'B.Sc. Psychology eligibility', 'B.Sc. Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Psychology", "url": "/course/arts-science/bsc-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscClinicalPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscClinicalPsychology(){
return <><SEO
  title="B.Sc. Clinical Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Clinical Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/bsc-clinical-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Clinical Psychology', 'B.Sc. Clinical Psychology course', 'B.Sc. Clinical Psychology eligibility', 'B.Sc. Clinical Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "B.Sc. Clinical Psychology", "url": "/course/psychology/bsc-clinical-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

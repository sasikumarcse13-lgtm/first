import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdClinicalPsychology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdClinicalPsychology(){
return <><SEO
  title="Ph.D Clinical Psychology | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D Clinical Psychology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/phd-clinical-psychology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D Clinical Psychology', 'Ph.D Clinical Psychology course', 'Ph.D Clinical Psychology eligibility', 'Ph.D Clinical Psychology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "Ph.D Clinical Psychology", "url": "/course/psychology/phd-clinical-psychology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

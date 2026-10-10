import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCClinicalResearch.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCClinicalResearch(){
return <><SEO
  title="M.Sc. Clinical Research | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Clinical Research course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-clinical-research/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Clinical Research', 'M.Sc. Clinical Research course', 'M.Sc. Clinical Research eligibility', 'M.Sc. Clinical Research colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Clinical Research", "url": "/course/allied-health-science/ms-c-clinical-research/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCRadiologyImaging.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCRadiologyImaging(){
return <><SEO
  title="M.Sc. Radiology / Imaging | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Radiology / Imaging course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-radiology-imaging/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Radiology / Imaging', 'M.Sc. Radiology / Imaging course', 'M.Sc. Radiology / Imaging eligibility', 'M.Sc. Radiology / Imaging colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Radiology / Imaging", "url": "/course/allied-health-science/ms-c-radiology-imaging/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

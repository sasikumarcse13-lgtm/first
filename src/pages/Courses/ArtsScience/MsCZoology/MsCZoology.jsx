import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCZoology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCZoology(){
return <><SEO
  title="M.Sc. Zoology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Zoology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-zoology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Zoology', 'M.Sc. Zoology course', 'M.Sc. Zoology eligibility', 'M.Sc. Zoology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Zoology", "url": "/course/arts-science/ms-c-zoology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

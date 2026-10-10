import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCBiotechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCBiotechnology(){
return <><SEO
  title="M.Sc. Biotechnology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Biotechnology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-biotechnology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Biotechnology', 'M.Sc. Biotechnology course', 'M.Sc. Biotechnology eligibility', 'M.Sc. Biotechnology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Biotechnology", "url": "/course/arts-science/ms-c-biotechnology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

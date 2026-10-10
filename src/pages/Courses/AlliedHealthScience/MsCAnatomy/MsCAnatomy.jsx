import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCAnatomy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCAnatomy(){
return <><SEO
  title="M.Sc. Anatomy | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Anatomy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-anatomy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Anatomy', 'M.Sc. Anatomy course', 'M.Sc. Anatomy eligibility', 'M.Sc. Anatomy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Anatomy", "url": "/course/allied-health-science/ms-c-anatomy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

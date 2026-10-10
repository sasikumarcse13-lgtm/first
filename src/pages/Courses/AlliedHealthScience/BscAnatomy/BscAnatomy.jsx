import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscAnatomy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscAnatomy(){
return <><SEO
  title="B.Sc. Anatomy | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Anatomy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-anatomy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Anatomy', 'B.Sc. Anatomy course', 'B.Sc. Anatomy eligibility', 'B.Sc. Anatomy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Anatomy", "url": "/course/allied-health-science/bsc-anatomy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

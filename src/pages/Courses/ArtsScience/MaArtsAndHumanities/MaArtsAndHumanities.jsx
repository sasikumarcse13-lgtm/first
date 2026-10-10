import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaArtsAndHumanities.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaArtsAndHumanities(){
return <><SEO
  title="M.A. — Arts &amp; Humanities | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. — Arts &amp; Humanities course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-arts-and-humanities/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. — Arts & Humanities', 'M.A. — Arts & Humanities course', 'M.A. — Arts & Humanities eligibility', 'M.A. — Arts & Humanities colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. — Arts & Humanities", "url": "/course/arts-science/ma-arts-and-humanities/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

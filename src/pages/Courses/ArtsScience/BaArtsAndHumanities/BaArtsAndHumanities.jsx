import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaArtsAndHumanities.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaArtsAndHumanities(){
return <><SEO
  title="B.A. — Arts &amp; Humanities | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. — Arts &amp; Humanities course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-arts-and-humanities/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. — Arts & Humanities', 'B.A. — Arts & Humanities course', 'B.A. — Arts & Humanities eligibility', 'B.A. — Arts & Humanities colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. — Arts & Humanities", "url": "/course/arts-science/ba-arts-and-humanities/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaPhilosophy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaPhilosophy(){
return <><SEO
  title="B.A. Philosophy | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Philosophy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-philosophy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Philosophy', 'B.A. Philosophy course', 'B.A. Philosophy eligibility', 'B.A. Philosophy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Philosophy", "url": "/course/arts-science/ba-philosophy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaEconomics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaEconomics(){
return <><SEO
  title="B.A. Economics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Economics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-economics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Economics', 'B.A. Economics course', 'B.A. Economics eligibility', 'B.A. Economics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Economics", "url": "/course/arts-science/ba-economics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

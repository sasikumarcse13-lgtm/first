import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaEconomics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaEconomics(){
return <><SEO
  title="M.A. Economics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Economics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-economics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Economics', 'M.A. Economics course', 'M.A. Economics eligibility', 'M.A. Economics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Economics", "url": "/course/arts-science/ma-economics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

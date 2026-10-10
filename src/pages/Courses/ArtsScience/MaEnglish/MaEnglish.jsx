import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaEnglish.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaEnglish(){
return <><SEO
  title="M.A. English | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. English course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-english/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. English', 'M.A. English course', 'M.A. English eligibility', 'M.A. English colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. English", "url": "/course/arts-science/ma-english/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

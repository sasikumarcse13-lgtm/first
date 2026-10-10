import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaEnglish.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaEnglish(){
return <><SEO
  title="B.A. English | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. English course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-english/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. English', 'B.A. English course', 'B.A. English eligibility', 'B.A. English colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. English", "url": "/course/arts-science/ba-english/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

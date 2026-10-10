import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaTamil.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaTamil(){
return <><SEO
  title="B.A. Tamil | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Tamil course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-tamil/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Tamil', 'B.A. Tamil course', 'B.A. Tamil eligibility', 'B.A. Tamil colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Tamil", "url": "/course/arts-science/ba-tamil/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

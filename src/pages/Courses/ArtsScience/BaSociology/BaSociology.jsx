import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaSociology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaSociology(){
return <><SEO
  title="B.A. Sociology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Sociology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-sociology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Sociology', 'B.A. Sociology course', 'B.A. Sociology eligibility', 'B.A. Sociology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Sociology", "url": "/course/arts-science/ba-sociology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

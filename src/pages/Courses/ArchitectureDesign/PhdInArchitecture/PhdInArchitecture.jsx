import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInArchitecture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInArchitecture(){
return <><SEO
  title="Ph.D. in Architecture | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. in Architecture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/architecture-design/phd-in-architecture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. in Architecture', 'Ph.D. in Architecture course', 'Ph.D. in Architecture eligibility', 'Ph.D. in Architecture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}, {"name": "Ph.D. in Architecture", "url": "/course/architecture-design/phd-in-architecture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscZoology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscZoology(){
return <><SEO
  title="B.Sc. Zoology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Zoology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-zoology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Zoology', 'B.Sc. Zoology course', 'B.Sc. Zoology eligibility', 'B.Sc. Zoology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Zoology", "url": "/course/arts-science/bsc-zoology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

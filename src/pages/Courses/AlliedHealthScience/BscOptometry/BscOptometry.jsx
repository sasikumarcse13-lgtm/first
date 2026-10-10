import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscOptometry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscOptometry(){
return <><SEO
  title="B.Sc. Optometry | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Optometry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-optometry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Optometry', 'B.Sc. Optometry course', 'B.Sc. Optometry eligibility', 'B.Sc. Optometry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Optometry", "url": "/course/allied-health-science/bsc-optometry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

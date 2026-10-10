import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscBiotechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscBiotechnology(){
return <><SEO
  title="B.Sc. Biotechnology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Biotechnology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-biotechnology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Biotechnology', 'B.Sc. Biotechnology course', 'B.Sc. Biotechnology eligibility', 'B.Sc. Biotechnology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Biotechnology", "url": "/course/arts-science/bsc-biotechnology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPhysics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPhysics(){
return <><SEO
  title="B.Sc. Physics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Physics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-physics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Physics', 'B.Sc. Physics course', 'B.Sc. Physics eligibility', 'B.Sc. Physics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Physics", "url": "/course/arts-science/bsc-physics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

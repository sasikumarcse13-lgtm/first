import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCPhysics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCPhysics(){
return <><SEO
  title="M.Sc. Physics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Physics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-physics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Physics', 'M.Sc. Physics course', 'M.Sc. Physics eligibility', 'M.Sc. Physics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Physics", "url": "/course/arts-science/ms-c-physics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

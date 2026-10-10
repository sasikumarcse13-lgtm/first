import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeAppliedElectronics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeAppliedElectronics(){
return <><SEO
  title="M.E. Applied Electronics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Applied Electronics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-applied-electronics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Applied Electronics', 'M.E. Applied Electronics course', 'M.E. Applied Electronics eligibility', 'M.E. Applied Electronics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Applied Electronics", "url": "/course/engineering/me-applied-electronics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

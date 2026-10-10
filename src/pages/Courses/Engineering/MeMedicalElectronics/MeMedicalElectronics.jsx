import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeMedicalElectronics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeMedicalElectronics(){
return <><SEO
  title="M.E. Medical Electronics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Medical Electronics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-medical-electronics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Medical Electronics', 'M.E. Medical Electronics course', 'M.E. Medical Electronics eligibility', 'M.E. Medical Electronics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Medical Electronics", "url": "/course/engineering/me-medical-electronics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

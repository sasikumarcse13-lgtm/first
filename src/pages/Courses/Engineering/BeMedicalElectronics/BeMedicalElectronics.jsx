import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BeMedicalElectronics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BeMedicalElectronics(){
return <><SEO
  title="B.E. Medical Electronics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.E. Medical Electronics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/be-medical-electronics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.E. Medical Electronics', 'B.E. Medical Electronics course', 'B.E. Medical Electronics eligibility', 'B.E. Medical Electronics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.E. Medical Electronics", "url": "/course/engineering/be-medical-electronics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

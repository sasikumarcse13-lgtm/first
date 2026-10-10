import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeComputerAndCommunication.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeComputerAndCommunication(){
return <><SEO
  title="M.E. Computer and Communication | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Computer and Communication course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-computer-and-communication/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Computer and Communication', 'M.E. Computer and Communication course', 'M.E. Computer and Communication eligibility', 'M.E. Computer and Communication colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Computer and Communication", "url": "/course/engineering/me-computer-and-communication/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

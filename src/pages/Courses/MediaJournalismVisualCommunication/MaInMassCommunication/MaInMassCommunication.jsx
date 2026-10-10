import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaInMassCommunication.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaInMassCommunication(){
return <><SEO
  title="M.A in Mass Communication | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A in Mass Communication course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/ma-in-mass-communication/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A in Mass Communication', 'M.A in Mass Communication course', 'M.A in Mass Communication eligibility', 'M.A in Mass Communication colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "M.A in Mass Communication", "url": "/course/media-journalism-visual-communication/ma-in-mass-communication/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaInJournalism.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaInJournalism(){
return <><SEO
  title="M.A in Journalism | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A in Journalism course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/ma-in-journalism/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A in Journalism', 'M.A in Journalism course', 'M.A in Journalism eligibility', 'M.A in Journalism colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "M.A in Journalism", "url": "/course/media-journalism-visual-communication/ma-in-journalism/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

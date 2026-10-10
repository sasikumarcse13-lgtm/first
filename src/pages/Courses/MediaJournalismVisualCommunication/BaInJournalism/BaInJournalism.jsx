import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaInJournalism.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaInJournalism(){
return <><SEO
  title="B.A in Journalism | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A in Journalism course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/ba-in-journalism/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A in Journalism', 'B.A in Journalism course', 'B.A in Journalism eligibility', 'B.A in Journalism colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "B.A in Journalism", "url": "/course/media-journalism-visual-communication/ba-in-journalism/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

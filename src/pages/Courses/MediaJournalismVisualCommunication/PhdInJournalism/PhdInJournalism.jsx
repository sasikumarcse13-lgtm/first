import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInJournalism.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInJournalism(){
return <><SEO
  title="Ph.D in Journalism | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Journalism course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/phd-in-journalism/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Journalism', 'Ph.D in Journalism course', 'Ph.D in Journalism eligibility', 'Ph.D in Journalism colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "Ph.D in Journalism", "url": "/course/media-journalism-visual-communication/phd-in-journalism/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DiplomaInJournalism.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DiplomaInJournalism(){
return <><SEO
  title="Diploma in Journalism | Course Details, Eligibility &amp; Colleges"
  description="Explore Diploma in Journalism course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/diploma-in-journalism/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diploma in Journalism', 'Diploma in Journalism course', 'Diploma in Journalism eligibility', 'Diploma in Journalism colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "Diploma in Journalism", "url": "/course/media-journalism-visual-communication/diploma-in-journalism/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

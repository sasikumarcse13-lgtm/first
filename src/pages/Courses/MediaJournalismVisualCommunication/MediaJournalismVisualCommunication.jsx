import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './MediaJournalismVisualCommunication.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function MediaJournalismVisualCommunication(){
return <><SEO
  title="Media, Journalism &amp; Visual Communication Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Media, Journalism &amp; Visual Communication courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/media-journalism-visual-communication/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Media, Journalism & Visual Communication courses', 'Media, Journalism & Visual Communication courses in India', 'Media, Journalism & Visual Communication course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

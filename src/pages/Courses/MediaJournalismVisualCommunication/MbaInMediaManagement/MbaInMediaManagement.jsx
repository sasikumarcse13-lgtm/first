import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaInMediaManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaInMediaManagement(){
return <><SEO
  title="MBA in Media Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA in Media Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/mba-in-media-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA in Media Management', 'MBA in Media Management course', 'MBA in Media Management eligibility', 'MBA in Media Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "MBA in Media Management", "url": "/course/media-journalism-visual-communication/mba-in-media-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

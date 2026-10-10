import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCElectronicMedia.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCElectronicMedia(){
return <><SEO
  title="M.Sc Electronic Media | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc Electronic Media course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/media-journalism-visual-communication/ms-c-electronic-media/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc Electronic Media', 'M.Sc Electronic Media course', 'M.Sc Electronic Media eligibility', 'M.Sc Electronic Media colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Media, Journalism & Visual Communication Courses", "url": "/course/media-journalism-visual-communication/"}, {"name": "M.Sc Electronic Media", "url": "/course/media-journalism-visual-communication/ms-c-electronic-media/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

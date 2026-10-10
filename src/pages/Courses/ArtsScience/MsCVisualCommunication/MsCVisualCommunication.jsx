import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCVisualCommunication.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCVisualCommunication(){
return <><SEO
  title="M.Sc. Visual Communication | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Visual Communication course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-visual-communication/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Visual Communication', 'M.Sc. Visual Communication course', 'M.Sc. Visual Communication eligibility', 'M.Sc. Visual Communication colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Visual Communication", "url": "/course/arts-science/ms-c-visual-communication/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

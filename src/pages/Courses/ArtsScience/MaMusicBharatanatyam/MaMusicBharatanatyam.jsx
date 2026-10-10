import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaMusicBharatanatyam.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaMusicBharatanatyam(){
return <><SEO
  title="M.A. Music / Bharatanatyam | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Music / Bharatanatyam course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-music-bharatanatyam/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Music / Bharatanatyam', 'M.A. Music / Bharatanatyam course', 'M.A. Music / Bharatanatyam eligibility', 'M.A. Music / Bharatanatyam colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Music / Bharatanatyam", "url": "/course/arts-science/ma-music-bharatanatyam/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

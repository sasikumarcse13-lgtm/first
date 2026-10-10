import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCAirportManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCAirportManagement(){
return <><SEO
  title="M.Sc. Airport Management | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Airport Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/ms-c-airport-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Airport Management', 'M.Sc. Airport Management course', 'M.Sc. Airport Management eligibility', 'M.Sc. Airport Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "M.Sc. Airport Management", "url": "/course/aviation/ms-c-airport-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

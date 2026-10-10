import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './SplStudentPilotLicense.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function SplStudentPilotLicense(){
return <><SEO
  title="SPL – Student Pilot License | Course Details, Eligibility &amp; Colleges"
  description="Explore SPL – Student Pilot License course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/spl-student-pilot-license/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['SPL – Student Pilot License', 'SPL – Student Pilot License course', 'SPL – Student Pilot License eligibility', 'SPL – Student Pilot License colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "SPL – Student Pilot License", "url": "/course/aviation/spl-student-pilot-license/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

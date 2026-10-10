import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './CplCommercialPilotLicense.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function CplCommercialPilotLicense(){
return <><SEO
  title="CPL – Commercial Pilot License | Course Details, Eligibility &amp; Colleges"
  description="Explore CPL – Commercial Pilot License course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/cpl-commercial-pilot-license/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['CPL – Commercial Pilot License', 'CPL – Commercial Pilot License course', 'CPL – Commercial Pilot License eligibility', 'CPL – Commercial Pilot License colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "CPL – Commercial Pilot License", "url": "/course/aviation/cpl-commercial-pilot-license/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

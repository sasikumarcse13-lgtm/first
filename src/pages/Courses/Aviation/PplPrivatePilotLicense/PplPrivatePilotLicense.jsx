import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PplPrivatePilotLicense.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PplPrivatePilotLicense(){
return <><SEO
  title="PPL – Private Pilot License | Course Details, Eligibility &amp; Colleges"
  description="Explore PPL – Private Pilot License course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/ppl-private-pilot-license/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['PPL – Private Pilot License', 'PPL – Private Pilot License course', 'PPL – Private Pilot License eligibility', 'PPL – Private Pilot License colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "PPL – Private Pilot License", "url": "/course/aviation/ppl-private-pilot-license/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

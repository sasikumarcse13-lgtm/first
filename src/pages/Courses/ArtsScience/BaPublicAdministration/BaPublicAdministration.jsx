import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaPublicAdministration.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaPublicAdministration(){
return <><SEO
  title="B.A. Public Administration | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Public Administration course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-public-administration/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Public Administration', 'B.A. Public Administration course', 'B.A. Public Administration eligibility', 'B.A. Public Administration colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Public Administration", "url": "/course/arts-science/ba-public-administration/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

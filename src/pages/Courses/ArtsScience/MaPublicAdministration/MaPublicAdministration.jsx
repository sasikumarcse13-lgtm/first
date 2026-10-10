import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaPublicAdministration.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaPublicAdministration(){
return <><SEO
  title="M.A. Public Administration | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Public Administration course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-public-administration/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Public Administration', 'M.A. Public Administration course', 'M.A. Public Administration eligibility', 'M.A. Public Administration colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Public Administration", "url": "/course/arts-science/ma-public-administration/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McaMasterOfComputerApplications.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McaMasterOfComputerApplications(){
return <><SEO
  title="M.C.A. (Master of Computer Applications) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.C.A. (Master of Computer Applications) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/mca-master-of-computer-applications/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.C.A. (Master of Computer Applications)', 'M.C.A. (Master of Computer Applications) course', 'M.C.A. (Master of Computer Applications) eligibility', 'M.C.A. (Master of Computer Applications) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.C.A. (Master of Computer Applications)", "url": "/course/arts-science/mca-master-of-computer-applications/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

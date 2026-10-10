import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCComputerScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCComputerScience(){
return <><SEO
  title="M.Sc. Computer Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Computer Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-computer-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Computer Science', 'M.Sc. Computer Science course', 'M.Sc. Computer Science eligibility', 'M.Sc. Computer Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Computer Science", "url": "/course/arts-science/ms-c-computer-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

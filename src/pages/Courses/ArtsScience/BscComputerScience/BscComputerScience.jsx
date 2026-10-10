import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscComputerScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscComputerScience(){
return <><SEO
  title="B.Sc. Computer Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Computer Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-computer-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Computer Science', 'B.Sc. Computer Science course', 'B.Sc. Computer Science eligibility', 'B.Sc. Computer Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Computer Science", "url": "/course/arts-science/bsc-computer-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscBehavioralScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscBehavioralScience(){
return <><SEO
  title="B.Sc. Behavioral Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Behavioral Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/psychology/bsc-behavioral-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Behavioral Science', 'B.Sc. Behavioral Science course', 'B.Sc. Behavioral Science eligibility', 'B.Sc. Behavioral Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}, {"name": "B.Sc. Behavioral Science", "url": "/course/psychology/bsc-behavioral-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

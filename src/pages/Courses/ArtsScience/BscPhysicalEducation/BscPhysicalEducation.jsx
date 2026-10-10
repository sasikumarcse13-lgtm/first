import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPhysicalEducation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPhysicalEducation(){
return <><SEO
  title="B.Sc. Physical Education | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Physical Education course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-physical-education/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Physical Education', 'B.Sc. Physical Education course', 'B.Sc. Physical Education eligibility', 'B.Sc. Physical Education colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Physical Education", "url": "/course/arts-science/bsc-physical-education/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

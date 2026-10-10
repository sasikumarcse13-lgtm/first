import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscInAviation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscInAviation(){
return <><SEO
  title="B.Sc. in Aviation | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. in Aviation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/bsc-in-aviation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. in Aviation', 'B.Sc. in Aviation course', 'B.Sc. in Aviation eligibility', 'B.Sc. in Aviation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "B.Sc. in Aviation", "url": "/course/aviation/bsc-in-aviation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

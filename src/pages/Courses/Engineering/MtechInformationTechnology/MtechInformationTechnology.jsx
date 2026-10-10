import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechInformationTechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechInformationTechnology(){
return <><SEO
  title="M.Tech Information Technology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Information Technology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-information-technology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Information Technology', 'M.Tech Information Technology course', 'M.Tech Information Technology eligibility', 'M.Tech Information Technology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Information Technology", "url": "/course/engineering/mtech-information-technology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechInformationTechnologyIt.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechInformationTechnologyIt(){
return <><SEO
  title="B.Tech Information Technology (IT) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Information Technology (IT) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-information-technology-it/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Information Technology (IT)', 'B.Tech Information Technology (IT) course', 'B.Tech Information Technology (IT) eligibility', 'B.Tech Information Technology (IT) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Information Technology (IT)", "url": "/course/engineering/btech-information-technology-it/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

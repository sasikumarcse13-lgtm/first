import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechCyberSecurity.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechCyberSecurity(){
return <><SEO
  title="B.Tech Cyber Security | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Cyber Security course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-cyber-security/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Cyber Security', 'B.Tech Cyber Security course', 'B.Tech Cyber Security eligibility', 'B.Tech Cyber Security colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Cyber Security", "url": "/course/engineering/btech-cyber-security/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

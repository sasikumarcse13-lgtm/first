import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechCyberSecurity.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechCyberSecurity(){
return <><SEO
  title="M.Tech Cyber Security | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Cyber Security course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-cyber-security/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Cyber Security', 'M.Tech Cyber Security course', 'M.Tech Cyber Security eligibility', 'M.Tech Cyber Security colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Cyber Security", "url": "/course/engineering/mtech-cyber-security/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

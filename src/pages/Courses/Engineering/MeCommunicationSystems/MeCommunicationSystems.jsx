import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeCommunicationSystems.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeCommunicationSystems(){
return <><SEO
  title="M.E. Communication Systems | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Communication Systems course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-communication-systems/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Communication Systems', 'M.E. Communication Systems course', 'M.E. Communication Systems eligibility', 'M.E. Communication Systems colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Communication Systems", "url": "/course/engineering/me-communication-systems/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

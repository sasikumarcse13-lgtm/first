import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomManagement(){
return <><SEO
  title="M.Com / Management | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com / Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/mcom-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com / Management', 'M.Com / Management course', 'M.Com / Management eligibility', 'M.Com / Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Com / Management", "url": "/course/arts-science/mcom-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeControlAndInstrumentation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeControlAndInstrumentation(){
return <><SEO
  title="M.E. Control and Instrumentation | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Control and Instrumentation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-control-and-instrumentation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Control and Instrumentation', 'M.E. Control and Instrumentation course', 'M.E. Control and Instrumentation eligibility', 'M.E. Control and Instrumentation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Control and Instrumentation", "url": "/course/engineering/me-control-and-instrumentation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MarineAndNauticalCourses.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MarineAndNauticalCourses(){
return <><SEO
  title="Marine &amp; Nautical Courses — &gt; | Course Details, Eligibility &amp; Colleges"
  description="Explore Marine &amp; Nautical Courses — &gt; course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/marine-nautical/marine-and-nautical-courses/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Marine & Nautical Courses — >', 'Marine & Nautical Courses — > course', 'Marine & Nautical Courses — > eligibility', 'Marine & Nautical Courses — > colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Marine & Nautical Courses", "url": "/course/marine-nautical/"}, {"name": "Marine & Nautical Courses — >", "url": "/course/marine-nautical/marine-and-nautical-courses/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

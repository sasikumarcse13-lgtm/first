import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeStructuralEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeStructuralEngineering(){
return <><SEO
  title="M.E. Structural Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Structural Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-structural-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Structural Engineering', 'M.E. Structural Engineering course', 'M.E. Structural Engineering eligibility', 'M.E. Structural Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Structural Engineering", "url": "/course/engineering/me-structural-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaActing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaActing(){
return <><SEO
  title="B.A Acting | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A Acting course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/ba-acting/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A Acting', 'B.A Acting course', 'B.A Acting eligibility', 'B.A Acting colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "B.A Acting", "url": "/course/fine-arts-performing-arts/ba-acting/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

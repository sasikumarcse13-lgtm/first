import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaLlbArtsLaw.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaLlbArtsLaw(){
return <><SEO
  title="BA LLB (Arts + Law) | Course Details, Eligibility &amp; Colleges"
  description="Explore BA LLB (Arts + Law) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/law/ba-llb-arts-law/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BA LLB (Arts + Law)', 'BA LLB (Arts + Law) course', 'BA LLB (Arts + Law) eligibility', 'BA LLB (Arts + Law) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Law Courses", "url": "/course/law/"}, {"name": "BA LLB (Arts + Law)", "url": "/course/law/ba-llb-arts-law/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

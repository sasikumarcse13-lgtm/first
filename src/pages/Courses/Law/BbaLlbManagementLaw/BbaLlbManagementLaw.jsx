import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaLlbManagementLaw.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaLlbManagementLaw(){
return <><SEO
  title="BBA LLB (Management + Law) | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA LLB (Management + Law) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/law/bba-llb-management-law/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA LLB (Management + Law)', 'BBA LLB (Management + Law) course', 'BBA LLB (Management + Law) eligibility', 'BBA LLB (Management + Law) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Law Courses", "url": "/course/law/"}, {"name": "BBA LLB (Management + Law)", "url": "/course/law/bba-llb-management-law/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

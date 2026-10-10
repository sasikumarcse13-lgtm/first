import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdPhysiotherapy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdPhysiotherapy(){
return <><SEO
  title="Ph.D. Physiotherapy | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Physiotherapy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/physiotherapy/phd-physiotherapy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Physiotherapy', 'Ph.D. Physiotherapy course', 'Ph.D. Physiotherapy eligibility', 'Ph.D. Physiotherapy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Physiotherapy Courses", "url": "/course/physiotherapy/"}, {"name": "Ph.D. Physiotherapy", "url": "/course/physiotherapy/phd-physiotherapy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

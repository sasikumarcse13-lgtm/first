import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MphilInPhysiotherapy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MphilInPhysiotherapy(){
return <><SEO
  title="M.Phil in Physiotherapy | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Phil in Physiotherapy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/physiotherapy/mphil-in-physiotherapy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Phil in Physiotherapy', 'M.Phil in Physiotherapy course', 'M.Phil in Physiotherapy eligibility', 'M.Phil in Physiotherapy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Physiotherapy Courses", "url": "/course/physiotherapy/"}, {"name": "M.Phil in Physiotherapy", "url": "/course/physiotherapy/mphil-in-physiotherapy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

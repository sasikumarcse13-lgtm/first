import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MptMasterOfPhysiotherapy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MptMasterOfPhysiotherapy(){
return <><SEO
  title="MPT – Master of Physiotherapy | Course Details, Eligibility &amp; Colleges"
  description="Explore MPT – Master of Physiotherapy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/physiotherapy/mpt-master-of-physiotherapy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MPT – Master of Physiotherapy', 'MPT – Master of Physiotherapy course', 'MPT – Master of Physiotherapy eligibility', 'MPT – Master of Physiotherapy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Physiotherapy Courses", "url": "/course/physiotherapy/"}, {"name": "MPT – Master of Physiotherapy", "url": "/course/physiotherapy/mpt-master-of-physiotherapy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

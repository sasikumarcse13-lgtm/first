import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MphilInLaw.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MphilInLaw(){
return <><SEO
  title="M.Phil in Law | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Phil in Law course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/law/mphil-in-law/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Phil in Law', 'M.Phil in Law course', 'M.Phil in Law eligibility', 'M.Phil in Law colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Law Courses", "url": "/course/law/"}, {"name": "M.Phil in Law", "url": "/course/law/mphil-in-law/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

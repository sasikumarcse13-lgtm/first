import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInLaw.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInLaw(){
return <><SEO
  title="Ph.D in Law | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Law course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/law/phd-in-law/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Law', 'Ph.D in Law course', 'Ph.D in Law eligibility', 'Ph.D in Law colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Law Courses", "url": "/course/law/"}, {"name": "Ph.D in Law", "url": "/course/law/phd-in-law/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

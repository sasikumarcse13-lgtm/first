import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechChemicalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechChemicalEngineering(){
return <><SEO
  title="B.Tech Chemical Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Chemical Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-chemical-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Chemical Engineering', 'B.Tech Chemical Engineering course', 'B.Tech Chemical Engineering eligibility', 'B.Tech Chemical Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Chemical Engineering", "url": "/course/engineering/btech-chemical-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

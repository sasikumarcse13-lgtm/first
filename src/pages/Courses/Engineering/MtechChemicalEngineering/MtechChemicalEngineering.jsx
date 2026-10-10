import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechChemicalEngineering.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechChemicalEngineering(){
return <><SEO
  title="M.Tech Chemical Engineering | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Chemical Engineering course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-chemical-engineering/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Chemical Engineering', 'M.Tech Chemical Engineering course', 'M.Tech Chemical Engineering eligibility', 'M.Tech Chemical Engineering colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Chemical Engineering", "url": "/course/engineering/mtech-chemical-engineering/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

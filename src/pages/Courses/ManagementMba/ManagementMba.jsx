import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './ManagementMba.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function ManagementMba(){
return <><SEO
  title="Management &amp; MBA Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Management &amp; MBA courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/management-mba/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Management & MBA courses', 'Management & MBA courses in India', 'Management & MBA course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Management & MBA Courses", "url": "/course/management-mba/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

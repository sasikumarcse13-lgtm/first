import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './AlliedHealthScience.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function AlliedHealthScience(){
return <><SEO
  title="Allied Health Science Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Allied Health Science courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/allied-health-science/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Allied Health Science courses', 'Allied Health Science courses in India', 'Allied Health Science course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

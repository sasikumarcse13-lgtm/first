import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Law.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Law(){
return <><SEO
  title="Law Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Law courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/law/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Law courses', 'Law courses in India', 'Law course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Law Courses", "url": "/course/law/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

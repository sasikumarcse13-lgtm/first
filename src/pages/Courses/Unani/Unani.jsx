import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Unani.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Unani(){
return <><SEO
  title="Unani Medicine Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Unani Medicine courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/unani/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Unani Medicine courses', 'Unani Medicine courses in India', 'Unani Medicine course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Unani Medicine Courses", "url": "/course/unani/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

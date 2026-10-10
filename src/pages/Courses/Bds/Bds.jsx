import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Bds.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Bds(){
return <><SEO
  title="BDS Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore BDS courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/bds/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['BDS courses', 'BDS courses in India', 'BDS course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "BDS Courses", "url": "/course/bds/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

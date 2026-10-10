import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Mbbs.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Mbbs(){
return <><SEO
  title="MBBS &amp; Medical Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore MBBS &amp; Medical courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/mbbs/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['MBBS & Medical courses', 'MBBS & Medical courses in India', 'MBBS & Medical course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

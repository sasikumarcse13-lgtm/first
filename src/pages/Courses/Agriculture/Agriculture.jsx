import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Agriculture.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Agriculture(){
return <><SEO
  title="Agriculture Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Agriculture courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/agriculture/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Agriculture courses', 'Agriculture courses in India', 'Agriculture course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

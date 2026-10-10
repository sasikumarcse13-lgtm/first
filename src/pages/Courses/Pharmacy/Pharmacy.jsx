import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Pharmacy.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Pharmacy(){
return <><SEO
  title="Pharmacy Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Pharmacy courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/pharmacy/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Pharmacy courses', 'Pharmacy courses in India', 'Pharmacy course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Pharmacy Courses", "url": "/course/pharmacy/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

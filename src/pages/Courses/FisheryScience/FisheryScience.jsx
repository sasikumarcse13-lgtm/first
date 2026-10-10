import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './FisheryScience.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function FisheryScience(){
return <><SEO
  title="Fishery Science Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Fishery Science courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/fishery-science/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Fishery Science courses', 'Fishery Science courses in India', 'Fishery Science course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Fishery Science Courses", "url": "/course/fishery-science/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

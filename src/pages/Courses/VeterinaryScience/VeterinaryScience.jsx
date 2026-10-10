import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './VeterinaryScience.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function VeterinaryScience(){
return <><SEO
  title="Veterinary Science Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Veterinary Science courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/veterinary-science/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Veterinary Science courses', 'Veterinary Science courses in India', 'Veterinary Science course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Veterinary Science Courses", "url": "/course/veterinary-science/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

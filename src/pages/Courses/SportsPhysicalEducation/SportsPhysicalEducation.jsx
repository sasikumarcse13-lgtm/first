import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './SportsPhysicalEducation.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function SportsPhysicalEducation(){
return <><SEO
  title="Sports &amp; Physical Education Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Sports &amp; Physical Education courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/sports-physical-education/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Sports & Physical Education courses', 'Sports & Physical Education courses in India', 'Sports & Physical Education course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

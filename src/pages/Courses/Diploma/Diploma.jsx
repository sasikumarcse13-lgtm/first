import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Diploma.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Diploma(){
return <><SEO
  title="Diploma Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Diploma courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/diploma/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Diploma courses', 'Diploma courses in India', 'Diploma course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Diploma Courses", "url": "/course/diploma/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

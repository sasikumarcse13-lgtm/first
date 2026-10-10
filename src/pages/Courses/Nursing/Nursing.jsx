import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Nursing.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Nursing(){
return <><SEO
  title="Nursing Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Nursing courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/nursing/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Nursing courses', 'Nursing courses in India', 'Nursing course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

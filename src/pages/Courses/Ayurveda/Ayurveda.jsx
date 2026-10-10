import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Ayurveda.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Ayurveda(){
return <><SEO
  title="Ayurveda Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Ayurveda courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/ayurveda/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Ayurveda courses', 'Ayurveda courses in India', 'Ayurveda course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Ayurveda Courses", "url": "/course/ayurveda/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Physiotherapy.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Physiotherapy(){
return <><SEO
  title="Physiotherapy Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Physiotherapy courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/physiotherapy/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Physiotherapy courses', 'Physiotherapy courses in India', 'Physiotherapy course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Physiotherapy Courses", "url": "/course/physiotherapy/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

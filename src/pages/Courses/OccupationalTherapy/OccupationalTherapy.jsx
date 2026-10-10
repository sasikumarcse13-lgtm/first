import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './OccupationalTherapy.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function OccupationalTherapy(){
return <><SEO
  title="Occupational Therapy Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Occupational Therapy courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/occupational-therapy/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Occupational Therapy courses', 'Occupational Therapy courses in India', 'Occupational Therapy course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Occupational Therapy Courses", "url": "/course/occupational-therapy/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

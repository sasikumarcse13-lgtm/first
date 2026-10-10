import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Psychology.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Psychology(){
return <><SEO
  title="Psychology Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Psychology courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/psychology/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Psychology courses', 'Psychology courses in India', 'Psychology course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Psychology Courses", "url": "/course/psychology/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

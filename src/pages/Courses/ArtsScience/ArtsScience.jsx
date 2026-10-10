import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './ArtsScience.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function ArtsScience(){
return <><SEO
  title="Arts &amp; Science Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Arts &amp; Science courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/arts-science/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Arts & Science courses', 'Arts & Science courses in India', 'Arts & Science course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

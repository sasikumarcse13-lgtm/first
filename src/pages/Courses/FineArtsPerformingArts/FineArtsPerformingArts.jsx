import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './FineArtsPerformingArts.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function FineArtsPerformingArts(){
return <><SEO
  title="Fine Arts &amp; Performing Arts Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Fine Arts &amp; Performing Arts courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/fine-arts-performing-arts/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Fine Arts & Performing Arts courses', 'Fine Arts & Performing Arts courses in India', 'Fine Arts & Performing Arts course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

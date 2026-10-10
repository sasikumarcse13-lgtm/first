import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './ArchitectureDesign.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function ArchitectureDesign(){
return <><SEO
  title="Architecture &amp; Design Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Architecture &amp; Design courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/architecture-design/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Architecture & Design courses', 'Architecture & Design courses in India', 'Architecture & Design course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Architecture & Design Courses", "url": "/course/architecture-design/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Aviation.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Aviation(){
return <><SEO
  title="Aviation Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Aviation courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/aviation/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Aviation courses', 'Aviation courses in India', 'Aviation course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

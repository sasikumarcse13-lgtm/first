import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Homeopathy.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Homeopathy(){
return <><SEO
  title="Homeopathy Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Homeopathy courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/homeopathy/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Homeopathy courses', 'Homeopathy courses in India', 'Homeopathy course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Homeopathy Courses", "url": "/course/homeopathy/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

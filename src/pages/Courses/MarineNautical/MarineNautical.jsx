import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './MarineNautical.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function MarineNautical(){
return <><SEO
  title="Marine &amp; Nautical Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Marine &amp; Nautical courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/marine-nautical/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Marine & Nautical courses', 'Marine & Nautical courses in India', 'Marine & Nautical course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Marine & Nautical Courses", "url": "/course/marine-nautical/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

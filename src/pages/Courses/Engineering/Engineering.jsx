import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './Engineering.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function Engineering(){
return <><SEO
  title="Engineering Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Engineering courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/engineering/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Engineering courses', 'Engineering courses in India', 'Engineering course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

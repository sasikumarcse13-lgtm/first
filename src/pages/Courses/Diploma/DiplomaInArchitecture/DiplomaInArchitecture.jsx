import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DiplomaInArchitecture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DiplomaInArchitecture(){
return <><SEO
  title="Diploma in Architecture | Course Details, Eligibility &amp; Colleges"
  description="Explore Diploma in Architecture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/diploma/diploma-in-architecture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diploma in Architecture', 'Diploma in Architecture course', 'Diploma in Architecture eligibility', 'Diploma in Architecture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Diploma Courses", "url": "/course/diploma/"}, {"name": "Diploma in Architecture", "url": "/course/diploma/diploma-in-architecture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

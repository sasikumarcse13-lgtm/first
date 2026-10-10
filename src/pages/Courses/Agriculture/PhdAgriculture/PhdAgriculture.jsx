import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdAgriculture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdAgriculture(){
return <><SEO
  title="Ph.D. Agriculture | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. Agriculture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/phd-agriculture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. Agriculture', 'Ph.D. Agriculture course', 'Ph.D. Agriculture eligibility', 'Ph.D. Agriculture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "Ph.D. Agriculture", "url": "/course/agriculture/phd-agriculture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

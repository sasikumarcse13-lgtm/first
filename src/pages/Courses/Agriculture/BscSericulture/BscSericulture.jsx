import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscSericulture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscSericulture(){
return <><SEO
  title="B.Sc. Sericulture | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Sericulture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/bsc-sericulture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Sericulture', 'B.Sc. Sericulture course', 'B.Sc. Sericulture eligibility', 'B.Sc. Sericulture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "B.Sc. Sericulture", "url": "/course/agriculture/bsc-sericulture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscHorticulture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscHorticulture(){
return <><SEO
  title="B.Sc. Horticulture | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Horticulture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/bsc-horticulture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Horticulture', 'B.Sc. Horticulture course', 'B.Sc. Horticulture eligibility', 'B.Sc. Horticulture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "B.Sc. Horticulture", "url": "/course/agriculture/bsc-horticulture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

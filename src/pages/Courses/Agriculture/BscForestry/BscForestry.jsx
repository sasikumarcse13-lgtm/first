import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscForestry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscForestry(){
return <><SEO
  title="B.Sc. Forestry | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Forestry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/bsc-forestry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Forestry', 'B.Sc. Forestry course', 'B.Sc. Forestry eligibility', 'B.Sc. Forestry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "B.Sc. Forestry", "url": "/course/agriculture/bsc-forestry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

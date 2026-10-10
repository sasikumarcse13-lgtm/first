import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechFoodProcessing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechFoodProcessing(){
return <><SEO
  title="M.Tech. (Food Processing) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech. (Food Processing) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/mtech-food-processing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech. (Food Processing)', 'M.Tech. (Food Processing) course', 'M.Tech. (Food Processing) eligibility', 'M.Tech. (Food Processing) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "M.Tech. (Food Processing)", "url": "/course/agriculture/mtech-food-processing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

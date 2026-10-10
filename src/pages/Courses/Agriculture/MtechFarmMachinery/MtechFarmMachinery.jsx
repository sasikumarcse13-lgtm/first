import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechFarmMachinery.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechFarmMachinery(){
return <><SEO
  title="M.Tech. – Farm Machinery | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech. – Farm Machinery course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/mtech-farm-machinery/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech. – Farm Machinery', 'M.Tech. – Farm Machinery course', 'M.Tech. – Farm Machinery eligibility', 'M.Tech. – Farm Machinery colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "M.Tech. – Farm Machinery", "url": "/course/agriculture/mtech-farm-machinery/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MphilInEpidemiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MphilInEpidemiology(){
return <><SEO
  title="M.Phil in Epidemiology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Phil in Epidemiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/veterinary-science/mphil-in-epidemiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Phil in Epidemiology', 'M.Phil in Epidemiology course', 'M.Phil in Epidemiology eligibility', 'M.Phil in Epidemiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Veterinary Science Courses", "url": "/course/veterinary-science/"}, {"name": "M.Phil in Epidemiology", "url": "/course/veterinary-science/mphil-in-epidemiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

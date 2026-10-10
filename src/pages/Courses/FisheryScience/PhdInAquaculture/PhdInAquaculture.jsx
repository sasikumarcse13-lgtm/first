import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInAquaculture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInAquaculture(){
return <><SEO
  title="Ph.D. in Aquaculture | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D. in Aquaculture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fishery-science/phd-in-aquaculture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D. in Aquaculture', 'Ph.D. in Aquaculture course', 'Ph.D. in Aquaculture eligibility', 'Ph.D. in Aquaculture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fishery Science Courses", "url": "/course/fishery-science/"}, {"name": "Ph.D. in Aquaculture", "url": "/course/fishery-science/phd-in-aquaculture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

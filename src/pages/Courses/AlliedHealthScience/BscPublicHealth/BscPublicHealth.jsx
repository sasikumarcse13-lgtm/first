import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPublicHealth.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPublicHealth(){
return <><SEO
  title="B.Sc. Public Health | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Public Health course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-public-health/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Public Health', 'B.Sc. Public Health course', 'B.Sc. Public Health eligibility', 'B.Sc. Public Health colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Public Health", "url": "/course/allied-health-science/bsc-public-health/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

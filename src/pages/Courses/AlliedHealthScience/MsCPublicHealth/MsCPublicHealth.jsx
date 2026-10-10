import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCPublicHealth.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCPublicHealth(){
return <><SEO
  title="M.Sc. Public Health | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Public Health course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-public-health/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Public Health', 'M.Sc. Public Health course', 'M.Sc. Public Health eligibility', 'M.Sc. Public Health colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Public Health", "url": "/course/allied-health-science/ms-c-public-health/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

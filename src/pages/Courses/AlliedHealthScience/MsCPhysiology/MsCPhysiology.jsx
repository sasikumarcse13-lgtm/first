import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCPhysiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCPhysiology(){
return <><SEO
  title="M.Sc. Physiology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Physiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-physiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Physiology', 'M.Sc. Physiology course', 'M.Sc. Physiology eligibility', 'M.Sc. Physiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Physiology", "url": "/course/allied-health-science/ms-c-physiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

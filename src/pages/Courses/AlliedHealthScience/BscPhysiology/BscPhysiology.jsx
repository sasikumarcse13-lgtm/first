import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPhysiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPhysiology(){
return <><SEO
  title="B.Sc. Physiology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Physiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-physiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Physiology', 'B.Sc. Physiology course', 'B.Sc. Physiology eligibility', 'B.Sc. Physiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Physiology", "url": "/course/allied-health-science/bsc-physiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

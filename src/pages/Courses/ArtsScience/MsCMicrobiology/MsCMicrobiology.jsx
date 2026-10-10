import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCMicrobiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCMicrobiology(){
return <><SEO
  title="M.Sc. Microbiology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Microbiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-microbiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Microbiology', 'M.Sc. Microbiology course', 'M.Sc. Microbiology eligibility', 'M.Sc. Microbiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Microbiology", "url": "/course/arts-science/ms-c-microbiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

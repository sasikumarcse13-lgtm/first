import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscMicrobiology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscMicrobiology(){
return <><SEO
  title="B.Sc. Microbiology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Microbiology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-microbiology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Microbiology', 'B.Sc. Microbiology course', 'B.Sc. Microbiology eligibility', 'B.Sc. Microbiology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Microbiology", "url": "/course/arts-science/bsc-microbiology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

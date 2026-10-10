import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscBiochemistry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscBiochemistry(){
return <><SEO
  title="B.Sc. Biochemistry | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Biochemistry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-biochemistry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Biochemistry', 'B.Sc. Biochemistry course', 'B.Sc. Biochemistry eligibility', 'B.Sc. Biochemistry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Biochemistry", "url": "/course/allied-health-science/bsc-biochemistry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscEnvironmentalScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscEnvironmentalScience(){
return <><SEO
  title="B.Sc. Environmental Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Environmental Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-environmental-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Environmental Science', 'B.Sc. Environmental Science course', 'B.Sc. Environmental Science eligibility', 'B.Sc. Environmental Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Environmental Science", "url": "/course/arts-science/bsc-environmental-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

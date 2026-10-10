import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscInteriorDesign.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscInteriorDesign(){
return <><SEO
  title="B.Sc. Interior Design | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Interior Design course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-interior-design/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Interior Design', 'B.Sc. Interior Design course', 'B.Sc. Interior Design eligibility', 'B.Sc. Interior Design colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Interior Design", "url": "/course/arts-science/bsc-interior-design/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

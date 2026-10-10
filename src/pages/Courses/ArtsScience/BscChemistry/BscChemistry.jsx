import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscChemistry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscChemistry(){
return <><SEO
  title="B.Sc. Chemistry | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Chemistry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-chemistry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Chemistry', 'B.Sc. Chemistry course', 'B.Sc. Chemistry eligibility', 'B.Sc. Chemistry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Chemistry", "url": "/course/arts-science/bsc-chemistry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

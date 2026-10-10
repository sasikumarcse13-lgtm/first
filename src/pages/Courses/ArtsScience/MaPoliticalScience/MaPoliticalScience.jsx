import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaPoliticalScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaPoliticalScience(){
return <><SEO
  title="M.A. Political Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A. Political Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ma-political-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A. Political Science', 'M.A. Political Science course', 'M.A. Political Science eligibility', 'M.A. Political Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.A. Political Science", "url": "/course/arts-science/ma-political-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaPoliticalScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaPoliticalScience(){
return <><SEO
  title="B.A. Political Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Political Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ba-political-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Political Science', 'B.A. Political Science course', 'B.A. Political Science eligibility', 'B.A. Political Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.A. Political Science", "url": "/course/arts-science/ba-political-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCEnvironmentalScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCEnvironmentalScience(){
return <><SEO
  title="M.Sc. Environmental Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Environmental Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-environmental-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Environmental Science', 'M.Sc. Environmental Science course', 'M.Sc. Environmental Science eligibility', 'M.Sc. Environmental Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Environmental Science", "url": "/course/arts-science/ms-c-environmental-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

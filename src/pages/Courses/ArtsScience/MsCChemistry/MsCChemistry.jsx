import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCChemistry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCChemistry(){
return <><SEO
  title="M.Sc. Chemistry | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Chemistry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-chemistry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Chemistry', 'M.Sc. Chemistry course', 'M.Sc. Chemistry eligibility', 'M.Sc. Chemistry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Chemistry", "url": "/course/arts-science/ms-c-chemistry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

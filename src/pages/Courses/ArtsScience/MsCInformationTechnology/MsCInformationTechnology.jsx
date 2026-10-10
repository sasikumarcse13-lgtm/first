import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCInformationTechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCInformationTechnology(){
return <><SEO
  title="M.Sc. Information Technology | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Information Technology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-information-technology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Information Technology', 'M.Sc. Information Technology course', 'M.Sc. Information Technology eligibility', 'M.Sc. Information Technology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Information Technology", "url": "/course/arts-science/ms-c-information-technology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

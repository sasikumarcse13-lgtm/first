import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCBiochemistry.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCBiochemistry(){
return <><SEO
  title="M.Sc. Biochemistry | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Biochemistry course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-biochemistry/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Biochemistry', 'M.Sc. Biochemistry course', 'M.Sc. Biochemistry eligibility', 'M.Sc. Biochemistry colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Biochemistry", "url": "/course/allied-health-science/ms-c-biochemistry/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

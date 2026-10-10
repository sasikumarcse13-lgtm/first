import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './P0005.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscHealthInformationManagement(){
return <><SEO
  title="B.Sc. Health Information Management | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Health Information Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-health-information-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Health Information Management', 'B.Sc. Health Information Management course', 'B.Sc. Health Information Management eligibility', 'B.Sc. Health Information Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Health Information Management", "url": "/course/allied-health-science/bsc-health-information-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

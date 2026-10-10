import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPublicHealthNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPublicHealthNursing(){
return <><SEO
  title="B.Sc. Public Health Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Public Health Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/bsc-public-health-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Public Health Nursing', 'B.Sc. Public Health Nursing course', 'B.Sc. Public Health Nursing eligibility', 'B.Sc. Public Health Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "B.Sc. Public Health Nursing", "url": "/course/nursing/bsc-public-health-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

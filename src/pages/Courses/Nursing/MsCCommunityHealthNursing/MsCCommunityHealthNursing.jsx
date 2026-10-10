import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCCommunityHealthNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCCommunityHealthNursing(){
return <><SEO
  title="M.Sc. Community Health Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Community Health Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/ms-c-community-health-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Community Health Nursing', 'M.Sc. Community Health Nursing course', 'M.Sc. Community Health Nursing eligibility', 'M.Sc. Community Health Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "M.Sc. Community Health Nursing", "url": "/course/nursing/ms-c-community-health-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

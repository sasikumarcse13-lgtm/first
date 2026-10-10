import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCSurgicalNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCSurgicalNursing(){
return <><SEO
  title="M.Sc. Surgical Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Surgical Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/ms-c-surgical-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Surgical Nursing', 'M.Sc. Surgical Nursing course', 'M.Sc. Surgical Nursing eligibility', 'M.Sc. Surgical Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "M.Sc. Surgical Nursing", "url": "/course/nursing/ms-c-surgical-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

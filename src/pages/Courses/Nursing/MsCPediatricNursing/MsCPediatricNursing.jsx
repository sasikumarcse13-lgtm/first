import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCPediatricNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCPediatricNursing(){
return <><SEO
  title="M.Sc. Pediatric Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Pediatric Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/ms-c-pediatric-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Pediatric Nursing', 'M.Sc. Pediatric Nursing course', 'M.Sc. Pediatric Nursing eligibility', 'M.Sc. Pediatric Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "M.Sc. Pediatric Nursing", "url": "/course/nursing/ms-c-pediatric-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

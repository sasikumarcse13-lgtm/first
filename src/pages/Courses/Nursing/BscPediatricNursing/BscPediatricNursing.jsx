import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscPediatricNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscPediatricNursing(){
return <><SEO
  title="B.Sc. Pediatric Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Pediatric Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/bsc-pediatric-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Pediatric Nursing', 'B.Sc. Pediatric Nursing course', 'B.Sc. Pediatric Nursing eligibility', 'B.Sc. Pediatric Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "B.Sc. Pediatric Nursing", "url": "/course/nursing/bsc-pediatric-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

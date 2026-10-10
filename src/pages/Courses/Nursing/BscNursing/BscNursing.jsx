import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscNursing(){
return <><SEO
  title="B.Sc Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/bsc-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc Nursing', 'B.Sc Nursing course', 'B.Sc Nursing eligibility', 'B.Sc Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "B.Sc Nursing", "url": "/course/nursing/bsc-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

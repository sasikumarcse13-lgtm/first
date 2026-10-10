import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCNursing(){
return <><SEO
  title="M.Sc Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/ms-c-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc Nursing', 'M.Sc Nursing course', 'M.Sc Nursing eligibility', 'M.Sc Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "M.Sc Nursing", "url": "/course/nursing/ms-c-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

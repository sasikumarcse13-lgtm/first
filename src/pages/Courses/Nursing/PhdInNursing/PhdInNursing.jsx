import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInNursing.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInNursing(){
return <><SEO
  title="Ph.D in Nursing | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Nursing course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/nursing/phd-in-nursing/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Nursing', 'Ph.D in Nursing course', 'Ph.D in Nursing eligibility', 'Ph.D in Nursing colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Nursing Courses", "url": "/course/nursing/"}, {"name": "Ph.D in Nursing", "url": "/course/nursing/phd-in-nursing/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

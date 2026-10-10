import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCScience(){
return <><SEO
  title="M.Sc. — Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. — Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. — Science', 'M.Sc. — Science course', 'M.Sc. — Science eligibility', 'M.Sc. — Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. — Science", "url": "/course/arts-science/ms-c-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

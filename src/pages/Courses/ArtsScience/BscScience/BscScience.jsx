import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscScience(){
return <><SEO
  title="B.Sc. — Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. — Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. — Science', 'B.Sc. — Science course', 'B.Sc. — Science eligibility', 'B.Sc. — Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. — Science", "url": "/course/arts-science/bsc-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

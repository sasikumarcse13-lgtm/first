import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscDataScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscDataScience(){
return <><SEO
  title="B.Sc. Data Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Data Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-data-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Data Science', 'B.Sc. Data Science course', 'B.Sc. Data Science eligibility', 'B.Sc. Data Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Data Science", "url": "/course/arts-science/bsc-data-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

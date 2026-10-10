import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MtechDataScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MtechDataScience(){
return <><SEO
  title="M.Tech Data Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Tech Data Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/mtech-data-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Tech Data Science', 'M.Tech Data Science course', 'M.Tech Data Science eligibility', 'M.Tech Data Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.Tech Data Science", "url": "/course/engineering/mtech-data-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

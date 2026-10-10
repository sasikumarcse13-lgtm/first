import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCSportsScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCSportsScience(){
return <><SEO
  title="M.Sc. Sports Science | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Sports Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/ms-c-sports-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Sports Science', 'M.Sc. Sports Science course', 'M.Sc. Sports Science eligibility', 'M.Sc. Sports Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "M.Sc. Sports Science", "url": "/course/sports-physical-education/ms-c-sports-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

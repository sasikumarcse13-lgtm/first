import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscSportsScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscSportsScience(){
return <><SEO
  title="B.Sc. Sports Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Sports Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/bsc-sports-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Sports Science', 'B.Sc. Sports Science course', 'B.Sc. Sports Science eligibility', 'B.Sc. Sports Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "B.Sc. Sports Science", "url": "/course/sports-physical-education/bsc-sports-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

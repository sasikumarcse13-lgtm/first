import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdSportsScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdSportsScience(){
return <><SEO
  title="Ph.D Sports Science | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D Sports Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/phd-sports-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D Sports Science', 'Ph.D Sports Science course', 'Ph.D Sports Science eligibility', 'Ph.D Sports Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "Ph.D Sports Science", "url": "/course/sports-physical-education/phd-sports-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

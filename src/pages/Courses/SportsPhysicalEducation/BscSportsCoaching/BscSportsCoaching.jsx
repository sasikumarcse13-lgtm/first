import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscSportsCoaching.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscSportsCoaching(){
return <><SEO
  title="B.Sc. Sports Coaching | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Sports Coaching course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/bsc-sports-coaching/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Sports Coaching', 'B.Sc. Sports Coaching course', 'B.Sc. Sports Coaching eligibility', 'B.Sc. Sports Coaching colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "B.Sc. Sports Coaching", "url": "/course/sports-physical-education/bsc-sports-coaching/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

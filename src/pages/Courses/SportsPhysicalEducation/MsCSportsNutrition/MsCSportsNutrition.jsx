import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCSportsNutrition.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCSportsNutrition(){
return <><SEO
  title="M.Sc. Sports Nutrition | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Sports Nutrition course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/sports-physical-education/ms-c-sports-nutrition/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Sports Nutrition', 'M.Sc. Sports Nutrition course', 'M.Sc. Sports Nutrition eligibility', 'M.Sc. Sports Nutrition colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Sports & Physical Education Courses", "url": "/course/sports-physical-education/"}, {"name": "M.Sc. Sports Nutrition", "url": "/course/sports-physical-education/ms-c-sports-nutrition/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

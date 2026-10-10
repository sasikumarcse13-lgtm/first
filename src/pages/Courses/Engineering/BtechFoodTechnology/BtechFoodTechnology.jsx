import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechFoodTechnology.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechFoodTechnology(){
return <><SEO
  title="B.Tech Food Technology | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Food Technology course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-food-technology/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Food Technology', 'B.Tech Food Technology course', 'B.Tech Food Technology eligibility', 'B.Tech Food Technology colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Food Technology", "url": "/course/engineering/btech-food-technology/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

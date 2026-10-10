import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechArtificialIntelligence.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechArtificialIntelligence(){
return <><SEO
  title="B.Tech Artificial Intelligence | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech Artificial Intelligence course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/btech-artificial-intelligence/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech Artificial Intelligence', 'B.Tech Artificial Intelligence course', 'B.Tech Artificial Intelligence eligibility', 'B.Tech Artificial Intelligence colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "B.Tech Artificial Intelligence", "url": "/course/engineering/btech-artificial-intelligence/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

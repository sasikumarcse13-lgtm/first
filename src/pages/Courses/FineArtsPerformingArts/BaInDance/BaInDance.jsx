import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaInDance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaInDance(){
return <><SEO
  title="B.A in Dance | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A in Dance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/ba-in-dance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A in Dance', 'B.A in Dance course', 'B.A in Dance eligibility', 'B.A in Dance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "B.A in Dance", "url": "/course/fine-arts-performing-arts/ba-in-dance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

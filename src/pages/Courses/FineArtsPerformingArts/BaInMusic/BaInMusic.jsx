import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaInMusic.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaInMusic(){
return <><SEO
  title="B.A in Music | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A in Music course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/ba-in-music/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A in Music', 'B.A in Music course', 'B.A in Music eligibility', 'B.A in Music colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "B.A in Music", "url": "/course/fine-arts-performing-arts/ba-in-music/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

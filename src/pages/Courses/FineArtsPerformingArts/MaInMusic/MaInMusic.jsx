import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaInMusic.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaInMusic(){
return <><SEO
  title="M.A in Music | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A in Music course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/ma-in-music/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A in Music', 'M.A in Music course', 'M.A in Music eligibility', 'M.A in Music colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "M.A in Music", "url": "/course/fine-arts-performing-arts/ma-in-music/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

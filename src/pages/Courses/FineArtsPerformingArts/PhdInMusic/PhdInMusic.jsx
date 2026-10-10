import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInMusic.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInMusic(){
return <><SEO
  title="PhD in Music | Course Details, Eligibility &amp; Colleges"
  description="Explore PhD in Music course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/phd-in-music/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['PhD in Music', 'PhD in Music course', 'PhD in Music eligibility', 'PhD in Music colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "PhD in Music", "url": "/course/fine-arts-performing-arts/phd-in-music/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

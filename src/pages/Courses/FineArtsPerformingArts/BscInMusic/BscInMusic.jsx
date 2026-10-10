import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscInMusic.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscInMusic(){
return <><SEO
  title="B.Sc in Music | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc in Music course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/bsc-in-music/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc in Music', 'B.Sc in Music course', 'B.Sc in Music eligibility', 'B.Sc in Music colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "B.Sc in Music", "url": "/course/fine-arts-performing-arts/bsc-in-music/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

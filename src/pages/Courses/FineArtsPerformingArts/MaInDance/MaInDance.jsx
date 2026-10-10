import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MaInDance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MaInDance(){
return <><SEO
  title="M.A in Dance | Course Details, Eligibility &amp; Colleges"
  description="Explore M.A in Dance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/ma-in-dance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.A in Dance', 'M.A in Dance course', 'M.A in Dance eligibility', 'M.A in Dance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "M.A in Dance", "url": "/course/fine-arts-performing-arts/ma-in-dance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

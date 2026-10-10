import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInDance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInDance(){
return <><SEO
  title="Ph.D in Dance | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Dance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/phd-in-dance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Dance', 'Ph.D in Dance course', 'Ph.D in Dance eligibility', 'Ph.D in Dance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "Ph.D in Dance", "url": "/course/fine-arts-performing-arts/phd-in-dance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscInDance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscInDance(){
return <><SEO
  title="B.Sc. in Dance | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. in Dance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/fine-arts-performing-arts/bsc-in-dance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. in Dance', 'B.Sc. in Dance course', 'B.Sc. in Dance eligibility', 'B.Sc. in Dance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Fine Arts & Performing Arts Courses", "url": "/course/fine-arts-performing-arts/"}, {"name": "B.Sc. in Dance", "url": "/course/fine-arts-performing-arts/bsc-in-dance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

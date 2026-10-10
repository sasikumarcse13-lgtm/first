import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscBotany.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscBotany(){
return <><SEO
  title="B.Sc. Botany | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Botany course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-botany/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Botany', 'B.Sc. Botany course', 'B.Sc. Botany eligibility', 'B.Sc. Botany colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Botany", "url": "/course/arts-science/bsc-botany/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

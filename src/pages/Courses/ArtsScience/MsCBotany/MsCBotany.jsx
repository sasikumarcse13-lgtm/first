import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCBotany.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCBotany(){
return <><SEO
  title="M.Sc. Botany | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Botany course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-botany/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Botany', 'M.Sc. Botany course', 'M.Sc. Botany eligibility', 'M.Sc. Botany colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Botany", "url": "/course/arts-science/ms-c-botany/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

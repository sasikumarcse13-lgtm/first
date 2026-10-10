import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCAviation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCAviation(){
return <><SEO
  title="M.Sc. Aviation | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Aviation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/aviation/ms-c-aviation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Aviation', 'M.Sc. Aviation course', 'M.Sc. Aviation eligibility', 'M.Sc. Aviation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Aviation Courses", "url": "/course/aviation/"}, {"name": "M.Sc. Aviation", "url": "/course/aviation/ms-c-aviation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

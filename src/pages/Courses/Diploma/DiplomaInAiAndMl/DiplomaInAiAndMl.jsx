import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DiplomaInAiAndMl.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DiplomaInAiAndMl(){
return <><SEO
  title="Diploma in AI &amp; ML | Course Details, Eligibility &amp; Colleges"
  description="Explore Diploma in AI &amp; ML course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/diploma/diploma-in-ai-and-ml/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diploma in AI & ML', 'Diploma in AI & ML course', 'Diploma in AI & ML eligibility', 'Diploma in AI & ML colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Diploma Courses", "url": "/course/diploma/"}, {"name": "Diploma in AI & ML", "url": "/course/diploma/diploma-in-ai-and-ml/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

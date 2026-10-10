import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Diploma.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function Diploma(){
return <><SEO
  title="diploma   ---&gt; | Course Details, Eligibility &amp; Colleges"
  description="Explore diploma   ---&gt; course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/diploma/diploma/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['diploma   --->', 'diploma   ---> course', 'diploma   ---> eligibility', 'diploma   ---> colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Diploma Courses", "url": "/course/diploma/"}, {"name": "diploma   --->", "url": "/course/diploma/diploma/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

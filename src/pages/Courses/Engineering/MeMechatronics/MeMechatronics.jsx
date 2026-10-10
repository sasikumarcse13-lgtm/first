import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MeMechatronics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MeMechatronics(){
return <><SEO
  title="M.E. Mechatronics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.E. Mechatronics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/engineering/me-mechatronics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.E. Mechatronics', 'M.E. Mechatronics course', 'M.E. Mechatronics eligibility', 'M.E. Mechatronics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Engineering Courses", "url": "/course/engineering/"}, {"name": "M.E. Mechatronics", "url": "/course/engineering/me-mechatronics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

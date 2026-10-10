import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCMathematics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCMathematics(){
return <><SEO
  title="M.Sc. Mathematics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Mathematics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-mathematics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Mathematics', 'M.Sc. Mathematics course', 'M.Sc. Mathematics eligibility', 'M.Sc. Mathematics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Mathematics", "url": "/course/arts-science/ms-c-mathematics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

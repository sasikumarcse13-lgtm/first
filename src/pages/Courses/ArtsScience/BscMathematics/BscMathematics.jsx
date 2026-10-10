import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscMathematics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscMathematics(){
return <><SEO
  title="B.Sc. Mathematics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Mathematics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-mathematics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Mathematics', 'B.Sc. Mathematics course', 'B.Sc. Mathematics eligibility', 'B.Sc. Mathematics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Mathematics", "url": "/course/arts-science/bsc-mathematics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

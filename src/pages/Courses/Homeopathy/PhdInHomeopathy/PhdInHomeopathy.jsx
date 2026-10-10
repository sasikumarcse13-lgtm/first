import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PhdInHomeopathy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PhdInHomeopathy(){
return <><SEO
  title="Ph.D in Homeopathy | Course Details, Eligibility &amp; Colleges"
  description="Explore Ph.D in Homeopathy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/homeopathy/phd-in-homeopathy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Ph.D in Homeopathy', 'Ph.D in Homeopathy course', 'Ph.D in Homeopathy eligibility', 'Ph.D in Homeopathy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Homeopathy Courses", "url": "/course/homeopathy/"}, {"name": "Ph.D in Homeopathy", "url": "/course/homeopathy/phd-in-homeopathy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

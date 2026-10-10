import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscHonsAgriculture.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscHonsAgriculture(){
return <><SEO
  title="B.Sc. (Hons.) Agriculture | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. (Hons.) Agriculture course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/bsc-hons-agriculture/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. (Hons.) Agriculture', 'B.Sc. (Hons.) Agriculture course', 'B.Sc. (Hons.) Agriculture eligibility', 'B.Sc. (Hons.) Agriculture colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "B.Sc. (Hons.) Agriculture", "url": "/course/agriculture/bsc-hons-agriculture/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

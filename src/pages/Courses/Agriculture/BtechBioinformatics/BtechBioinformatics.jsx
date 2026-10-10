import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BtechBioinformatics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BtechBioinformatics(){
return <><SEO
  title="B.Tech. Bioinformatics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Tech. Bioinformatics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/agriculture/btech-bioinformatics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Tech. Bioinformatics', 'B.Tech. Bioinformatics course', 'B.Tech. Bioinformatics eligibility', 'B.Tech. Bioinformatics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Agriculture Courses", "url": "/course/agriculture/"}, {"name": "B.Tech. Bioinformatics", "url": "/course/agriculture/btech-bioinformatics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

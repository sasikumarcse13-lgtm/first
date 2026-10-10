import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomHonoursHons.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomHonoursHons(){
return <><SEO
  title="B.Com Honours (Hons) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Honours (Hons) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-honours-hons/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Honours (Hons)', 'B.Com Honours (Hons) course', 'B.Com Honours (Hons) eligibility', 'B.Com Honours (Hons) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Honours (Hons)", "url": "/course/commerce-finance-accounting/bcom-honours-hons/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomGeneral.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomGeneral(){
return <><SEO
  title="B.Com (General) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com (General) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-general/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com (General)', 'B.Com (General) course', 'B.Com (General) eligibility', 'B.Com (General) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com (General)", "url": "/course/commerce-finance-accounting/bcom-general/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

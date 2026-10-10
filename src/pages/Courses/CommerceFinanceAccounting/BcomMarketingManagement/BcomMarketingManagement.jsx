import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomMarketingManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomMarketingManagement(){
return <><SEO
  title="B.Com Marketing Management | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Marketing Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-marketing-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Marketing Management', 'B.Com Marketing Management course', 'B.Com Marketing Management eligibility', 'B.Com Marketing Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Marketing Management", "url": "/course/commerce-finance-accounting/bcom-marketing-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

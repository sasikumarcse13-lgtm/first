import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaFinancialManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaFinancialManagement(){
return <><SEO
  title="MBA Financial Management | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Financial Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mba-financial-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Financial Management', 'MBA Financial Management course', 'MBA Financial Management eligibility', 'MBA Financial Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "MBA Financial Management", "url": "/course/commerce-finance-accounting/mba-financial-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

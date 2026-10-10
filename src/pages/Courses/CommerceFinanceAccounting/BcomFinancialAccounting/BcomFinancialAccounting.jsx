import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomFinancialAccounting.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomFinancialAccounting(){
return <><SEO
  title="B.Com Financial Accounting | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Financial Accounting course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-financial-accounting/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Financial Accounting', 'B.Com Financial Accounting course', 'B.Com Financial Accounting eligibility', 'B.Com Financial Accounting colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Financial Accounting", "url": "/course/commerce-finance-accounting/bcom-financial-accounting/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

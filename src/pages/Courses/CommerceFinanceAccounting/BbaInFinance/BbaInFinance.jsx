import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BbaInFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BbaInFinance(){
return <><SEO
  title="BBA in Finance | Course Details, Eligibility &amp; Colleges"
  description="Explore BBA in Finance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bba-in-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['BBA in Finance', 'BBA in Finance course', 'BBA in Finance eligibility', 'BBA in Finance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "BBA in Finance", "url": "/course/commerce-finance-accounting/bba-in-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

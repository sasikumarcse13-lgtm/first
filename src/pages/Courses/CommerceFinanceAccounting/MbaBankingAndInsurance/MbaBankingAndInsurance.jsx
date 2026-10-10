import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaBankingAndInsurance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaBankingAndInsurance(){
return <><SEO
  title="MBA Banking &amp; Insurance | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Banking &amp; Insurance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mba-banking-and-insurance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Banking & Insurance', 'MBA Banking & Insurance course', 'MBA Banking & Insurance eligibility', 'MBA Banking & Insurance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "MBA Banking & Insurance", "url": "/course/commerce-finance-accounting/mba-banking-and-insurance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

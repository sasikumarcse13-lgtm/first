import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomBankingAndFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomBankingAndFinance(){
return <><SEO
  title="M.Com (Banking &amp; Finance) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com (Banking &amp; Finance) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mcom-banking-and-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com (Banking & Finance)', 'M.Com (Banking & Finance) course', 'M.Com (Banking & Finance) eligibility', 'M.Com (Banking & Finance) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Com (Banking & Finance)", "url": "/course/commerce-finance-accounting/mcom-banking-and-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomAccountingAndFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomAccountingAndFinance(){
return <><SEO
  title="M.Com (Accounting &amp; Finance) | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com (Accounting &amp; Finance) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mcom-accounting-and-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com (Accounting & Finance)', 'M.Com (Accounting & Finance) course', 'M.Com (Accounting & Finance) eligibility', 'M.Com (Accounting & Finance) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Com (Accounting & Finance)", "url": "/course/commerce-finance-accounting/mcom-accounting-and-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

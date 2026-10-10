import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomAccountingAndFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomAccountingAndFinance(){
return <><SEO
  title="B.Com (Accounting &amp; Finance) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com (Accounting &amp; Finance) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-accounting-and-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com (Accounting & Finance)', 'B.Com (Accounting & Finance) course', 'B.Com (Accounting & Finance) eligibility', 'B.Com (Accounting & Finance) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com (Accounting & Finance)", "url": "/course/commerce-finance-accounting/bcom-accounting-and-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

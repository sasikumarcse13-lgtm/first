import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscFinance(){
return <><SEO
  title="B.Sc. Finance | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Finance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bsc-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Finance', 'B.Sc. Finance course', 'B.Sc. Finance eligibility', 'B.Sc. Finance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Sc. Finance", "url": "/course/commerce-finance-accounting/bsc-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

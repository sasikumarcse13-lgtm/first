import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MbaAccounting.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MbaAccounting(){
return <><SEO
  title="MBA Accounting | Course Details, Eligibility &amp; Colleges"
  description="Explore MBA Accounting course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mba-accounting/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MBA Accounting', 'MBA Accounting course', 'MBA Accounting eligibility', 'MBA Accounting colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "MBA Accounting", "url": "/course/commerce-finance-accounting/mba-accounting/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

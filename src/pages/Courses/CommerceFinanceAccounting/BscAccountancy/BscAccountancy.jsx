import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscAccountancy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscAccountancy(){
return <><SEO
  title="B.Sc Accountancy | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc Accountancy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bsc-accountancy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc Accountancy', 'B.Sc Accountancy course', 'B.Sc Accountancy eligibility', 'B.Sc Accountancy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Sc Accountancy", "url": "/course/commerce-finance-accounting/bsc-accountancy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCAccountancy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCAccountancy(){
return <><SEO
  title="M.Sc Accountancy | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc Accountancy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/ms-c-accountancy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc Accountancy', 'M.Sc Accountancy course', 'M.Sc Accountancy eligibility', 'M.Sc Accountancy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Sc Accountancy", "url": "/course/commerce-finance-accounting/ms-c-accountancy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomTaxation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomTaxation(){
return <><SEO
  title="M.Com Taxation | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com Taxation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mcom-taxation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com Taxation', 'M.Com Taxation course', 'M.Com Taxation eligibility', 'M.Com Taxation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Com Taxation", "url": "/course/commerce-finance-accounting/mcom-taxation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomTaxation.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomTaxation(){
return <><SEO
  title="B.Com Taxation | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Taxation course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-taxation/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Taxation', 'B.Com Taxation course', 'B.Com Taxation eligibility', 'B.Com Taxation colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Taxation", "url": "/course/commerce-finance-accounting/bcom-taxation/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

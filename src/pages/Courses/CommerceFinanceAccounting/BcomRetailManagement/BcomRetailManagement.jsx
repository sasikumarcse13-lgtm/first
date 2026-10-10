import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomRetailManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomRetailManagement(){
return <><SEO
  title="B.Com Retail Management | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Retail Management course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-retail-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Retail Management', 'B.Com Retail Management course', 'B.Com Retail Management eligibility', 'B.Com Retail Management colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Retail Management", "url": "/course/commerce-finance-accounting/bcom-retail-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

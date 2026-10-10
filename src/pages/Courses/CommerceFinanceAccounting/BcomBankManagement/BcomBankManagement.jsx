import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomBankManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomBankManagement(){
return <><SEO
  title="B.Com (Bank Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com (Bank Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-bank-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com (Bank Management)', 'B.Com (Bank Management) course', 'B.Com (Bank Management) eligibility', 'B.Com (Bank Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com (Bank Management)", "url": "/course/commerce-finance-accounting/bcom-bank-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

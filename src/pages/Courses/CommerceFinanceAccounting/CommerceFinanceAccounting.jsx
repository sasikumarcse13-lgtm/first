import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './CommerceFinanceAccounting.css'
import SEO from '../../../components/SEO/SEO.jsx'
export default function CommerceFinanceAccounting(){
return <><SEO
  title="Commerce, Finance &amp; Accounting Courses | Colleges, Eligibility &amp; Admissions"
  description="Explore Commerce, Finance &amp; Accounting courses, study options, eligibility and admission information on CollegeShine."
  canonical="/course/commerce-finance-accounting/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Commerce, Finance & Accounting courses', 'Commerce, Finance & Accounting courses in India', 'Commerce, Finance & Accounting course eligibility', 'college admissions']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}]}
/>
      <Navbar/><main className="course-main-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCFinance.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCFinance(){
return <><SEO
  title="M.Sc Finance | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc Finance course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/ms-c-finance/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc Finance', 'M.Sc Finance course', 'M.Sc Finance eligibility', 'M.Sc Finance colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Sc Finance", "url": "/course/commerce-finance-accounting/ms-c-finance/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

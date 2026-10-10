import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './McomInternationalBusiness.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function McomInternationalBusiness(){
return <><SEO
  title="M.Com International Business | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Com International Business course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/mcom-international-business/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Com International Business', 'M.Com International Business course', 'M.Com International Business eligibility', 'M.Com International Business colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "M.Com International Business", "url": "/course/commerce-finance-accounting/mcom-international-business/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

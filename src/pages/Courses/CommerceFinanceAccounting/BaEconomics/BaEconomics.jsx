import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BaEconomics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BaEconomics(){
return <><SEO
  title="B.A. Economics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.A. Economics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/ba-economics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.A. Economics', 'B.A. Economics course', 'B.A. Economics eligibility', 'B.A. Economics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.A. Economics", "url": "/course/commerce-finance-accounting/ba-economics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

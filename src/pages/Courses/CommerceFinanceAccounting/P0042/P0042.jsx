import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './P0042.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomBusinessAdministration(){
return <><SEO
  title="B.Com Business Administration | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com Business Administration course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-business-administration/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com Business Administration', 'B.Com Business Administration course', 'B.Com Business Administration eligibility', 'B.Com Business Administration colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com Business Administration", "url": "/course/commerce-finance-accounting/bcom-business-administration/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

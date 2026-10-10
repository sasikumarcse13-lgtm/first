import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BcomComputerApplications.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BcomComputerApplications(){
return <><SEO
  title="B.Com (Computer Applications) | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Com (Computer Applications) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/commerce-finance-accounting/bcom-computer-applications/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Com (Computer Applications)', 'B.Com (Computer Applications) course', 'B.Com (Computer Applications) eligibility', 'B.Com (Computer Applications) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Commerce, Finance & Accounting Courses", "url": "/course/commerce-finance-accounting/"}, {"name": "B.Com (Computer Applications)", "url": "/course/commerce-finance-accounting/bcom-computer-applications/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

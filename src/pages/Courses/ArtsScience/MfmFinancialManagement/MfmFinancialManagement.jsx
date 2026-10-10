import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MfmFinancialManagement.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MfmFinancialManagement(){
return <><SEO
  title="MFM (Financial Management) | Course Details, Eligibility &amp; Colleges"
  description="Explore MFM (Financial Management) course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/mfm-financial-management/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MFM (Financial Management)', 'MFM (Financial Management) course', 'MFM (Financial Management) eligibility', 'MFM (Financial Management) colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "MFM (Financial Management)", "url": "/course/arts-science/mfm-financial-management/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DnbDiplomateOfNationalBoard.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DnbDiplomateOfNationalBoard(){
return <><SEO
  title="DNB – Diplomate of National Board | Course Details, Eligibility &amp; Colleges"
  description="Explore DNB – Diplomate of National Board course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/mbbs/dnb-diplomate-of-national-board/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['DNB – Diplomate of National Board', 'DNB – Diplomate of National Board course', 'DNB – Diplomate of National Board eligibility', 'DNB – Diplomate of National Board colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "MBBS & Medical Courses", "url": "/course/mbbs/"}, {"name": "DNB – Diplomate of National Board", "url": "/course/mbbs/dnb-diplomate-of-national-board/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

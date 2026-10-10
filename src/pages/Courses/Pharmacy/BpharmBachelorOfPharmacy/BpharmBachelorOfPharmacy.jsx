import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BpharmBachelorOfPharmacy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BpharmBachelorOfPharmacy(){
return <><SEO
  title="B.Pharm — Bachelor of Pharmacy | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Pharm — Bachelor of Pharmacy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/pharmacy/bpharm-bachelor-of-pharmacy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Pharm — Bachelor of Pharmacy', 'B.Pharm — Bachelor of Pharmacy course', 'B.Pharm — Bachelor of Pharmacy eligibility', 'B.Pharm — Bachelor of Pharmacy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Pharmacy Courses", "url": "/course/pharmacy/"}, {"name": "B.Pharm — Bachelor of Pharmacy", "url": "/course/pharmacy/bpharm-bachelor-of-pharmacy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

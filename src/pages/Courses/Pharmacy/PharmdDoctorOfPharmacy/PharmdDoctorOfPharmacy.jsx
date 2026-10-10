import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './PharmdDoctorOfPharmacy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function PharmdDoctorOfPharmacy(){
return <><SEO
  title="Pharm.D — Doctor of Pharmacy | Course Details, Eligibility &amp; Colleges"
  description="Explore Pharm.D — Doctor of Pharmacy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/pharmacy/pharmd-doctor-of-pharmacy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Pharm.D — Doctor of Pharmacy', 'Pharm.D — Doctor of Pharmacy course', 'Pharm.D — Doctor of Pharmacy eligibility', 'Pharm.D — Doctor of Pharmacy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Pharmacy Courses", "url": "/course/pharmacy/"}, {"name": "Pharm.D — Doctor of Pharmacy", "url": "/course/pharmacy/pharmd-doctor-of-pharmacy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

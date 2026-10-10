import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MdHomeopathyPharmacy.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MdHomeopathyPharmacy(){
return <><SEO
  title="MD Homeopathy – Pharmacy | Course Details, Eligibility &amp; Colleges"
  description="Explore MD Homeopathy – Pharmacy course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/homeopathy/md-homeopathy-pharmacy/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['MD Homeopathy – Pharmacy', 'MD Homeopathy – Pharmacy course', 'MD Homeopathy – Pharmacy eligibility', 'MD Homeopathy – Pharmacy colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Homeopathy Courses", "url": "/course/homeopathy/"}, {"name": "MD Homeopathy – Pharmacy", "url": "/course/homeopathy/md-homeopathy-pharmacy/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

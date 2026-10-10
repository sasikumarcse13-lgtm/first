import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCBioinformatics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCBioinformatics(){
return <><SEO
  title="M.Sc. Bioinformatics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Bioinformatics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-bioinformatics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Bioinformatics', 'M.Sc. Bioinformatics course', 'M.Sc. Bioinformatics eligibility', 'M.Sc. Bioinformatics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Bioinformatics", "url": "/course/allied-health-science/ms-c-bioinformatics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

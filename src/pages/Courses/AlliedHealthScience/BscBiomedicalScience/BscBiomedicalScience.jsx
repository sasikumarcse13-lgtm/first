import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscBiomedicalScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscBiomedicalScience(){
return <><SEO
  title="B.Sc. Biomedical Science | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Biomedical Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/bsc-biomedical-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Biomedical Science', 'B.Sc. Biomedical Science course', 'B.Sc. Biomedical Science eligibility', 'B.Sc. Biomedical Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "B.Sc. Biomedical Science", "url": "/course/allied-health-science/bsc-biomedical-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

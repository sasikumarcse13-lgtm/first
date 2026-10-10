import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCNeuroscience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCNeuroscience(){
return <><SEO
  title="M.Sc. Neuroscience | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Neuroscience course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/allied-health-science/ms-c-neuroscience/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Neuroscience', 'M.Sc. Neuroscience course', 'M.Sc. Neuroscience eligibility', 'M.Sc. Neuroscience colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Allied Health Science Courses", "url": "/course/allied-health-science/"}, {"name": "M.Sc. Neuroscience", "url": "/course/allied-health-science/ms-c-neuroscience/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

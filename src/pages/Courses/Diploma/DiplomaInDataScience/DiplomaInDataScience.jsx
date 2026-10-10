import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './DiplomaInDataScience.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function DiplomaInDataScience(){
return <><SEO
  title="Diploma in Data Science | Course Details, Eligibility &amp; Colleges"
  description="Explore Diploma in Data Science course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/diploma/diploma-in-data-science/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['Diploma in Data Science', 'Diploma in Data Science course', 'Diploma in Data Science eligibility', 'Diploma in Data Science colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Diploma Courses", "url": "/course/diploma/"}, {"name": "Diploma in Data Science", "url": "/course/diploma/diploma-in-data-science/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

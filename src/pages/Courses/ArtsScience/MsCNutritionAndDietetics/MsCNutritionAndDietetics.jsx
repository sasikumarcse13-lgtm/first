import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './MsCNutritionAndDietetics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function MsCNutritionAndDietetics(){
return <><SEO
  title="M.Sc. Nutrition &amp; Dietetics | Course Details, Eligibility &amp; Colleges"
  description="Explore M.Sc. Nutrition &amp; Dietetics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/ms-c-nutrition-and-dietetics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['M.Sc. Nutrition & Dietetics', 'M.Sc. Nutrition & Dietetics course', 'M.Sc. Nutrition & Dietetics eligibility', 'M.Sc. Nutrition & Dietetics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "M.Sc. Nutrition & Dietetics", "url": "/course/arts-science/ms-c-nutrition-and-dietetics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

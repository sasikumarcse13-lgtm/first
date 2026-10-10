import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './BscNutritionAndDietetics.css'
import SEO from '../../../../components/SEO/SEO.jsx'
export default function BscNutritionAndDietetics(){
return <><SEO
  title="B.Sc. Nutrition &amp; Dietetics | Course Details, Eligibility &amp; Colleges"
  description="Explore B.Sc. Nutrition &amp; Dietetics course details, eligibility, duration, admissions and related colleges on CollegeShine."
  canonical="/course/arts-science/bsc-nutrition-and-dietetics/"
  noindex={true}
  pageType="course"
  searchIntent="informational"
  keywords={['B.Sc. Nutrition & Dietetics', 'B.Sc. Nutrition & Dietetics course', 'B.Sc. Nutrition & Dietetics eligibility', 'B.Sc. Nutrition & Dietetics colleges']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Arts & Science Courses", "url": "/course/arts-science/"}, {"name": "B.Sc. Nutrition & Dietetics", "url": "/course/arts-science/bsc-nutrition-and-dietetics/"}]}
/>
      <Navbar/><main className="course-detail-page"></main><Footer/></>}

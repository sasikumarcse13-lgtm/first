import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { ABROAD_ADMISSION_ROUTES } from '../../../data/abroadAdmissionRoutes'
import './AbroadAdmission.css'
import SEO from '../../../components/SEO/SEO.jsx'

export default function AbroadAdmission() {
return (
    <>
      <SEO
  title="Study Abroad Admission | CollegeShine"
  description="Explore study abroad admission guidance, country options, application support and international education information with CollegeShine."
  canonical="/services/abroad-admission/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study abroad', 'abroad admission', 'study abroad guidance', 'international education']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Services", "url": "/services/"}, {"name": "Study Abroad Admission", "url": "/services/abroad-admission/"}]}
/>
      <Navbar />
      <main className="abroad-admission-page">
        <div className="abroad-admission-inner">
          <h1>Abroad Admissions</h1>
          <div className="abroad-admission-grid">
            {ABROAD_ADMISSION_ROUTES.links.map((country) => (
              <a className="abroad-admission-card" href={country.path} key={country.path}>
                <h2>{country.label}</h2>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

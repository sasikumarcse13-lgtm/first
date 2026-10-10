import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Russia.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function Russia() {
return (
    <>
      <SEO
  title="Study in Russia for Indian Students | Admission Guide"
  description="Explore study in Russia for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/russia/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in Russia', 'study in Russia for Indian students', 'Russia university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in Russia for Indian Students", "url": "/services/abroad-admission/russia/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>Russia</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

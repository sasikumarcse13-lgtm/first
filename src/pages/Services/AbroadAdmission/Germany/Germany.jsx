import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Germany.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function Germany() {
return (
    <>
      <SEO
  title="Study in Germany for Indian Students | Admission Guide"
  description="Explore study in Germany for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/germany/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in Germany', 'study in Germany for Indian students', 'Germany university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in Germany for Indian Students", "url": "/services/abroad-admission/germany/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>Germany</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

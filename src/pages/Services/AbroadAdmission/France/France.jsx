import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './France.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function France() {
return (
    <>
      <SEO
  title="Study in France for Indian Students | Admission Guide"
  description="Explore study in France for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/france/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in France', 'study in France for Indian students', 'France university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in France for Indian Students", "url": "/services/abroad-admission/france/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>France</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

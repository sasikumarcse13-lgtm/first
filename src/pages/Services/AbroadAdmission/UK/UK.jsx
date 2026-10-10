import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './UK.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function UK() {
return (
    <>
      <SEO
  title="Study in UK for Indian Students | Admission Guide"
  description="Explore study in UK for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/uk/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in UK', 'study in UK for Indian students', 'UK university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in UK for Indian Students", "url": "/services/abroad-admission/uk/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>UK</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

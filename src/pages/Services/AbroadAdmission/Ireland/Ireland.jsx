import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Ireland.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function Ireland() {
return (
    <>
      <SEO
  title="Study in Ireland for Indian Students | Admission Guide"
  description="Explore study in Ireland for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/ireland/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in Ireland', 'study in Ireland for Indian students', 'Ireland university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in Ireland for Indian Students", "url": "/services/abroad-admission/ireland/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>Ireland</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

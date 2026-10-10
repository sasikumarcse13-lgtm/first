import { useEffect } from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import './Australia.css'
import SEO from '../../../../components/SEO/SEO.jsx'

export default function Australia() {
return (
    <>
      <SEO
  title="Study in Australia for Indian Students | Admission Guide"
  description="Explore study in Australia for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance."
  canonical="/services/abroad-admission/australia/"
  noindex={true}
  pageType="service"
  searchIntent="informational"
  keywords={['study in Australia', 'study in Australia for Indian students', 'Australia university admission', 'study abroad']}
  breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Abroad Admission", "url": "/services/abroad-admission/"}, {"name": "Study in Australia for Indian Students", "url": "/services/abroad-admission/australia/"}]}
/>
      <Navbar />
      <main className="abroad-country-page">
        <div className="abroad-country-placeholder">
          <h1>Australia</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

import React from 'react'
import './SponsoredBanner.css'

export default function SponsoredBanner() {
  const openAdvertise = () => { window.location.href = '/advertisement/' }
  return (
    <section className="global-sponsored-ad" aria-label="Sponsored advertisement">
      <div className="global-sponsored-ad__inner" role="link" tabIndex={0} onClick={openAdvertise}
        onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openAdvertise() } }}>
        <span className="global-sponsored-ad__badge">Sponsored</span>
        <div className="global-sponsored-ad__content">
          <h2>PARTNER WITH COLLEGESHINE</h2>
          <p>Promote your college, courses and admissions to students searching for the right education opportunities.</p>
          <div className="global-sponsored-ad__actions">
            <a href="tel:9865553629" className="global-sponsored-ad__button" onClick={(event) => event.stopPropagation()}>📞 Call 98655 53629</a>
            <a href="/advertise-with-us/" className="global-sponsored-ad__button" onClick={(event) => event.stopPropagation()}>Advertise With Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SponsoredBanner from '../../components/Advertisement/SponsoredBanner'
import './Home.css'
import HeroSection from './Components/HeroSection'
import CourseCategoriesSection from './Components/CourseCategoriesSection'
import SmartToolsSection from './Components/SmartToolsSection'
import AboutSection from './Components/AboutSection'
import AdmissionSection from './Components/AdmissionSection'
import FeaturedCollegesSection from './Components/FeaturedCollegesSection'
import StudyAbroadSection from './Components/StudyAbroadSection'
import InsightsSection from './Components/InsightsSection'
import StudentStoriesSection from './Components/StudentStoriesSection'
import PartnerCollegesSection from './Components/PartnerCollegesSection'
import SEO from '../../components/SEO/SEO.jsx'

export default function Home() {
  const bodyRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let loading = null
    let observer = null

    const loadHomeScripts = async () => {
      if (cancelled) return
      if (loading) return loading
      loading = import('./Components/HomeScripts.js').then(({ default: scripts }) => {
        if (cancelled) return
        scripts.forEach((code) => {
          try { new Function(code)() }
          catch (error) { console.error('[CollegeShine Home] optional widget failed:', error) }
        })
      }).catch((error) => {
        console.error('[CollegeShine Home] optional widgets could not load:', error)
      })
      return loading
    }

    // Keep the large legacy enhancement bundle out of the navigation critical
    // path. It is loaded only when the visitor actually interacts with the
    // Home page or reaches the admission widget.
    const interactionEvents = ['pointerdown', 'keydown', 'focusin', 'touchstart']
    const onInteraction = () => loadHomeScripts()
    interactionEvents.forEach((event) => window.addEventListener(event, onInteraction, { once: true, passive: true }))

    const admission = document.getElementById('ng72_form')
    if (admission && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadHomeScripts()
          observer.disconnect()
        }
      }, { rootMargin: '300px' })
      observer.observe(admission)
    }

    return () => {
      cancelled = true
      interactionEvents.forEach((event) => window.removeEventListener(event, onInteraction))
      observer?.disconnect()
    }
  }, [])

  return (
    <>
      <SEO
  title="CollegeShine | Colleges, Courses, Admissions &amp; Scholarships"
  description="Find colleges, courses, admissions, entrance exams, scholarships and career guidance with CollegeShine. Explore options and plan your education journey."
  canonical="/"
  noindex={false}
  pageType="home"
  searchIntent="informational"
  keywords={['CollegeShine', 'colleges', 'courses', 'college admissions', 'entrance exams', 'scholarships', 'career guidance', 'Tamil Nadu education']}
  image="/og-default.png"
  breadcrumbs={[]}
/>
      <Navbar />
      <main className="cs-home-body" ref={bodyRef}>
        <HeroSection />
        <CourseCategoriesSection />
        <SponsoredBanner />
        <SmartToolsSection />
        <AboutSection />
        <AdmissionSection />
        <FeaturedCollegesSection />
        <StudyAbroadSection />
        <InsightsSection />
        <StudentStoriesSection />
        <PartnerCollegesSection />
      </main>
      <Footer />
    </>
  )
}

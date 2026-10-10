import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function OnlineUgPgAdmissions() {
  return (<>
      <SEO
        title="Online UG / PG Admissions | CollegeShine"
        description="Explore CollegeShine online ug / pg admissions and related education guidance."
        canonical="/services/online-ug-pg-admissions/"
        noindex={true}
        pageType="service"
        searchIntent="informational"
        keywords={['Online UG / PG Admissions', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Services", "url": "/services/"}, {"name": "Online UG / PG Admissions", "url": "/services/online-ug-pg-admissions/"}]}
      />
      <PageShell title="Online UG / PG Admissions" path="/services/online-ug-pg-admissions/" section="Our Services" parent={{ title: 'Our Services', path: '/services/' }} />
    </>)
}

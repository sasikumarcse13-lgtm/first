import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function DistanceEducationAdmissions() {
  return (<>
      <SEO
        title="Distance Education Admissions | CollegeShine"
        description="Explore CollegeShine distance education admissions and related education guidance."
        canonical="/services/distance-education-admissions/"
        noindex={true}
        pageType="service"
        searchIntent="informational"
        keywords={['Distance Education Admissions', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Services", "url": "/services/"}, {"name": "Distance Education Admissions", "url": "/services/distance-education-admissions/"}]}
      />
      <PageShell title="Distance Education Admissions" path="/services/distance-education-admissions/" section="Our Services" parent={{ title: 'Our Services', path: '/services/' }} />
    </>)
}

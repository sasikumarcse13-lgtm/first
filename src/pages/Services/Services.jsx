import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function Services() {
  return (<>
      <SEO
        title="Our Services | CollegeShine"
        description="Explore CollegeShine our services and education support options."
        canonical="/services/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['our services', 'education services']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Services", "url": "/services/"}]}
      />
      <PageShell title="Our Services" path="/services/" section="Our Services" />
    </>)
}

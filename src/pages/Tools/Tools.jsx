import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function Tools() {
  return (<>
      <SEO
        title="Our Tools | CollegeShine"
        description="Explore CollegeShine our tools and education support options."
        canonical="/tools/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['our tools', 'education services']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}]}
      />
      <PageShell title="Our Tools" path="/tools/" section="Our Tools" />
    </>)
}

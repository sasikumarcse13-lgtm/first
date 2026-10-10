import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function FeaturedColleges() {
  return (<>
      <SEO
        title="Featured Colleges | CollegeShine"
        description="Explore CollegeShine featured colleges and related education guidance."
        canonical="/tools/featured-colleges/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Featured Colleges', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Featured Colleges", "url": "/tools/featured-colleges/"}]}
      />
      <PageShell title="Featured Colleges" path="/tools/featured-colleges/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

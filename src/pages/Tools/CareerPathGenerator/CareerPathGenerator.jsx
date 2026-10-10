import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CareerPathGenerator() {
  return (<>
      <SEO
        title="Career Path Generator | CollegeShine"
        description="Explore CollegeShine career path generator and related education guidance."
        canonical="/tools/career-path-generator/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Career Path Generator', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Career Path Generator", "url": "/tools/career-path-generator/"}]}
      />
      <PageShell title="Career Path Generator" path="/tools/career-path-generator/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

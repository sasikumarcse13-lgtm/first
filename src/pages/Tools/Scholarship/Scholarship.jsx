import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function Scholarship() {
  return (<>
      <SEO
        title="Apply Scholarship | CollegeShine"
        description="Explore CollegeShine apply scholarship and related education guidance."
        canonical="/tools/apply-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Apply Scholarship', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Apply Scholarship", "url": "/tools/apply-scholarship/"}]}
      />
      <PageShell title="Apply Scholarship" path="/tools/apply-scholarship/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CollegeFeeViewer() {
  return (<>
      <SEO
        title="College Fee viewer | CollegeShine"
        description="Explore CollegeShine college fee viewer and related education guidance."
        canonical="/tools/college-fee-viewer/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['College Fee viewer', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "College Fee viewer", "url": "/tools/college-fee-viewer/"}]}
      />
      <PageShell title="College Fee viewer" path="/tools/college-fee-viewer/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

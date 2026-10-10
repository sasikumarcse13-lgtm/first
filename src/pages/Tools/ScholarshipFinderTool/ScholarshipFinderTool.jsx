import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function ScholarshipFinderTool() {
  return (<>
      <SEO
        title="Scholarship Finder | CollegeShine"
        description="Explore CollegeShine scholarship finder and related education guidance."
        canonical="/tools/scholarship-finder-tool/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Scholarship Finder', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Scholarship Finder", "url": "/tools/scholarship-finder-tool/"}]}
      />
      <PageShell title="Scholarship Finder" path="/tools/scholarship-finder-tool/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

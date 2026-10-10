import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function SkillRecommentationTool() {
  return (<>
      <SEO
        title="Skill Recommendation | CollegeShine"
        description="Explore CollegeShine skill recommendation and related education guidance."
        canonical="/tools/skill-recommentation-tool/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Skill Recommendation', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Skill Recommendation", "url": "/tools/skill-recommentation-tool/"}]}
      />
      <PageShell title="Skill Recommendation" path="/tools/skill-recommentation-tool/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

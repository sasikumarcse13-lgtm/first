import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function AdmissionHelpline() {
  return (<>
      <SEO
        title="Admission HelpLine | CollegeShine"
        description="Explore CollegeShine admission helpline and related education guidance."
        canonical="/tools/admission-helpline/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Admission HelpLine', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Tools", "url": "/tools/"}, {"name": "Admission HelpLine", "url": "/tools/admission-helpline/"}]}
      />
      <PageShell title="Admission HelpLine" path="/tools/admission-helpline/" section="Our Tools" parent={{ title: 'Our Tools', path: '/tools/' }} />
    </>)
}

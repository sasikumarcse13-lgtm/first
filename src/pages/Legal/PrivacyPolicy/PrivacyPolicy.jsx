import PageShell from '../../../components/PageShell/PageShell'
import './PrivacyPolicy.css'
import SEO from '../../../components/SEO/SEO.jsx'

export default function PrivacyPolicy() {
  return (<>
      <SEO
        title="Privacy Policy | CollegeShine"
        description="Read the CollegeShine privacy policy covering website use, information handling and privacy practices."
        canonical="/privacy-policy/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine privacy policy', 'privacy']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Privacy Policy", "url": "/privacy-policy/"}]}
      />
      <PageShell title="Privacy Policy" path="/privacy-policy/" section="Legal" noindex={true} />
    </>)
}

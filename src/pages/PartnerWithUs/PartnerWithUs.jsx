import PageShell from '../../components/PageShell/PageShell'
import './PartnerWithUs.css'
import SEO from '../../components/SEO/SEO.jsx'

export default function PartnerWithUs() {
  return (<>
      <SEO
        title="Partner With CollegeShine | Education Partnerships"
        description="Explore partnership opportunities with CollegeShine for colleges, institutions, education providers and related organizations."
        canonical="/partner-with-us/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine partner', 'education partnerships', 'college partnership']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Partner With CollegeShine", "url": "/partner-with-us/"}]}
      />
      <PageShell title="Partner With Us" path="/partner-with-us/" section="Company" noindex={true} />
    </>)
}

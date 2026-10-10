import PageShell from '../../components/PageShell/PageShell'
import './Advertisement.css'
import SEO from '../../components/SEO/SEO.jsx'

export default function Advertisement() {
  return (<>
      <SEO
        title="Advertise With CollegeShine | Education Advertising"
        description="Learn about advertising opportunities with CollegeShine for education-focused brands, institutions and services."
        canonical="/advertisement/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['advertise with CollegeShine', 'education advertising', 'college advertising']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Advertise With CollegeShine", "url": "/advertisement/"}]}
      />
      <PageShell title="Advertisement" path="/advertisement/" section="Company" noindex={true} />
    </>)
}

import PageShell from '../../../components/PageShell/PageShell'
import './TermsAndConditions.css'
import SEO from '../../../components/SEO/SEO.jsx'

export default function TermsAndConditions() {
  return (<>
      <SEO
        title="Terms &amp; Conditions | CollegeShine"
        description="Read the terms and conditions governing use of the CollegeShine website and its education resources."
        canonical="/terms-and-conditions/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine terms', 'terms and conditions']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Terms & Conditions", "url": "/terms-and-conditions/"}]}
      />
      <PageShell title="Terms & Conditions" path="/terms-and-conditions/" section="Legal" noindex={true} />
    </>)
}

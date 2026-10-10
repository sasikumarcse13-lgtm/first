import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function Scholarships() {
  return (<>
      <SEO
        title="Scholarships | Eligibility, Benefits &amp; Application"
        description="Explore scholarships, eligibility, benefits and application information for students on CollegeShine."
        canonical="/scholarship/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['scholarships', 'scholarship eligibility', 'student financial aid']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}]}
      />
      <PageShell title="Scholarships" path="/scholarship/" section="Scholarships" />
    </>)
}

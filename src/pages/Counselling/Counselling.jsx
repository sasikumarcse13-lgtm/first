import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function Counselling() {
  return (<>
      <SEO
        title="Counselling | College Admission Guidance"
        description="Explore college counselling information, admission processes and guidance on CollegeShine."
        canonical="/counselling/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['college counselling', 'admission counselling', 'college admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}]}
      />
      <PageShell title="Counselling" path="/counselling/" section="Counselling" />
    </>)
}

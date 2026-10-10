import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function AgricultureCounselling() {
  return (<>
      <SEO
        title="Agriculture Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Agriculture Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/agriculture-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Agriculture Counselling', 'Agriculture Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Agriculture Counselling", "url": "/counselling/agriculture-counselling/"}]}
      />
      <PageShell title="Agriculture Counselling" path="/counselling/agriculture-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

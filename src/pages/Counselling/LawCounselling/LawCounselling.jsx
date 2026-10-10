import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function LawCounselling() {
  return (<>
      <SEO
        title="Law Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Law Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/law-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Law Counselling', 'Law Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Law Counselling", "url": "/counselling/law-counselling/"}]}
      />
      <PageShell title="Law Counselling" path="/counselling/law-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function ParamedicalCounselling() {
  return (<>
      <SEO
        title="Paramedical Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Paramedical Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/paramedical-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Paramedical Counselling', 'Paramedical Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Paramedical Counselling", "url": "/counselling/paramedical-counselling/"}]}
      />
      <PageShell title="Paramedical Counselling" path="/counselling/paramedical-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

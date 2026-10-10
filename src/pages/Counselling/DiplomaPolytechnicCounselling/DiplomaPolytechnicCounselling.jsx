import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function DiplomaPolytechnicCounselling() {
  return (<>
      <SEO
        title="Diploma / Polytechnic Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Diploma / Polytechnic Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/diploma-polytechnic-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Diploma / Polytechnic Counselling', 'Diploma / Polytechnic Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Diploma / Polytechnic Counselling", "url": "/counselling/diploma-polytechnic-counselling/"}]}
      />
      <PageShell title="Diploma / Polytechnic Counselling" path="/counselling/diploma-polytechnic-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

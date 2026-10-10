import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function ArtsAndScienceCounselling() {
  return (<>
      <SEO
        title="Arts &amp; Science Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Arts &amp; Science Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/arts-and-science-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Arts & Science Counselling', 'Arts & Science Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Arts & Science Counselling", "url": "/counselling/arts-and-science-counselling/"}]}
      />
      <PageShell title="Arts & Science Counselling" path="/counselling/arts-and-science-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

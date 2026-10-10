import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function AmeCet() {
  return (<>
      <SEO
        title="AME CET | Exam Details, Eligibility &amp; Admission"
        description="Explore AME CET exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/ame-cet/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['AME CET', 'AME CET exam', 'AME CET eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "AME CET", "url": "/entrance-exam/ame-cet/"}]}
      />
      <PageShell title="AME CET" path="/entrance-exam/ame-cet/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

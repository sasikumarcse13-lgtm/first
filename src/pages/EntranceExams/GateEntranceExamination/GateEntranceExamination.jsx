import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function GateEntranceExamination() {
  return (<>
      <SEO
        title="GATE | Exam Details, Eligibility &amp; Admission"
        description="Explore GATE exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/gate-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['GATE', 'GATE exam', 'GATE eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "GATE", "url": "/entrance-exam/gate-entrance-examination/"}]}
      />
      <PageShell title="GATE" path="/entrance-exam/gate-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

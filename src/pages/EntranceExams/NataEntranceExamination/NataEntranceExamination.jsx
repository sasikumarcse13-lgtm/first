import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function NataEntranceExamination() {
  return (<>
      <SEO
        title="NATA | Exam Details, Eligibility &amp; Admission"
        description="Explore NATA exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/nata-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['NATA', 'NATA exam', 'NATA eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "NATA", "url": "/entrance-exam/nata-entrance-examination/"}]}
      />
      <PageShell title="NATA" path="/entrance-exam/nata-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

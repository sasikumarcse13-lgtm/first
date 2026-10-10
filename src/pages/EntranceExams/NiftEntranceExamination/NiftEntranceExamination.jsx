import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function NiftEntranceExamination() {
  return (<>
      <SEO
        title="NIFT | Exam Details, Eligibility &amp; Admission"
        description="Explore NIFT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/nift-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['NIFT', 'NIFT exam', 'NIFT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "NIFT", "url": "/entrance-exam/nift-entrance-examination/"}]}
      />
      <PageShell title="NIFT" path="/entrance-exam/nift-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

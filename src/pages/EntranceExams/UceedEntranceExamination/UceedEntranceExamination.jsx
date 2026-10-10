import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function UceedEntranceExamination() {
  return (<>
      <SEO
        title="UCEED | Exam Details, Eligibility &amp; Admission"
        description="Explore UCEED exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/uceed-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['UCEED', 'UCEED exam', 'UCEED eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "UCEED", "url": "/entrance-exam/uceed-entrance-examination/"}]}
      />
      <PageShell title="UCEED" path="/entrance-exam/uceed-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CeedEntranceExamination() {
  return (<>
      <SEO
        title="CEED | Exam Details, Eligibility &amp; Admission"
        description="Explore CEED exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/ceed-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CEED', 'CEED exam', 'CEED eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "CEED", "url": "/entrance-exam/ceed-entrance-examination/"}]}
      />
      <PageShell title="CEED" path="/entrance-exam/ceed-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

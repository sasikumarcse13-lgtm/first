import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function MatEntranceExamination() {
  return (<>
      <SEO
        title="MAT | Exam Details, Eligibility &amp; Admission"
        description="Explore MAT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/mat-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['MAT', 'MAT exam', 'MAT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "MAT", "url": "/entrance-exam/mat-entrance-examination/"}]}
      />
      <PageShell title="MAT" path="/entrance-exam/mat-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

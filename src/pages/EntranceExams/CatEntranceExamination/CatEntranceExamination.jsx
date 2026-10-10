import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CatEntranceExamination() {
  return (<>
      <SEO
        title="CAT | Exam Details, Eligibility &amp; Admission"
        description="Explore CAT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/cat-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CAT', 'CAT exam', 'CAT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "CAT", "url": "/entrance-exam/cat-entrance-examination/"}]}
      />
      <PageShell title="CAT" path="/entrance-exam/cat-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

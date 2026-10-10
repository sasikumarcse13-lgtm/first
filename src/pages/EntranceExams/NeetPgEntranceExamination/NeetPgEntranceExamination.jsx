import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function NeetPgEntranceExamination() {
  return (<>
      <SEO
        title="NEET - PG | Exam Details, Eligibility &amp; Admission"
        description="Explore NEET - PG exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/neet-pg-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['NEET - PG', 'NEET - PG exam', 'NEET - PG eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "NEET - PG", "url": "/entrance-exam/neet-pg-entrance-examination/"}]}
      />
      <PageShell title="NEET - PG" path="/entrance-exam/neet-pg-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

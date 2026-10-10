import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function ClatEntranceExamination() {
  return (<>
      <SEO
        title="CLAT | Exam Details, Eligibility &amp; Admission"
        description="Explore CLAT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/clat-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CLAT', 'CLAT exam', 'CLAT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "CLAT", "url": "/entrance-exam/clat-entrance-examination/"}]}
      />
      <PageShell title="CLAT" path="/entrance-exam/clat-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

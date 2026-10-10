import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CmatEntranceExamination() {
  return (<>
      <SEO
        title="CMAT | Exam Details, Eligibility &amp; Admission"
        description="Explore CMAT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/cmat-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CMAT', 'CMAT exam', 'CMAT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "CMAT", "url": "/entrance-exam/cmat-entrance-examination/"}]}
      />
      <PageShell title="CMAT" path="/entrance-exam/cmat-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

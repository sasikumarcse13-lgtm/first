import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function CuetEntranceExaminationUg() {
  return (<>
      <SEO
        title="CUET | Exam Details, Eligibility &amp; Admission"
        description="Explore CUET exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/cuet-entrance-examination-ug/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CUET', 'CUET exam', 'CUET eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "CUET", "url": "/entrance-exam/cuet-entrance-examination-ug/"}]}
      />
      <PageShell title="CUET" path="/entrance-exam/cuet-entrance-examination-ug/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

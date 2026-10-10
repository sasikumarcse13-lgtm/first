import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function NeetEntranceExaminationUg() {
  return (<>
      <SEO
        title="NEET - UG | Exam Details, Eligibility &amp; Admission"
        description="Explore NEET - UG exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/neet-entrance-examination-ug/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['NEET - UG', 'NEET - UG exam', 'NEET - UG eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "NEET - UG", "url": "/entrance-exam/neet-entrance-examination-ug/"}]}
      />
      <PageShell title="NEET - UG" path="/entrance-exam/neet-entrance-examination-ug/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

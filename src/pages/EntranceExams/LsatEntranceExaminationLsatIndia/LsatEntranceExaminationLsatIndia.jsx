import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function LsatEntranceExaminationLsatIndia() {
  return (<>
      <SEO
        title="LSAT | Exam Details, Eligibility &amp; Admission"
        description="Explore LSAT exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/lsat-entrance-examination-lsat-india/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['LSAT', 'LSAT exam', 'LSAT eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "LSAT", "url": "/entrance-exam/lsat-entrance-examination-lsat-india/"}]}
      />
      <PageShell title="LSAT" path="/entrance-exam/lsat-entrance-examination-lsat-india/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

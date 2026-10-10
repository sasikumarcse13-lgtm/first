import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function JeeMainEntranceExamination() {
  return (<>
      <SEO
        title="JEE Main | Exam Details, Eligibility &amp; Admission"
        description="Explore JEE Main exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/jee-main-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['JEE Main', 'JEE Main exam', 'JEE Main eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "JEE Main", "url": "/entrance-exam/jee-main-entrance-examination/"}]}
      />
      <PageShell title="JEE Main" path="/entrance-exam/jee-main-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

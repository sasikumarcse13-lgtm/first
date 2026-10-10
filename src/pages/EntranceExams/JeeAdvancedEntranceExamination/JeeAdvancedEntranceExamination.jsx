import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function JeeAdvancedEntranceExamination() {
  return (<>
      <SEO
        title="JEE Advanced | Exam Details, Eligibility &amp; Admission"
        description="Explore JEE Advanced exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/jee-advanced-entrance-examination/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['JEE Advanced', 'JEE Advanced exam', 'JEE Advanced eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "JEE Advanced", "url": "/entrance-exam/jee-advanced-entrance-examination/"}]}
      />
      <PageShell title="JEE Advanced" path="/entrance-exam/jee-advanced-entrance-examination/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

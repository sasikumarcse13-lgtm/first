import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function AiimsJipmerViaNeet() {
  return (<>
      <SEO
        title="AIIMS &amp; JIPMER | Exam Details, Eligibility &amp; Admission"
        description="Explore AIIMS &amp; JIPMER exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/aiims-jipmer-via-neet/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['AIIMS & JIPMER', 'AIIMS & JIPMER exam', 'AIIMS & JIPMER eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "AIIMS & JIPMER", "url": "/entrance-exam/aiims-jipmer-via-neet/"}]}
      />
      <PageShell title="AIIMS & JIPMER" path="/entrance-exam/aiims-jipmer-via-neet/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}

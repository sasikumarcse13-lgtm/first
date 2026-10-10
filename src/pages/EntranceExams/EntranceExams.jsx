import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function EntranceExams() {
  return (<>
      <SEO
        title="Entrance Exams | Eligibility, Dates &amp; Admission Guidance"
        description="Explore entrance exams, eligibility, dates, application information and admission guidance on CollegeShine."
        canonical="/entrance-exam/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['entrance exams', 'entrance exam eligibility', 'entrance exam dates']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}]}
      />
      <PageShell title="Entrance Exams" path="/entrance-exam/" section="Entrance Exams" />
    </>)
}

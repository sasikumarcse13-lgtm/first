import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function TeacherEducationCounselling() {
  return (<>
      <SEO
        title="Teacher Education Counselling | Dates, Process &amp; Admission Guidance"
        description="Explore Teacher Education Counselling dates, process, eligibility and college admission counselling information on CollegeShine."
        canonical="/counselling/teacher-education-counselling/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Teacher Education Counselling', 'Teacher Education Counselling counselling', 'admission counselling', 'college admission']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Counselling", "url": "/counselling/"}, {"name": "Teacher Education Counselling", "url": "/counselling/teacher-education-counselling/"}]}
      />
      <PageShell title="Teacher Education Counselling" path="/counselling/teacher-education-counselling/" section="Counselling" parent={{ title: 'Counselling', path: '/counselling/' }} />
    </>)
}

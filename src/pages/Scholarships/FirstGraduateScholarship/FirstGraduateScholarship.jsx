import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function FirstGraduateScholarship() {
  return (<>
      <SEO
        title="First Graduate Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore First Graduate Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/first-graduate-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['First Graduate Scholarship', 'First Graduate Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "First Graduate Scholarship", "url": "/scholarship/first-graduate-scholarship/"}]}
      />
      <PageShell title="First Graduate Scholarship" path="/scholarship/first-graduate-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

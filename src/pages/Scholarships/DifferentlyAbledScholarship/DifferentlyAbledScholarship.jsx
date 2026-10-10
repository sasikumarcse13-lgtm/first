import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function DifferentlyAbledScholarship() {
  return (<>
      <SEO
        title="Differently-Abled Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore Differently-Abled Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/differently-abled-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Differently-Abled Scholarship', 'Differently-Abled Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "Differently-Abled Scholarship", "url": "/scholarship/differently-abled-scholarship/"}]}
      />
      <PageShell title="Differently-Abled Scholarship" path="/scholarship/differently-abled-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

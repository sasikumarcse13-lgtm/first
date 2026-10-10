import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function SportsScholarship() {
  return (<>
      <SEO
        title="Sports Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore Sports Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/sports-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Sports Scholarship', 'Sports Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "Sports Scholarship", "url": "/scholarship/sports-scholarship/"}]}
      />
      <PageShell title="Sports Scholarship" path="/scholarship/sports-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

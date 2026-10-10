import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function SingleParentOrOrphanScholarship() {
  return (<>
      <SEO
        title="Single Parent/Orphan Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore Single Parent/Orphan Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/single-parent-or-orphan-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Single Parent/Orphan Scholarship', 'Single Parent/Orphan Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "Single Parent/Orphan Scholarship", "url": "/scholarship/single-parent-or-orphan-scholarship/"}]}
      />
      <PageShell title="Single Parent/Orphan Scholarship" path="/scholarship/single-parent-or-orphan-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

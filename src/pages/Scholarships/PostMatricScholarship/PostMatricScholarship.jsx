import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function PostMatricScholarship() {
  return (<>
      <SEO
        title="Post-Matric Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore Post-Matric Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/post-matric-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['Post-Matric Scholarship', 'Post-Matric Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "Post-Matric Scholarship", "url": "/scholarship/post-matric-scholarship/"}]}
      />
      <PageShell title="Post-Matric Scholarship" path="/scholarship/post-matric-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

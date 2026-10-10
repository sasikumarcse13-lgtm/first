import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function BcMbcDncScholarship() {
  return (<>
      <SEO
        title="BC / MBC / DNC Scholarship | Eligibility, Benefits &amp; Application"
        description="Explore BC / MBC / DNC Scholarship eligibility, benefits, application information and student scholarship guidance on CollegeShine."
        canonical="/scholarship/bc-mbc-dnc-scholarship/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['BC / MBC / DNC Scholarship', 'BC / MBC / DNC Scholarship scholarship', 'scholarship eligibility', 'student scholarship']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Scholarships", "url": "/scholarship/"}, {"name": "BC / MBC / DNC Scholarship", "url": "/scholarship/bc-mbc-dnc-scholarship/"}]}
      />
      <PageShell title="BC / MBC / DNC Scholarship" path="/scholarship/bc-mbc-dnc-scholarship/" section="Scholarships" parent={{ title: 'Scholarships', path: '/scholarship/' }} />
    </>)
}

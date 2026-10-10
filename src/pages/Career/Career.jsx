import PageShell from '../../components/PageShell/PageShell'
import './Career.css'
import SEO from '../../components/SEO/SEO.jsx'

export default function Career() {
  return (<>
      <SEO
        title="Careers at CollegeShine | Join Our Team"
        description="Explore career opportunities with CollegeShine and learn how you can contribute to an education and college discovery platform."
        canonical="/career/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine careers', 'education jobs', 'career opportunities']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Careers at CollegeShine", "url": "/career/"}]}
      />
      <PageShell title="Career" path="/career/" section="Company" noindex={true} />
    </>)
}

import PageShell from '../../components/PageShell/PageShell'
import './About.css'
import SEO from '../../components/SEO/SEO.jsx'

export default function About() {
  return (<>
      <SEO
        title="About CollegeShine | Education &amp; College Discovery Platform"
        description="Learn about CollegeShine, an education platform for exploring colleges, courses, admissions, scholarships and career opportunities."
        canonical="/about/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine about', 'education platform', 'college discovery']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "About CollegeShine", "url": "/about/"}]}
      />
      <PageShell title="About Us" path="/about/" section="Company" noindex={true} />
    </>)
}

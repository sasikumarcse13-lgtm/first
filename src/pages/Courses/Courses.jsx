import PageShell from '../../components/PageShell/PageShell'
import SEO from '../../components/SEO/SEO.jsx'

export default function Courses() {
  return (<>
      <SEO
        title="Courses | Degree, Diploma &amp; Professional Courses"
        description="Explore courses by category, including engineering, medicine, arts and science, management, diploma and other study options."
        canonical="/course/"
        noindex={true}
        pageType="collection"
        searchIntent="informational"
        keywords={['courses', 'degree courses', 'professional courses', 'courses after 12th']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Courses", "url": "/course/"}]}
      />
      <PageShell title="Courses" path="/course/" section="Courses" noindex={true} />
    </>)
}

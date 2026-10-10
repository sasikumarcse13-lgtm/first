import PageShell from '../../components/PageShell/PageShell'
import './Contact.css'
import SEO from '../../components/SEO/SEO.jsx'

export default function Contact() {
  return (<>
      <SEO
        title="Contact CollegeShine | Education &amp; Admission Support"
        description="Contact CollegeShine for questions about colleges, courses, admissions, scholarships, counselling and education services."
        canonical="/contact/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['contact CollegeShine', 'education support', 'admission help']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Contact CollegeShine", "url": "/contact/"}]}
      />
      <PageShell title="Contact" path="/contact/" section="Company" noindex={true} />
    </>)
}

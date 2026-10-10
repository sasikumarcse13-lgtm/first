import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function DirectCollegeAdmissionIndia() {
  return (<>
      <SEO
        title="Direct College Admissions | CollegeShine"
        description="Explore CollegeShine direct college admissions and related education guidance."
        canonical="/services/direct-college-admission-india/"
        noindex={true}
        pageType="service"
        searchIntent="informational"
        keywords={['Direct College Admissions', 'education service', 'admission guidance']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Our Services", "url": "/services/"}, {"name": "Direct College Admissions", "url": "/services/direct-college-admission-india/"}]}
      />
      <PageShell title="Direct College Admissions" path="/services/direct-college-admission-india/" section="Our Services" parent={{ title: 'Our Services', path: '/services/' }} />
    </>)
}

import PageShell from '../../../components/PageShell/PageShell'
import './Sitemap.css'
import SEO from '../../../components/SEO/SEO.jsx'

export default function Sitemap() {
  return (<>
      <SEO
        title="HTML Sitemap | CollegeShine"
        description="Browse the CollegeShine HTML sitemap to discover the main sections and pages of the website."
        canonical="/sitemap/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['CollegeShine sitemap', 'HTML sitemap', 'website pages']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "HTML Sitemap", "url": "/sitemap/"}]}
      />
      <PageShell title="Sitemap" path="/sitemap/" section="Legal" noindex={true} />
    </>)
}

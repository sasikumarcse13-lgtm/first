import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './PageShell.css'

export default function PageShell({ title, path, section }) {
  return (
    <>
      <Navbar />
      <main className="page-shell" data-route={path} aria-labelledby="page-shell-title">
        {section && <span className="page-shell__section">{section}</span>}
        <h1 id="page-shell-title" className="seo-placeholder-title">{title}</h1>
      </main>
      <Footer />
    </>
  )
}

import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { COURSE_CATEGORIES, COURSE_ROUTES, COURSE_ALIASES } from './data/courseRoutes'
import { SECTION_ROUTES, SECTION_ALIASES } from './data/sectionRoutes'
import { SECTION_COMPONENT_PATHS } from './data/sectionComponentPaths'
import { ABROAD_ADMISSION_ROUTES } from './data/abroadAdmissionRoutes'
import { LEGACY_REDIRECTS } from './data/legacyRedirects'
import { normalizePath } from './lib/seo'
import HomePage from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import BlogDetail from './pages/Blog/BlogDetail'
import BlogAdmin from './pages/Blog/BlogAdmin'
import CollegeRouter from './CollegeRouter'

// IMPORTANT: page modules are lazy-loaded. The previous project eagerly imported
// hundreds of course/section pages, so an error in any unrelated page could make
// the Home page render as a blank screen. Home is now isolated from those pages.
const PAGE_MODULES = import.meta.glob('./pages/**/*.jsx')

const lazyCache = new Map()
function lazyPage(path) {
  if (!PAGE_MODULES[path]) return null
  if (!lazyCache.has(path)) lazyCache.set(path, React.lazy(PAGE_MODULES[path]))
  return lazyCache.get(path)
}

const TOP_PAGE_PATHS = {
  '/about/': './pages/About/About.jsx',
  '/contact/': './pages/Contact/Contact.jsx',
  '/career/': './pages/Career/Career.jsx',
  '/advertisement/': './pages/Advertisement/Advertisement.jsx',
  '/partner-with-us/': './pages/PartnerWithUs/PartnerWithUs.jsx',
  '/privacy-policy/': './pages/Legal/PrivacyPolicy/PrivacyPolicy.jsx',
  '/terms-and-conditions/': './pages/Legal/TermsAndConditions/TermsAndConditions.jsx',
  '/sitemap/': './pages/Legal/Sitemap/Sitemap.jsx',
  '/blog/': './pages/Blog/Blog.jsx',
}

const ABROAD_PAGE_PATHS = {
  '/services/abroad-admission/': './pages/Services/AbroadAdmission/AbroadAdmission.jsx',
  '/services/abroad-admission/france/': './pages/Services/AbroadAdmission/France/France.jsx',
  '/services/abroad-admission/germany/': './pages/Services/AbroadAdmission/Germany/Germany.jsx',
  '/services/abroad-admission/australia/': './pages/Services/AbroadAdmission/Australia/Australia.jsx',
  '/services/abroad-admission/uk/': './pages/Services/AbroadAdmission/UK/UK.jsx',
  '/services/abroad-admission/ireland/': './pages/Services/AbroadAdmission/Ireland/Ireland.jsx',
  '/services/abroad-admission/russia/': './pages/Services/AbroadAdmission/Russia/Russia.jsx',
}

function sectionPagePath(sectionKey, componentName) {
  return SECTION_COMPONENT_PATHS[`${sectionKey}:${componentName}`] || `./pages/${sectionKey}/${componentName}/${componentName}.jsx`
}

function sectionHubPath(sectionKey) {
  return `./pages/${sectionKey}/${sectionKey}.jsx`
}

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | CollegeShine'
    const robots = document.head.querySelector('meta[name="robots"]')
    if (robots) robots.setAttribute('content', 'noindex,follow')
  }, [])
  return (
    <main style={{ minHeight: '45vh', display: 'grid', placeItems: 'center', padding: 40 }}>
      <div><h1>Page Not Found</h1><p>The requested CollegeShine page could not be found.</p></div>
    </main>
  )
}

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 32, fontFamily: 'Arial,sans-serif', background: '#f8fafc' }}>
        <div style={{ maxWidth: 760, width: '100%', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: 28, boxShadow: '0 12px 40px rgba(0,0,0,.08)' }}>
          <h1 style={{ marginTop: 0 }}>CollegeShine page error</h1>
          <p>The page could not be rendered. The exact error is shown below so it can be fixed instead of displaying a blank screen.</p>
          <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', background: '#f3f4f6', padding: 16, borderRadius: 10 }}>{String(this.state.error?.stack || this.state.error)}</pre>
        </div>
      </main>
    )
  }
}

function Loading() {
  return <div style={{ minHeight: '30vh', display: 'grid', placeItems: 'center', fontFamily: 'Arial,sans-serif' }}>Loading CollegeShine…</div>
}

function RenderLazy({ path }) {
  const Component = lazyPage(path)
  if (!Component) return <NotFound />
  return <Suspense fallback={<Loading />}><Component /></Suspense>
}

function findRoute(path) {
  // The SQL-backed college directory is mounted inside the main CollegeShine
  // application without replacing the existing blog/course page architecture.
  if (path === '/colleges/' || path.startsWith('/colleges/') || path === '/districts/' || path.startsWith('/districts/') || path === '/search/' || path.startsWith('/search/')) {
    return { type: 'collegeApp' }
  }
  if (LEGACY_REDIRECTS[path]) return { type: 'redirect', target: LEGACY_REDIRECTS[path] }
  if (path === '/') return { type: 'home' }

  if (path === '/admin/blogs/') return { type: 'blogAdmin' }
  if (path.startsWith('/blog/') && path !== '/blog/') return { type: 'blogDetail', slug: path.slice('/blog/'.length).replace(/\/$/, '') }
  if (TOP_PAGE_PATHS[path]) return { type: 'topPage', path: TOP_PAGE_PATHS[path] }
  if (path === '/course/') return { type: 'coursesHub' }

  if (path === ABROAD_ADMISSION_ROUTES.path) return { type: 'abroadHub', path: ABROAD_PAGE_PATHS[path] }
  const abroadCountry = ABROAD_ADMISSION_ROUTES.links.find(item => item.path === path)
  if (abroadCountry) return { type: 'abroadCountry', path: ABROAD_PAGE_PATHS[path] }


  const category = COURSE_CATEGORIES.find(item => item.path === path)
  if (category) return { type: 'coursePage', path: category.component }

  const course = COURSE_ROUTES.find(item => item.path === path)
  if (course) return { type: 'coursePage', path: course.component }

  const alias = COURSE_ALIASES.find(item => item.path === path)
  if (alias) {
    const target = COURSE_ROUTES.find(item => item.path === alias.target)
    if (target) return { type: 'coursePage', path: target.component, alias: true }
  }

  for (const section of SECTION_ROUTES) {
    if (section.path === path) return { type: 'sectionHub', path: sectionHubPath(section.key) }
    const child = section.links.find(item => item.path === path)
    if (child) return { type: 'sectionPage', path: sectionPagePath(section.key, child.component) }
  }

  const sectionAlias = SECTION_ALIASES.find(item => item.path === path)
  if (sectionAlias) {
    const section = SECTION_ROUTES.find(item => item.path === sectionAlias.target)
    if (section) return { type: 'sectionHub', path: sectionHubPath(section.key), alias: true }
  }

  return null
}

function AppContent() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const updateMainLandmark = () => {
      const main = document.querySelector('main')
      if (main && !main.id) main.id = 'main-content'
    }
    const frame = window.requestAnimationFrame(updateMainLandmark)
    return () => window.cancelAnimationFrame(frame)
  }, [path])

  const route = useMemo(() => findRoute(path), [path])

  if (!route) return <NotFound />
  if (route.type === 'collegeApp') return <CollegeRouter />

  if (route.type === 'redirect') {
    window.history.replaceState({}, '', route.target)
    queueMicrotask(() => setPath(route.target))
    return <Loading />
  }

  // Home is intentionally a direct import: it should never depend on the
  // hundreds of course/section modules loading successfully.
  if (route.type === 'home') return <HomePage />
  if (route.type === 'blogDetail') return <BlogDetail slug={route.slug} />
  if (route.type === 'blogAdmin') return <BlogAdmin />
  if (route.type === 'coursesHub') return <Courses />
  return <RenderLazy path={route.path} />
}


export default function App() {
  return <AppErrorBoundary><AppContent /></AppErrorBoundary>
}

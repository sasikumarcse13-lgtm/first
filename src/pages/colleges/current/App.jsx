import { useEffect, useState } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import DirectoryPage from './pages/Colleges/DirectoryPage.jsx'
import HomePage from './pages/Home/Home.jsx'
import CollegeDetailPage from './pages/CollegeDetail/CollegeDetailPage.jsx'
import DistrictsPage from './pages/Districts/DistrictsPage.jsx'
import SearchPage from './pages/Search/SearchPage.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Loading from './components/Loading/Loading.jsx'
import { getCollege, getPrerenderedCollege } from './data.js'

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/colleges/" element={<DirectoryPage />} />

      {/* SEO directory taxonomy routes. */}
      <Route path="/colleges/all/" element={<Navigate to="/colleges/" replace />} />
      <Route path="/colleges/all/ownership/:ownership/" element={<OwnershipAllRedirect />} />
      <Route path="/colleges/all/:districtSlug/" element={<AllDistrictRedirect />} />
      <Route path="/colleges/all/:districtSlug/:ownership/" element={<AllDistrictOwnershipRedirect />} />
      <Route path="/colleges/ownership/:ownership/" element={<DirectoryPage />} />
      <Route path="/colleges/:category/ownership/:ownership/" element={<DirectoryPage />} />
      <Route path="/colleges/:slug/" element={<CollegeOrDirectoryRoute />} />
      <Route path="/colleges/:category/:districtSlug/:ownership/" element={<DirectoryPage />} />
      <Route path="/colleges/:category/:districtSlug/" element={<DirectoryPage />} />
      <Route path="/districts/:districtSlug/ownership/:ownership/" element={<DirectoryPage />} />
      <Route path="/districts/:districtSlug/" element={<DirectoryPage />} />
      <Route path="/districts/" element={<DistrictsPage />} />
      <Route path="/search/" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
}

function CollegeOrDirectoryRoute() {
  const { slug } = useParams()
  const [state, setState] = useState(() => {
    const prerendered = getPrerenderedCollege(slug)
    return prerendered ? { loading: false, college: prerendered } : { loading: true, college: null }
  })

  useEffect(() => {
    let alive = true
    const prerendered = getPrerenderedCollege(slug)
    if (!prerendered) setState({ loading: true, college: null })
    getCollege(slug)
      .then(college => {
        if (alive) setState({ loading: false, college })
      })
      .catch(() => {
        if (alive) setState({ loading: false, college: null })
      })
    return () => { alive = false }
  }, [slug])

  if (state.loading) return <Loading label="Loading college details…" />
  return state.college ? <CollegeDetailPage slugOverride={slug} /> : <DirectoryPage />
}

function OwnershipAllRedirect() {
  const { ownership } = useParams()
  return <Navigate to={`/colleges/ownership/${ownership}/`} replace />
}

function AllDistrictRedirect() {
  const { districtSlug } = useParams()
  return <Navigate to={`/districts/${districtSlug}/`} replace />
}

function AllDistrictOwnershipRedirect() {
  const { districtSlug, ownership } = useParams()
  return <Navigate to={`/districts/${districtSlug}/ownership/${ownership}/`} replace />
}

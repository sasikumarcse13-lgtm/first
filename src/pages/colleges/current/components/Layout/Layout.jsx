import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><main id="main-content"><Outlet /></main><Footer /></>
}

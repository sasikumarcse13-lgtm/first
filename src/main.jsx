import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

function finishPageEnhancements() {
  const main = document.querySelector('main')
  if (main && !main.id) main.id = 'main-content'

  const preloader = document.getElementById('cs-preloader')
  if (preloader) {
    preloader.classList.add('cs-preloader--hidden')
    window.setTimeout(() => preloader.remove(), 350)
  }
}

window.addEventListener('load', () => window.setTimeout(finishPageEnhancements, 1100), { once: true })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
)

// Do not let the visual loader become a performance blocker on slow connections.
window.setTimeout(finishPageEnhancements, 1400)

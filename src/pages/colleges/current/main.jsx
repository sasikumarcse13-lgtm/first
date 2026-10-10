import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { getIndex, getTaxonomy } from './data.js'

const rootNode = document.getElementById('root')

// Every generated route keeps the same React root so direct links and hard
// reloads render the exact same CollegeShine layout as in-app navigation.
if (rootNode) {
  // Preload the directory data before the first React render. This removes the
  // loading -> full-directory layout jump that was producing the homepage CLS.
  Promise.all([getIndex(), getTaxonomy()])
    .catch(() => null)
    .finally(() => {
      ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>,
      )
    })
}

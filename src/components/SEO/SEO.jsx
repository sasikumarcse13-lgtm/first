import { useEffect } from 'react'
import { setSEO } from '../../lib/seo'

function clearBreadcrumbs() {
  document.querySelectorAll('[data-cs-global-breadcrumbs="true"]').forEach((node) => node.remove())
}

function renderBreadcrumbs(breadcrumbs = []) {
  clearBreadcrumbs()
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return () => {}
  if (window.location.pathname === '/' || window.location.pathname === '') return () => {}
  if (document.querySelector('.cs-article-breadcrumbs')) return () => {}

  const nav = document.createElement('nav')
  nav.className = 'cs-global-breadcrumbs'
  nav.setAttribute('aria-label', 'Breadcrumb')
  nav.dataset.csGlobalBreadcrumbs = 'true'

  const inner = document.createElement('div')
  inner.className = 'cs-global-breadcrumbs__inner'
  const list = document.createElement('ol')
  list.className = 'cs-global-breadcrumbs__list'

  breadcrumbs.forEach((item, index) => {
    if (!item?.name) return
    const li = document.createElement('li')
    li.className = 'cs-global-breadcrumbs__item'

    const isLast = index === breadcrumbs.length - 1
    if (isLast || !item.url) {
      const current = document.createElement('span')
      current.className = 'cs-global-breadcrumbs__current'
      current.textContent = item.name
      current.setAttribute('aria-current', 'page')
      li.appendChild(current)
    } else {
      const link = document.createElement('a')
      link.href = item.url
      link.textContent = item.name
      li.appendChild(link)
    }

    if (index < breadcrumbs.length - 1) {
      const separator = document.createElement('span')
      separator.className = 'cs-global-breadcrumbs__separator'
      separator.setAttribute('aria-hidden', 'true')
      separator.textContent = '›'
      li.appendChild(separator)
    }
    list.appendChild(li)
  })

  inner.appendChild(list)
  nav.appendChild(inner)

  const header = document.querySelector('header')
  if (header?.parentNode) {
    header.parentNode.insertBefore(nav, header.nextSibling)
  } else {
    const main = document.querySelector('main')
    if (main?.parentNode) main.parentNode.insertBefore(nav, main)
    else document.body.insertBefore(nav, document.body.firstChild)
  }

  return clearBreadcrumbs
}

export default function SEO({
  title,
  description = '',
  canonical,
  noindex = true,
  pageType = 'webpage',
  breadcrumbs = [],
  keywords = [],
  searchIntent = 'informational',
  localTerms = [],
  image,
}) {
  useEffect(() => {
    setSEO({ title, description, canonical, noindex, pageType, breadcrumbs, image })
    const cleanup = renderBreadcrumbs(breadcrumbs)

    return () => cleanup()
  }, [title, description, canonical, noindex, pageType, JSON.stringify(breadcrumbs), JSON.stringify(keywords), searchIntent, JSON.stringify(localTerms), image])

  return null
}

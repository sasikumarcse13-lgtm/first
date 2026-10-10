const configuredApiBase = (import.meta.env.VITE_BLOG_API_BASE || '').trim()
const API_BASE = (configuredApiBase || (typeof window !== 'undefined' ? (['localhost', '127.0.0.1'].includes(window.location.hostname) ? 'http://localhost:5000' : window.location.origin) : '')).replace(/\/$/, '')

function normaliseBlog(blog) {
  if (!blog) return null
  return {
    ...blog,
    tags: Array.isArray(blog.tags) ? blog.tags : (typeof blog.tags === 'string' ? blog.tags.split(',').map(v => v.trim()).filter(Boolean) : []),
  }
}

export async function getBlogs(options = {}) {
  const { category, search, limit } = options
  if (API_BASE) {
    try {
      const params = new URLSearchParams()
      if (category && category !== 'All') params.set('category', category)
      if (search) params.set('search', search)
      if (limit) params.set('limit', String(limit))
      const response = await fetch(`${API_BASE}/api/blogs?${params.toString()}`, { cache: 'no-store', headers: { Accept: 'application/json' } })
      if (response.ok) {
        const data = await response.json()
        if (Array.isArray(data)) return data.map(normaliseBlog)
        if (Array.isArray(data.blogs)) return data.blogs.map(normaliseBlog)
      }
    } catch (error) {
      console.error('[CollegeShine Blog] API request failed:', error)
    }
  }
  return []
}

export async function getBlogBySlug(slug) {
  if (API_BASE) {
    try {
      const response = await fetch(`${API_BASE}/api/blogs/${encodeURIComponent(slug)}`, { cache: 'no-store', headers: { Accept: 'application/json' } })
      if (response.ok) return normaliseBlog(await response.json())
    } catch (error) {
      console.error('[CollegeShine Blog] Detail API request failed:', error)
    }
  }
  return null
}

export function getBlogCategories(blogs) {
  return ['All', ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean)))]
}

export function formatBlogDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(value))
}

export function absoluteBlogUrl(slug) {
  return `/blog/${slug}/`
}

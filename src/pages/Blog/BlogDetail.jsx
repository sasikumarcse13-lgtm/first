import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SEO from '../../components/SEO/SEO.jsx'
import { absoluteBlogUrl, formatBlogDate, getBlogs, getBlogBySlug } from '../../lib/blogs'
import { absoluteUrl } from '../../lib/seo'
import './BlogDetail.css'

function cleanArticleHTML(html = '') {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, '')
    .replace(/javascript:/gi, '')
}

function makeArticleModel(html = '') {
  return { html: cleanArticleHTML(html) }
}

function ArticleSEO({ blog }) {
  useEffect(() => {
    if (!blog) return undefined

    const canonical = absoluteUrl(blog.canonical_url || absoluteBlogUrl(blog.slug))
    const image = absoluteUrl(blog.og_image || blog.featured_image || '/og-default.png')
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: blog.title,
      description: blog.seo_description || blog.excerpt,
      image: [image],
      datePublished: blog.published_date,
      dateModified: blog.updated_date || blog.published_date,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      author: { '@type': 'Organization', name: blog.author || 'CollegeShine', url: 'https://collegeshine.com' },
      publisher: { '@type': 'Organization', name: 'CollegeShine', url: 'https://collegeshine.com' },
      articleSection: blog.category || '',
      keywords: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
    }

    let script = document.head.querySelector('script[data-blog-article-schema]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.blogArticleSchema = 'true'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)

    return () => {
      script?.remove()
    }
  }, [blog])
  return null
}

export default function BlogDetail({ slug }) {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [related, setRelated] = useState([])

  useEffect(() => {
    let active = true
    setLoading(true)
    Promise.all([getBlogBySlug(slug), getBlogs({ limit: 8 })]).then(([item, all]) => {
      if (!active) return
      setBlog(item)
      setRelated(all.filter(other => other.slug !== slug).slice(0, 3))
      setLoading(false)
    })
    return () => { active = false }
  }, [slug])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [slug])

  const article = useMemo(() => makeArticleModel(blog?.content || ''), [blog?.content])
  const breadcrumb = useMemo(() => blog ? [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: blog.title, url: absoluteBlogUrl(blog.slug) },
  ] : [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog/' }], [blog])

  if (loading) return <><Navbar /><main className="cs-blog-detail-state">Loading article…</main><Footer /></>
  if (!blog) return <><SEO title="Article Not Found | CollegeShine" description="The requested CollegeShine article could not be found." canonical={absoluteBlogUrl(slug)} noindex /><Navbar /><main className="cs-blog-detail-state"><h1>Article not found</h1><p>The article may have been moved or is not published yet.</p><a href="/blog/">← Back to Blog</a></main><Footer /></>

  return (
    <>
      <SEO title={blog.seo_title || blog.title} description={blog.seo_description || blog.excerpt} canonical={blog.canonical_url || absoluteBlogUrl(blog.slug)} noindex={false} pageType="article" image={blog.og_image || blog.featured_image} breadcrumbs={breadcrumb} />
      <ArticleSEO blog={blog} />
      <Navbar />
      <main className="cs-blog-detail">
        <header className="cs-article-hero">
          <div className="cs-article-container">
            <div className="cs-article-breadcrumbs"><a href="/">Home</a><span>›</span><a href="/blog/">Blog</a><span>›</span><span>{blog.category}</span></div>
            <div className="cs-article-category">{blog.category}</div>
            <h1>{blog.title}</h1>
            <p className="cs-article-excerpt">{blog.excerpt}</p>
            <div className="cs-article-meta"><span>By <strong>{blog.author}</strong></span><span>•</span><span>{formatBlogDate(blog.published_date)}</span><span>•</span><span>{blog.reading_time}</span></div>
          </div>
        </header>

        <div className="cs-article-container">
          <div className="cs-article-cover"><img src={blog.featured_image || '/og-default.png'} alt={blog.title} /></div>
          <article className="cs-article-main cs-article-main--full">
            <div className="cs-article-content" dangerouslySetInnerHTML={{ __html: article.html }} />
            {blog.tags?.length ? <div className="cs-article-tags"><strong>Topics</strong>{blog.tags.map(tag => <span key={tag}>#{tag}</span>)}</div> : null}
            <div className="cs-author-box"><div className="cs-author-avatar">CS</div><div><span>ABOUT THE AUTHOR</span><h3>{blog.author || 'CollegeShine'}</h3><p>CollegeShine shares practical education, admissions and career information for students.</p></div></div>
          </article>
        </div>

        {related.length ? <section className="cs-related"><div className="cs-article-container"><div className="cs-related-heading"><span>KEEP READING</span><h2>Related Articles</h2></div><div className="cs-related-grid">{related.map(item => <a className="cs-related-card" key={item.slug} href={absoluteBlogUrl(item.slug)}><img src={item.featured_image || '/og-default.png'} alt={item.title} /><div><span>{item.category}</span><h3>{item.title}</h3><p>{formatBlogDate(item.published_date)} · {item.reading_time}</p></div></a>)}</div></div></section> : null}
        <section className="cs-blog-cta"><div><span>COLLEGESHINE</span><h2>Explore colleges, courses and admission guidance.</h2><p>Continue your journey with CollegeShine's education tools and resources.</p><a href="/colleges/">Explore Colleges →</a></div></section>
      </main>
      <Footer />
    </>
  )
}

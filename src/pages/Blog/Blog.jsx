import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SEO from '../../components/SEO/SEO.jsx'
import BlogCard from './BlogCard'
import { getBlogCategories, getBlogs } from '../../lib/blogs'
import './Blog.css'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    getBlogs({ category, search }).then(items => {
      if (!active) return
      setBlogs(Array.isArray(items) ? items : [])
      setLoading(false)
    })
    return () => { active = false }
  }, [category, search])

  const categories = useMemo(() => getBlogCategories(blogs), [blogs])

  return (
    <>
      <SEO
        title="CollegeShine Blog | Education, Admissions & Career Insights"
        description="Read CollegeShine articles on education, admissions, courses, scholarships, entrance exams, colleges and career guidance for students."
        canonical="/blog/"
        noindex={false}
        pageType="collection"
        searchIntent="informational"
        keywords={['education blog', 'college admissions blog', 'career guidance']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'CollegeShine Blog', url: '/blog/' }]}
      />
      <Navbar />
      <main className="cs-blog-page">
        <section className="cs-blog-hero">
          <div className="cs-blog-container cs-blog-hero__inner">
            <div className="cs-blog-hero__eyebrow">COLLEGESHINE INSIGHTS</div>
            <h1>Education, Admissions &amp; Career Guides</h1>
            <p>Practical articles to help students discover courses, colleges, admissions, scholarships and career pathways.</p>
            <div className="cs-blog-search">
              <span aria-hidden="true">⌕</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." aria-label="Search articles" />
              {search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search">×</button>}
            </div>
          </div>
        </section>

        <section className="cs-blog-listing">
          <div className="cs-blog-container">
            <div className="cs-blog-toolbar">
              <div>
                <span className="cs-blog-toolbar__label">LATEST ARTICLES</span>
                <h2>{blogs.length ? `${blogs.length} articles to explore` : 'Insights that help you move forward'}</h2>
              </div>
              <div className="cs-blog-filters" role="group" aria-label="Blog categories">
                {(categories.length ? categories : ['All']).map(item => (
                  <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
                ))}
              </div>
            </div>

            {loading ? <div className="cs-blog-state">Loading articles…</div> : blogs.length ? (
              <div className="cs-blog-grid cs-blog-grid--all">
                {blogs.map((blog, index) => <BlogCard key={blog.id || blog.slug} blog={blog} featured={index === 0} />)}
              </div>
            ) : (
              <div className="cs-blog-state"><h3>No articles found</h3><p>Try a different keyword or category.</p></div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

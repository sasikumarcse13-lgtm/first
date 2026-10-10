import React, { useEffect, useState } from 'react'
import BlogCard from '../../Blog/BlogCard'
import { getBlogs } from '../../../lib/blogs'

export default function InsightsSection() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    let active = true
    getBlogs({ limit: 4 }).then(items => { if (active) setBlogs(Array.isArray(items) ? items.slice(0, 4) : []) })
    return () => { active = false }
  }, [])

  return (
    <section className="cs-home-blog" aria-labelledby="home-blog-title">
      <div className="cs-home-blog__container">
        <div className="cs-home-blog__head">
          <div>
            <span>COLLEGESHINE INSIGHTS</span>
            <h2 id="home-blog-title">Latest education insights</h2>
            <p>Useful admission, course, college and career guides for students and parents.</p>
          </div>
          <a href="/blog/">View all articles <b>→</b></a>
        </div>
        {blogs.length ? (
          <div className="cs-home-blog__grid">
            {blogs.map((blog, index) => <BlogCard key={blog.id || blog.slug} blog={blog} featured={index === 0} />)}
          </div>
        ) : (
          <div className="cs-home-blog__skeleton-grid">{[1,2,3,4].map(n => <div className="cs-home-blog__skeleton" key={n} />)}</div>
        )}
      </div>
    </section>
  )
}

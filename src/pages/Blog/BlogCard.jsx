import React from 'react'
import { absoluteBlogUrl, formatBlogDate } from '../../lib/blogs'

export default function BlogCard({ blog, featured = false, compact = false }) {
  const href = absoluteBlogUrl(blog.slug)
  return (
    <article className={`cs-blog-card${featured ? ' cs-blog-card--featured' : ''}${compact ? ' cs-blog-card--compact' : ''}`}>
      <a className="cs-blog-card__media" href={href} aria-label={`Read ${blog.title}`}>
        <img src={blog.featured_image || '/og-default.png'} alt="" loading={featured ? 'eager' : 'lazy'} />
        <span className="cs-blog-card__category">{blog.category}</span>
        <span className="cs-blog-card__media-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="cs-blog-card__body">
        <div className="cs-blog-card__meta">
          <span>{formatBlogDate(blog.published_date)}</span><i /> <span>{blog.reading_time}</span>
        </div>
        <h2><a href={href}>{blog.title}</a></h2>
        {!compact && <p>{blog.excerpt}</p>}
        <a className="cs-blog-card__read" href={href}>Read article <span aria-hidden="true">→</span></a>
      </div>
    </article>
  )
}

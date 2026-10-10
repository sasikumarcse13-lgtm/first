import React, { useState } from 'react'
import './BlogAdmin.css'

const configuredApiBase = (import.meta.env.VITE_BLOG_API_BASE || '').trim()
const API_BASE = (configuredApiBase || (typeof window !== 'undefined' ? (['localhost','127.0.0.1'].includes(window.location.hostname) ? 'http://localhost:5000' : window.location.origin) : '')).replace(/\/$/, '')

const empty = { title:'', slug:'', excerpt:'', content:'<h2>Introduction</h2><p>Write your article here...</p>', featured_image:'', category:'Admissions', author:'CollegeShine', published_date:new Date().toISOString().slice(0,10), updated_date:new Date().toISOString().slice(0,10), status:'published', reading_time:'5 min read', tags:'', seo_title:'', seo_description:'', canonical_url:'', og_image:'' }

export default function BlogAdmin(){
 const [token,setToken]=useState('')
 const [form,setForm]=useState(empty)
 const [message,setMessage]=useState('')
 const update=(key,value)=>setForm(v=>({...v,[key]:value}))
 const submit=async e=>{
   e.preventDefault(); setMessage('Publishing…')
   try{
    const payload={...form,tags:form.tags.split(',').map(v=>v.trim()).filter(Boolean)}
    const r=await fetch(`${API_BASE}/api/admin/blogs`,{method:'POST',headers:{'Content-Type':'application/json','x-admin-token':token},body:JSON.stringify(payload)})
    const data=await r.json(); if(!r.ok) throw new Error(data.error||'Could not publish')
    setMessage('Blog published successfully.'); setForm(empty)
   }catch(err){setMessage(err.message)}
 }
 return <main className="cs-blog-admin"><div className="cs-blog-admin__wrap"><div className="cs-blog-admin__top"><div><span>COLLEGESHINE CONTENT</span><h1>Create Blog</h1><p>Publish one article and the same dedicated design automatically displays it.</p></div><a href="/blog/">View Blog →</a></div><form onSubmit={submit}><label>Admin token<input type="password" value={token} onChange={e=>setToken(e.target.value)} placeholder="Hostinger BLOG_ADMIN_TOKEN" /></label><div className="admin-grid"><label>Title<input required value={form.title} onChange={e=>update('title',e.target.value)} /></label><label>Slug<input required value={form.slug} onChange={e=>update('slug',e.target.value)} placeholder="my-new-blog-title" /></label><label>Category<select value={form.category} onChange={e=>update('category',e.target.value)}><option>Admissions</option><option>Career</option><option>Courses</option><option>Entrance Exams</option><option>Scholarships</option><option>Colleges</option><option>Student Guide</option></select></label><label>Author<input value={form.author} onChange={e=>update('author',e.target.value)} /></label><label>Published date<input type="date" value={form.published_date} onChange={e=>update('published_date',e.target.value)} /></label><label>Reading time<input value={form.reading_time} onChange={e=>update('reading_time',e.target.value)} /></label></div><label>Featured image URL<input value={form.featured_image} onChange={e=>update('featured_image',e.target.value)} placeholder="/assets/blog/my-image.webp" /></label><label>Excerpt<textarea rows="3" value={form.excerpt} onChange={e=>update('excerpt',e.target.value)} /></label><label>Article content <small>Use HTML headings such as &lt;h2&gt; and &lt;h3&gt; — the page creates the table of contents automatically.</small><textarea className="admin-content" rows="20" value={form.content} onChange={e=>update('content',e.target.value)} /></label><label>Tags<input value={form.tags} onChange={e=>update('tags',e.target.value)} placeholder="Admissions, College Guide, Students" /></label><div className="admin-grid"><label>SEO title<input value={form.seo_title} onChange={e=>update('seo_title',e.target.value)} /></label><label>SEO description<textarea rows="3" value={form.seo_description} onChange={e=>update('seo_description',e.target.value)} /></label></div><label>Canonical URL<input value={form.canonical_url} onChange={e=>update('canonical_url',e.target.value)} placeholder="/blog/my-new-blog-title/" /></label><button type="submit">Publish Blog</button>{message&&<p className="admin-message">{message}</p>}</form></div></main>
}

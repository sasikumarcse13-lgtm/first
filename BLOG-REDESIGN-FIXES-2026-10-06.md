# CollegeShine Blog Fixes — 2026-10-06

Applied fixes:
- Fixed the Engineering College in Tamil Nadu article visibility by ensuring it is represented in the bundled fallback dataset and by removing the old featured-vs-grid layout that made one article appear outside the card grid.
- Blog listing now displays every returned article as a consistent responsive card grid.
- Homepage blog section now displays four consistent article cards instead of one large card plus a side stack.
- Blog API requests use `cache: no-store` to avoid stale browser responses.
- Blog detail page redesigned into a focused reading layout.
- Removed the `ON THIS PAGE` / table-of-contents sidebar from the blog detail page.
- Preserved SEO title, description, canonical URL, breadcrumbs, Article JSON-LD, related articles, tags and author information.
- Existing article HTML is still sanitized before rendering.

Build after extraction with:
`npm install`
`npm run build`

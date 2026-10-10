# CollegeShine Blog System

This project now has a reusable, database-ready blog system.

## Frontend routes
- `/blog/` — searchable/filterable blog listing
- `/blog/<slug>/` — one reusable dedicated article design
- `/admin/blogs/` — simple publishing form for the Node API

## One design for every article
All individual articles use `src/pages/Blog/BlogDetail.jsx` + `BlogDetail.css`.
Do not create a React file for each article.

## Data
The fallback data is in `src/data/blogs.js`. Production can use the Hostinger Node API by setting `VITE_BLOG_API_BASE`.

## Article content
Store HTML in the `content` field. Use `<h2>` and `<h3>` for sections. The dedicated page automatically builds the table of contents from those headings.

## Home page
The Home page's Latest Education News & Guides section reads from the same blog source, so publishing once updates both Home and Blog listing.

## SEO
Each article uses its database SEO title, description, canonical URL and OG image. Article JSON-LD and BreadcrumbList are generated automatically.

## Hostinger
See `HOSTINGER-BLOG-SETUP.md` and `database/blogs.sql`.


## Local development and dedicated article source SEO

Run the blog API in one terminal:

```bash
npm run server
```

Then run Vite in another:

```bash
npm run dev
```

The Vite development server now injects the published article's `seo_title`, `seo_description`, canonical URL, Open Graph tags, Twitter tags and Article/Breadcrumb JSON-LD into the initial HTML for `/blog/<slug>/`. Therefore **View Source** on a dedicated article shows its own metadata instead of the home-page metadata.

Set the database connection in `server/.env` using the fields in `server/.env.example`. The delivered project intentionally does not include a database password.

## Production

Build with:

```bash
npm run build
```

Run the Node server with:

```bash
npm start
```

The Node server performs the same dedicated blog metadata injection in production and applies long immutable caching to hashed `/assets/*` files.

# CollegeShine — Unified Main + SQL College Directory

This build keeps the **main CollegeShine project structure** as the primary application and merges the SQL-backed College Directory from the CollegeShine FullStack MySQL project.

## What was merged

- Existing CollegeShine main pages, courses, sections, blog, blog admin and SEO system remain in `src/pages/`.
- SQL college directory is isolated under `src/college/` so it does not overwrite the main project's Home, Navbar, Footer or SEO components.
- `/colleges/`, `/colleges/.../`, `/districts/.../` and `/search/` are routed to the merged SQL college application.
- College data comes from MySQL through `/api/colleges` and `/api/colleges/:slug`.
- No `data/colleges-db-9.js` dependency is used.
- Blog API and College API share the same Express/MySQL server.
- Vite proxies `/api` and `/uploads` to port 3001 during local development.
- College detail pages receive server-side title, description, canonical and CollegeOrUniversity JSON-LD metadata.
- Sitemap generation optionally reads SQL college slugs and adds all college detail URLs when the database is reachable.

## Local setup

1. Make sure MySQL is reachable and the `colleges` and `blogs` tables exist.
2. Check `.env`.
3. Install dependencies:

```bash
npm install
```

4. Start both frontend and API:

```bash
npm run dev:full
```

Or separately:

```bash
npm run server
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:3001`

## Important

The SQL database is the source of truth for college records. Do not recreate or restore the old `data/colleges-db-9.js` file.

For Hostinger, build the project and run the unified Node server. If using Hostinger's Node.js application manager, point the startup file to:

`server/server.js`



## Merged college directory + blog deployment (October 2026)
- The college directory UI/data helpers from the first uploaded project are under `src/pages/colleges/current/`.
- `src/CollegeRouter.jsx` mounts that directory, replacing the previous college-directory UI while leaving the main site, courses, and blog pages in place.
- Blog table + three starter posts: import `database/blogs-hostinger.sql` into the same Hostinger database.
- Server environment file: `server/.env` (the server loads this file). Root `.env` is also included for convenience; do not commit either file to Git.
- Replace `BLOG_ADMIN_TOKEN` with a strong random secret before publishing.

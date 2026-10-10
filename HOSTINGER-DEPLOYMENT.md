# CollegeShine — Hostinger Full-Stack Deployment (Fixed)

This project is a single full-stack app: Vite builds the React frontend and Express serves the built frontend, the college API, blog API, and server-rendered SEO metadata. Do **not** deploy this as a static-only Vite site if you need the existing MySQL college data and dynamic blog SEO.

## Hostinger framework settings

- Framework: **Express** (not Vite), because the app must start `server/server.js`.
- Repository branch: `main`
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm start`
- Startup file, if requested instead of a start command: `server/server.js`
- Node version: a supported LTS version compatible with the Hostinger app.

`npm start` runs `node server/server.js`; Express serves the `dist/` build and API from the same app.

## Required environment variables

Add these through Hostinger's Environment Variables settings, not into GitHub: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `PORT` (only if Hostinger does not inject it), `BLOG_ADMIN_TOKEN`, `FRONTEND_ORIGIN`, `CORS_ORIGIN`, `VITE_NOINDEX_ALL`, and `VITE_SITE_ORIGIN`. Variable names must match exactly.

For a temporary Hostinger domain, set `VITE_NOINDEX_ALL=true` so prerendered and client-updated SEO metadata remain `noindex,follow`. Keep `VITE_SITE_ORIGIN=https://collegeshine.com` so canonical URLs point to the intended final domain. When the real domain is live, set `VITE_NOINDEX_ALL=false` and redeploy. Vite-prefixed variables are read at build time, so change them before the build.

## Database safety

The existing `colleges` table and its records are expected to remain untouched. Do **not** import `database/college-directory/collegeshine_colleges_mysql.sql` into a database that already has the colleges data. Back up the database first.

Import only `database/blogs-hostinger.sql` into the same database to create the `blogs` table and insert the three starter posts. If the table already exists, review the SQL before running it again because the starter inserts use unique slugs.

The API expects the college schema in `database/college-directory/collegeshine_colleges_mysql.sql`; the code reads `affiliation` and `tagline` from the JSON `data` column so it does not query nonexistent SQL columns.

## Test after deployment

1. `/api/health` should return JSON with `ok: true`, `database: true`, and college/blog counts.
2. `/api/colleges?limit=5000` should return `{ items, total, page, limit, totalPages }`.
3. `/api/blogs` should return published blog rows (or bundled starter articles until the `blogs` table is imported).
4. `/colleges/` should load the directory.
5. `/colleges/<real-college-slug>/` should load a college detail page and return its unique title, canonical and CollegeOrUniversity schema.
6. `/blog/` should load the blog listing.
7. `/blog/<published-slug>/` should load an article and return Article and BreadcrumbList JSON-LD.
8. Refresh the above routes directly in the browser; they should not return Hostinger's static 404.
9. On the temporary domain, View Source should show `noindex,follow`; after switching to the real domain, set `VITE_NOINDEX_ALL=false`, rebuild and verify canonical URLs.

## GitHub deployment updates

```bash
npm install
npm run build
git add .
git commit -m "Fix full-stack routes and SEO deployment"
git push origin main
```

Never commit `.env` or `server/.env`. Rotate any database password that was previously included in a ZIP or committed to Git.

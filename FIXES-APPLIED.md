# CollegeShine Fix Pack

## Fixed dedicated blog source SEO
- Dedicated `/blog/<slug>/` pages now receive database-driven `seo_title`, `seo_description`, canonical, Open Graph, Twitter and Article/Breadcrumb JSON-LD in the initial HTML.
- Added Vite development middleware so `view-source:http://localhost:5173/blog/<slug>/` can show the article metadata when the database is configured.
- Production Node server keeps the same metadata injection.
- Client Article JSON-LD now reuses the server-rendered schema node instead of creating duplicate Article schemas.

## Fixed Lighthouse issues found in the supplied report
- Removed the obsolete Home Insights DOM script that attempted to write to missing `csb4-*` elements and caused the `innerHTML` null error.
- Stopped loading the ~10.7 MB remote `colleges-db.js` on initial Home-page load; it now loads only when the search interaction requests college results.
- Lazy-loaded the optional Home DOM enhancement bundle after the initial page load.
- Added an LCP image preload and explicit hero image dimensions/priority.
- Removed blocking Google Fonts imports from the Home page and embedded Navbar style block.
- Removed the Font Awesome CDN dependency from the admission form.
- Added missing image alt text and dimensions.
- Corrected heading hierarchy on the Home page.
- Added accessible names to native selects.
- Increased carousel pagination touch targets.
- Improved audited light-background text contrast.
- Added `public/llms.txt` with an H1 and canonical CollegeShine links.
- Enabled source-map generation for future production builds.
- Added long immutable caching for hashed production assets in the Node server.

## Database
The original uploaded archive contained a database password. The delivered project intentionally removes that secret. Create `server/.env` from `server/.env.example` and enter your current Hostinger database credentials.

## Build
After extracting:

```bash
npm install
npm run build
npm start
```

For local development, run the API and Vite separately:

```bash
npm run server
npm run dev
```

Then inspect:

```text
view-source:http://localhost:5173/blog/tnea-counselling-practical-guide-for-students/
```

The exact Lighthouse score must be re-run after deployment because Lighthouse performance measurements vary by machine, network, browser extensions and third-party resources. The code changes target the failures present in the supplied Lighthouse 13.4.1 report.

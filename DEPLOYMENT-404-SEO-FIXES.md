# Deployment 404 and SEO fixes

- Deploy as Express full-stack app so the Node server, MySQL APIs, dynamic college SEO and blog SEO actually run.
- Express now handles dynamic `/colleges/:slug/` and `/blog/:slug/` requests before the SPA fallback.
- Express static middleware no longer auto-serves prerendered index files before dynamic SEO handlers.
- Unknown college/article slugs return HTTP 404 and noindex metadata.
- Static route shells are selected by URL when available; otherwise the SPA root is served for client-side routes.
- College index queries read `affiliation` and `tagline` from the existing JSON `data` column instead of nonexistent SQL columns.
- College frontend accepts the API's paginated response shape and requests up to 5,000 college summaries.
- Temporary-domain noindex can be enforced at build and client SEO time using `VITE_NOINDEX_ALL=true`.
- Real `.env` files were removed from the deliverable; use Hostinger environment variables.

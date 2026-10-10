# CollegeShine V36 SEO Architecture

## Per-college URL
`/colleges/{college-slug}/`

Every prerendered college page receives:
- Unique `<title>` and meta description
- Canonical URL
- `robots=index,follow`
- Open Graph + Twitter metadata
- `WebSite` schema
- `WebPage` schema
- `CollegeOrUniversity` schema with the institution's official website in `sameAs` when supplied
- `BreadcrumbList` schema
- Server-rendered college content before client JavaScript runs
- Internal links to the college directory, category and district pages
- Direct **Official Website** link

## Crawl architecture
- `sitemap.xml` contains individual college URLs and indexable directory URLs.
- `robots.txt` permits normal search crawling and documents the sitemap.
- `llms.txt` gives AI agents a concise site map and data-quality description.
- Search is kept out of indexing with `/search` disallowed.

## Performance hardening
- The Tamil Nadu directory hero was converted from PNG to WebP.
- The hero is preloaded on prerendered directory pages.
- The unused `/assets/app.css` request was removed.
- The directory index is lightweight and stores course levels rather than full department lists.
- Explicit dimensions were added to navigation, footer, directory and related-college images.
- Google Fonts was removed from the blocking HTML path; the site uses the local/system font stack.

## Accessibility hardening
- Low-contrast directory text was darkened.
- WhatsApp green was changed to a WCAG-friendly darker green.
- Footer external links are underlined and high contrast.
- Directory sidebar heading hierarchy now starts with `h2`.

## Important Lighthouse note
Lighthouse 13.4.1's current Agentic Browsing category has two weighted checks in the supplied report: the accessibility tree and cumulative layout shift. The report shows 1/2 because CLS was 0.476. The fixes target 0 CLS from the identified footer-logo layout shift. The category itself therefore cannot honestly be represented as 3/3 under that exact Lighthouse version; the added `llms.txt` and semantic structure also support broader agentic crawlers.

# CollegeShine Lighthouse / Agentic Browsing Fixes

This version targets the Lighthouse 13.4.1 report for `https://tst.collegeshine.com/` that showed Performance 90, Accessibility 83, Best Practices 96, SEO 92 and Agentic Browsing 1/3.

## Fixes included

- Removed the initial 11.8 MB college database download from the Home navigation critical path.
- Home enhancement scripts are interaction/viewport loaded instead of running during initial navigation.
- Removed render-blocking Google Fonts `@import`; Home now uses a system font stack.
- Fixed the Home search script so missing optional widgets never throw during initialization.
- Added a proper label to the admission `select` used by the Agentic Browsing audit.
- Increased testimonial and carousel dot hit areas to at least 24px.
- Improved failing color contrast values identified by Lighthouse.
- Fixed heading hierarchy for the reported Home headings.
- Added explicit dimensions to dynamic advertisement images and a safety net for dynamically inserted images.
- Added alt text automatically only when a dynamic image has no `alt` attribute.
- Converted `public/llms.txt` resources to Markdown links so Lighthouse can detect them.
- Vite production builds already enable source maps.
- Production Express asset serving uses long-lived immutable caching for hashed assets.
- Existing per-route HTML SEO generation is preserved, including route-specific title, description, canonical and JSON-LD.

## Important

The supplied Lighthouse report was generated against the deployed `tst.collegeshine.com` server. Lighthouse scores are runtime measurements and can change with network conditions, server response time, browser state and third-party resources.

Run a fresh production build before deployment:

```bash
npm install
npm run build
npm run server
```

Then audit the deployed build in a clean/incognito Chrome profile with extensions disabled.

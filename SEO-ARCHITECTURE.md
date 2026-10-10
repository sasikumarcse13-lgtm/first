# CollegeShine SEO Architecture

## Page-local SEO
Every real page JSX owns its SEO metadata. The reusable `src/components/SEO/SEO.jsx` component only applies the metadata to `document.head`; it does not contain a route table.

Example:

```jsx
<SEO
  title="Engineering Courses | Colleges, Eligibility & Admissions"
  description="Explore Engineering courses, eligibility and admission information on CollegeShine."
  canonical="/course/engineering/"
  noindex={true}
  pageType="collection"
  searchIntent="informational"
  keywords={['Engineering courses', 'Engineering course eligibility']}
  breadcrumbs={[
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/course/' },
    { name: 'Engineering Courses', url: '/course/engineering/' },
  ]}
/>
```

`keywords` are internal content-planning terms. The project does not emit the obsolete `meta keywords` tag.

## Covered SEO layers
- On-page: title, description, canonical, H1/page ownership, breadcrumbs and keyword planning.
- Technical: robots, Googlebot/Bingbot directives, canonical URLs, Open Graph, Twitter cards and JSON-LD.
- Structured data: WebPage/CollectionPage, WebSite/Organization on the homepage, and BreadcrumbList where supplied.
- Local SEO: use relevant location terms only where the page content genuinely serves that location.
- Off-page SEO: backlinks, citations, digital PR, brand mentions and partner relationships must be built outside the React codebase.

## Indexing
The current project uses `noindex,follow` for generated/empty page shells. Set `noindex={false}` only after the page has reviewed, useful content.

## Architecture
There is no route-based SEO switch in `App.jsx`, and `SEO.jsx` does not decide SEO from the current route. Navigation loads a page component, and that page component renders its own `<SEO />`.

# CollegeShine V35 — Simple Source Structure

The source tree intentionally uses the same shallow, easy-to-edit pattern as a typical React project:

```text
src/
├── assets/
├── components/
│   ├── Admission/
│   │   └── AdmissionLeadModal.jsx
│   ├── Breadcrumbs/
│   │   └── Breadcrumbs.jsx
│   ├── CollegeIcon/
│   │   └── CollegeIcon.jsx
│   ├── Counselling/
│   │   └── CounsellingModal.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Layout/
│   │   └── Layout.jsx
│   ├── Loading/
│   │   └── Loading.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── SEO/
│   │   └── SEO.jsx
│   └── TitleCards/
│       └── CollegeCard.jsx
├── pages/
│   ├── Home/Home.jsx
│   ├── Colleges/DirectoryPage.jsx
│   ├── CollegeDetail/CollegeDetailPage.jsx
│   ├── Category/CategoryPage.jsx
│   ├── District/DistrictPage.jsx
│   ├── Districts/DistrictsPage.jsx
│   ├── List/ListPage.jsx
│   ├── Search/SearchPage.jsx
│   └── NotFound/NotFound.jsx
├── App.jsx
├── data.js
├── seo.js
├── slug.js
├── index.css
└── main.jsx
```

## Where to edit

- Navbar: `src/components/Navbar/Navbar.jsx`
- Footer: `src/components/Footer/Footer.jsx`
- College list: `src/pages/Colleges/DirectoryPage.jsx`
- College detail: `src/pages/CollegeDetail/CollegeDetailPage.jsx`
- Admission popup: `src/components/Admission/AdmissionLeadModal.jsx`
- Counselling popup: `src/components/Counselling/CounsellingModal.jsx`
- Global design: `src/index.css`
- College data loader: `src/data.js`
- SEO helpers: `src/seo.js`
- Routing: `src/App.jsx`

## Important fix

There is no longer a `components/common/SEO.jsx` file. The SEO component is now at:

`src/components/SEO/SEO.jsx`

and imports the helper with the correct path:

`../../seo.js`

This prevents the Vite error caused by `../lib/seo.js`.

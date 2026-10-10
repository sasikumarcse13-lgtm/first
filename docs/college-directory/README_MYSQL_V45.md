# CollegeShine V45 — MySQL-Only Full Stack

This version removes the legacy local `data/colleges-db-9.js` dependency.

## Architecture

React/Vite → Express API → MySQL `colleges` table

The React application does not import a college database file. College list, taxonomy and individual college pages are fetched through `/api/*`.

## Local development

1. Make sure `.env` contains the MySQL credentials.
2. Install dependencies:

```bash
npm install
```

3. Start the API:

```bash
npm run server
```

4. In a second terminal start Vite:

```bash
npm run dev
```

5. Open `http://localhost:5173`.

API checks:

- `http://localhost:3001/api/health`
- `http://localhost:3001/api/database`
- `http://localhost:3001/api/colleges?limit=5000`

## Build

The production build no longer runs `prepare-data.mjs` and does not need a local JS database file.

```bash
npm run build
```

The build runs Vite and then `scripts/prerender.mjs`. The prerenderer reads the MySQL `colleges` table directly and creates SEO HTML for college and directory pages.

## Hostinger

Upload the complete project, including `server`, `dist`, `src`, `public`, `database`, `package.json` and `.env` as appropriate for the Node.js application setup.

The database must already contain the `colleges` table.

For a same-domain deployment, set `CORS_ORIGIN` to the actual frontend origin if a separate origin is used. Set `SITE_URL` to the production CollegeShine URL.

Do not recreate `data/colleges-db-9.js`. MySQL is the source of truth.

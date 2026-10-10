# CollegeShine — Hostinger MySQL + Node.js Deployment

## Architecture

Browser → React/Vite → `/api/*` → Node.js/Express → Hostinger MySQL

React never connects directly to MySQL.

## 1. Create/select the MySQL database

In Hostinger, use the existing database if `clgdata` already exists. Otherwise create a new database.

Use the exact database name, username and password Hostinger gives you. Hostinger commonly prefixes names with your account prefix.

## 2. Import all colleges

Open phpMyAdmin for the selected database and import:

`database/collegeshine_colleges_mysql.sql`

The file contains the CollegeShine college records and creates the `colleges` table.

## 3. Configure Node.js

Copy `.env.example` to `.env` and set:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

Never put MySQL credentials in React/Vite environment variables.

## 4. Install dependencies

From the project root:

```bash
npm install
```

## 5. Local development

Terminal 1:

```bash
npm run server
```

Terminal 2:

```bash
npm run dev
```

Open `http://localhost:5173`.

Vite proxies `/api` to `http://localhost:3001`.

## 6. Production build

```bash
npm run build
```

This creates `dist/` and prerenders the college detail pages so their SEO title, description, canonical and structured data exist in the HTML source.

## 7. Hostinger Node.js application

Point the Node.js application entry file to:

`server/index.mjs`

Set the production environment variables in Hostinger. The application listens on the `PORT` provided by Hostinger.

The Express server serves `dist/` and the `/api/*` REST endpoints from the same application.

## API endpoints

- `GET /api/health`
- `GET /api/taxonomy`
- `GET /api/colleges?limit=5000`
- `GET /api/colleges?search=...`
- `GET /api/colleges?category=...&district=...&ownership=...`
- `GET /api/colleges/:slug`

## Important

Do not upload `.env` to a public static directory. Do not expose `DB_PASSWORD` to the browser.

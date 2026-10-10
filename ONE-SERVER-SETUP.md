# CollegeShine One-Server Setup

- One root `.env` is used for both Blog and College API.
- Production server: `server/server.js` on PORT 5000.
- After `npm run build`, run `npm start`; Express serves `dist` and all `/api/*` routes from the same server.
- Vite development proxy points to `http://localhost:5000`.
- College index is cached in browser storage for 10 minutes and API responses use cache headers.
- College directory is widened to 1380px/1480px and uses 4 cards per row on large screens.

# CollegeShine Server Fix — 2026-10-06

## Fixed
- Backend now binds explicitly to `0.0.0.0` on the configured port (default 5000).
- The HTTP server is stored and explicitly kept referenced with `server.ref()`.
- Added server error and close logging.
- Added graceful SIGINT/SIGTERM shutdown handling.
- Startup output now includes the local health-check URL.

## Run locally
From `CollegeShine-Fixed/server`:

```powershell
npm install
npm start
```

Expected output:

```text
CollegeShine production server running on port 5000
Health check: http://localhost:5000/api/health
```

The PowerShell prompt should remain occupied while the server is running. Stop it with `Ctrl+C`.

Health check:

```text
http://localhost:5000/api/health
```

# CollegeShine Blog - Local Run

1. Edit `server/.env` and replace `DB_PASSWORD` with the current Hostinger MySQL password.
2. Keep `PORT=5000`.
3. Terminal 1:
   `npm run server`
4. Terminal 2:
   `npm run dev`
5. Check:
   - http://localhost:5000/api/health
   - http://localhost:5000/api/blogs
   - http://localhost:5173/blog/

The server uses `server/.env` with override enabled, so an old Windows `PORT` environment variable will not force port 3001.

This project has no hard-coded sample blogs in React. Published blogs are read from MySQL.

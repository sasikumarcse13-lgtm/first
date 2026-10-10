# CollegeShine Blog — Hostinger Setup

## 1. Frontend

The React frontend already works with local sample data. To connect it to the database API, set:

`VITE_BLOG_API_BASE=https://api.collegeshine.com`

(or the Node.js application URL that Hostinger gives you).

Then run the normal Vite production build and deploy the generated `dist` files.

## 2. MySQL

In Hostinger hPanel → Databases → MySQL Databases, create the database/user and open phpMyAdmin.

Run `database/blogs.sql`.

## 3. Node.js API

Upload the `server` folder to the Node.js application directory configured in Hostinger.

Run `npm install` inside `server`.

Create environment variables:

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `BLOG_ADMIN_TOKEN`
- `FRONTEND_ORIGIN` (recommended: `https://collegeshine.com`)
- `PORT` (Hostinger may provide/expect its own application port)

Start command:

`node server.js`

## 4. Publish a blog

Open `/admin/blogs/` on the frontend. Enter the same `BLOG_ADMIN_TOKEN` configured on the server, fill the article form and publish.

The published record automatically appears on:

- `/blog/`
- the Home page latest-articles section
- `/blog/<slug>/`

## 5. Dedicated page design

`src/pages/Blog/BlogDetail.jsx` and `BlogDetail.css` are the single reusable article template. Do not create a new React page for every article.

## 6. Content format

The `content` field stores article HTML. Use `<h2>` and `<h3>` headings. The dedicated page automatically creates the table of contents from those headings.

## 7. Security

Keep `BLOG_ADMIN_TOKEN` only in Hostinger environment variables. Do not put the token in the React source code. The API also strips script/style tags and inline event handlers from submitted article HTML.

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
dotenv.config({ path: path.join(ROOT, '.env') })

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  connectionLimit: 3,
  charset: 'utf8mb4',
})

try {
  const [rows] = await pool.query(`
    SELECT
      COUNT(*) AS total,
      COUNT(DISTINCT id) AS unique_ids,
      COUNT(DISTINCT slug) AS unique_slugs,
      SUM(CASE WHEN name IS NULL OR TRIM(name) = '' THEN 1 ELSE 0 END) AS missing_names,
      SUM(CASE WHEN slug IS NULL OR TRIM(slug) = '' THEN 1 ELSE 0 END) AS missing_slugs
    FROM colleges
  `)

  const r = rows[0]
  console.log(JSON.stringify({
    ok: Number(r.missing_names) === 0 && Number(r.missing_slugs) === 0 && Number(r.total) === Number(r.unique_ids) && Number(r.total) === Number(r.unique_slugs),
    total: Number(r.total),
    uniqueIds: Number(r.unique_ids),
    uniqueSlugs: Number(r.unique_slugs),
    missingNames: Number(r.missing_names),
    missingSlugs: Number(r.missing_slugs),
  }, null, 2))

  if (Number(r.missing_names) || Number(r.missing_slugs) || Number(r.total) !== Number(r.unique_ids) || Number(r.total) !== Number(r.unique_slugs)) process.exitCode = 1
} finally {
  await pool.end()
}

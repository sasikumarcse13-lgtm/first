import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.cwd(), 'src')
const bad = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p)
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      const s = fs.readFileSync(p, 'utf8')
      const lines = s.split(/\r?\n/)
      lines.forEach((line, i) => {
        if (/\bfunction\s+\d/.test(line) || /\b(?:const|let|var)\s+\d/.test(line)) bad.push(`${p}:${i+1}: invalid numeric identifier`)
        if (/\s[A-Za-z_$][\w$]*=(?:true|false)(?=\s|>|\/)/.test(line)) bad.push(`${p}:${i+1}: invalid JSX boolean attribute`)
        if (/<[A-Za-z][^>]*\s\d[\w-]*=/.test(line)) bad.push(`${p}:${i+1}: invalid numeric JSX attribute`)
      })
    }
  }
}
walk(root)
if (bad.length) { console.error(bad.join('\n')); process.exit(1) }
console.log('Source validation passed: 0 invalid numeric identifiers/attributes.')

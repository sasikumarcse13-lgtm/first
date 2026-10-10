import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const ROOT = fileURLToPath(new URL('..', import.meta.url))
let failed = 0
for (const [name, file] of [
  ['llms.txt', path.join(ROOT,'public','llms.txt')],
  ['Vite entry', path.join(ROOT,'src','main.jsx')],
  ['Directory data cache', path.join(ROOT,'src','data.js')],
  ['Prerenderer', path.join(ROOT,'scripts','prerender.mjs')],
]) {
  const ok=fs.existsSync(file)&&fs.statSync(file).size>0
  console.log(`${ok?'OK':'MISSING'} ${name}`); if(!ok) failed++
}
const llms=fs.readFileSync(path.join(ROOT,'public','llms.txt'),'utf8')
if(!/^\s*#\s+.+/m.test(llms)){console.error('FAIL llms.txt H1');failed++}else console.log('OK llms.txt H1')
if(!/\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(llms)){console.error('FAIL llms.txt Markdown links');failed++}else console.log('OK llms.txt Markdown links')
const prerender=fs.readFileSync(path.join(ROOT,'scripts','prerender.mjs'),'utf8')
if(prerender.includes('slice(0, 24)')){console.error('FAIL prerender still emits 24 cards');failed++}else console.log('OK prerender uses 20-card initial directory')
const main=fs.readFileSync(path.join(ROOT,'src','main.jsx'),'utf8')
if(!main.includes('if (rootNode)')){console.error('FAIL prerender-safe React entry');failed++}else console.log('OK prerender-safe React entry')
if(failed)process.exit(1)
console.log('V38 audit-fix source checks passed.')

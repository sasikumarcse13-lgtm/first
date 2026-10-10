export function slugify(value = '') {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
}

export function titleCaseSlug(slug = '') {
  return slug.split('-').filter(Boolean).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
}

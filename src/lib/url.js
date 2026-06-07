// Construit une URL interne en respectant le `base` Astro (racine `/` ou sous-dossier
// type `/Lean-periodic-table-/` sur GitHub Pages). Rend le site portable d'un hébergeur
// à l'autre sans toucher aux liens.
const BASE = import.meta.env.BASE_URL; // ex. '/' ou '/Lean-periodic-table-/'

export function withBase(path = '/') {
  return `${BASE.replace(/\/$/, '')}/${String(path).replace(/^\//, '')}`.replace(/\/{2,}/g, '/');
}

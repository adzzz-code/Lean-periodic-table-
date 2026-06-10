// Génère les images Open Graph (aperçus de partage) en PNG à partir de SVG :
//   - public/og.png        : image générique du site (versionnée) ;
//   - public/og/<slug>.png : une image par fiche concept (non versionnées, régénérées
//     au build via `prebuild` — cf. package.json).
// Lancer manuellement : `npm run og`.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import { concepts } from '../src/data/concepts.js';
import { familyById, levels } from '../src/data/families.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const ogDir = join(publicDir, 'og');

const esc = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const FAM = [
  '#7c3aed',
  '#0f766e',
  '#2563eb',
  '#15803d',
  '#c2410c',
  '#b45309',
  '#dc2626',
  '#4f46e5',
];

// ─── Image générique du site ───────────────────────────────────────────────

// Petites tuiles "éléments" décoratives en bas.
const chips = ['5S', 'PD', 'Vs', 'Kb', 'Pa', 'A3', 'Gb', 'Kz'];
let deco = '';
chips.forEach((s, i) => {
  const x = 80 + i * 130;
  deco += `
    <g transform="translate(${x},478)" opacity="0.92">
      <rect width="96" height="96" rx="14" fill="#ffffff"/>
      <rect width="96" height="96" rx="14" fill="${FAM[i]}" opacity="0.12"/>
      <rect width="6" height="96" rx="3" fill="${FAM[i]}"/>
      <text x="14" y="26" font-family="DejaVu Sans, sans-serif" font-size="13" fill="#4a5a6b">${i + 1}</text>
      <text x="48" y="64" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="34" font-weight="bold" fill="#0d2233">${s}</text>
    </g>`;
});

const homeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d2233"/>
      <stop offset="1" stop-color="#125a86"/>
    </linearGradient>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1668a0"/>
      <stop offset="1" stop-color="#1b8a8a"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Grande tuile "élément" -->
  <g transform="translate(80,90)">
    <rect width="240" height="240" rx="34" fill="url(#tile)"/>
    <text x="28" y="58" font-family="DejaVu Sans, sans-serif" font-size="34" fill="#cfe6f5">1</text>
    <text x="120" y="170" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="110" font-weight="bold" fill="#ffffff">Lé</text>
    <text x="120" y="214" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="20" fill="#cfe6f5">Lean Élémentaire</text>
  </g>

  <!-- Texte -->
  <text x="370" y="170" font-family="DejaVu Sans, sans-serif" font-size="74" font-weight="bold" fill="#ffffff">Lean Élémentaire</text>
  <text x="372" y="226" font-family="DejaVu Sans, sans-serif" font-size="34" fill="#7fd1cf">Le Lean, élément par élément.</text>
  <text x="372" y="286" font-family="DejaVu Sans, sans-serif" font-size="27" fill="#dce6ef">Le tableau périodique du Lean &amp; de l'excellence</text>
  <text x="372" y="324" font-family="DejaVu Sans, sans-serif" font-size="27" fill="#dce6ef">opérationnelle — pour les TPE &amp; PME.</text>

  ${deco}
</svg>`;

// ─── Image par fiche concept ───────────────────────────────────────────────

// Coupe un nom trop long en deux lignes, au mot le plus proche du milieu.
function splitName(name) {
  if (name.length <= 20) return [name];
  const words = name.split(' ');
  if (words.length === 1) return [name];
  let best = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const left = words.slice(0, i).join(' ').length;
    const diff = Math.abs(left - name.length / 2);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  }
  return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
}

function conceptSvg(c) {
  const fam = familyById[c.family];
  const lvl = levels.find((l) => l.level === c.level);
  const lines = splitName(c.name);
  const fontSize = Math.max(...lines.map((l) => l.length)) > 16 ? 56 : 72;
  const nameY = lines.length === 2 ? 195 : 235;
  const nameSvg = lines
    .map(
      (l, i) =>
        `<text x="400" y="${nameY + i * (fontSize + 12)}" font-family="DejaVu Sans, sans-serif" font-size="${fontSize}" font-weight="bold" fill="#ffffff">${esc(l)}</text>`,
    )
    .join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d2233"/>
      <stop offset="1" stop-color="#125a86"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Tuile "élément" aux couleurs de la famille -->
  <g transform="translate(80,120)">
    <rect width="240" height="240" rx="34" fill="#ffffff"/>
    <rect width="240" height="240" rx="34" fill="${fam.color}" opacity="0.14"/>
    <rect width="16" height="240" rx="8" fill="${fam.color}"/>
    <text x="36" y="58" font-family="DejaVu Sans, sans-serif" font-size="32" fill="#4a5a6b">${c.number}</text>
    <text x="128" y="166" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="96" font-weight="bold" fill="#0d2233">${esc(c.symbol)}</text>
  </g>

  <text x="400" y="120" font-family="DejaVu Sans, sans-serif" font-size="30" font-weight="bold" fill="#7fd1cf">${esc(fam.name)}</text>
  ${nameSvg}
  <text x="400" y="330" font-family="DejaVu Sans, sans-serif" font-size="26" fill="#9fb6c6">Niveau ${c.level} — ${esc(lvl.name)}</text>

  <text x="80" y="500" font-family="DejaVu Sans, sans-serif" font-size="34" font-weight="bold" fill="#ffffff">Lean Élémentaire</text>
  <text x="80" y="544" font-family="DejaVu Sans, sans-serif" font-size="24" fill="#7fd1cf">Le Lean, élément par élément — pour les TPE &amp; PME.</text>
</svg>`;
}

// ─── Génération ────────────────────────────────────────────────────────────

const homePng = await sharp(Buffer.from(homeSvg)).png().toBuffer();
writeFileSync(join(publicDir, 'og.png'), homePng);

mkdirSync(ogDir, { recursive: true });
for (const c of concepts) {
  const png = await sharp(Buffer.from(conceptSvg(c)))
    .png()
    .toBuffer();
  writeFileSync(join(ogDir, `${c.slug}.png`), png);
}
console.log(`OG générées : og.png + ${concepts.length} fiches dans public/og/`);

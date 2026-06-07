// Génère l'image Open Graph (aperçu de partage) en PNG à partir d'un SVG.
// Lancer : `npm run og`. Le PNG produit (public/og.png) est versionné.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
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

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log(`OG image générée : ${out} (${png.length} octets)`);

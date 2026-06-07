// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Portable d'un hébergeur à l'autre via deux variables d'environnement :
//   SITE_URL   : URL publique (sitemap, Open Graph).
//   BASE_PATH  : préfixe de chemin ('/' à la racine Netlify/Vercel,
//                '/Lean-periodic-table-/' sur GitHub Pages project site).
// Valeurs par défaut = déploiement à la racine.
const site = process.env.SITE_URL || 'https://adzzz-code.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});

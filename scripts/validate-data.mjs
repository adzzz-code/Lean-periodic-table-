// Contrôle d'intégrité des données de contenu. Sort en erreur (code 1) si un problème
// est détecté → utilisable en CI pour bloquer un merge qui casserait les données.
// Lancer : `npm run validate`.
import { concepts } from '../src/data/concepts.js';
import { families, levels } from '../src/data/families.js';
import { sources } from '../src/data/sources.js';

const famIds = new Set(families.map((f) => f.id));
const lvls = new Set(levels.map((l) => l.level));
const slugs = concepts.map((c) => c.slug);
const setSlugs = new Set(slugs);
const dup = (a) => [...new Set(a.filter((v, i) => a.indexOf(v) !== i))];

const issues = [];

const dupSlugs = dup(slugs);
if (dupSlugs.length) issues.push(`Slugs dupliqués : ${dupSlugs.join(', ')}`);

const dupSyms = dup(concepts.map((c) => c.symbol));
if (dupSyms.length) issues.push(`Symboles dupliqués : ${dupSyms.join(', ')}`);

const dupNums = dup(concepts.map((c) => c.number));
if (dupNums.length) issues.push(`Numéros dupliqués : ${dupNums.join(', ')}`);

const requiredTop = ['definition', 'purpose', 'limits', 'pme', 'relevance', 'practitioner'];
const requiredLimits = ['notFor', 'whenNot', 'pitfalls'];
const requiredPme = ['why', 'firstStep', 'example', 'commonMistake'];

for (const c of concepts) {
  const id = c.slug || `#${c.number}`;
  if (!famIds.has(c.family)) issues.push(`${id} : famille inconnue « ${c.family} »`);
  if (!lvls.has(c.level)) issues.push(`${id} : niveau invalide « ${c.level} »`);
  for (const k of requiredTop) if (!c[k]) issues.push(`${id} : champ manquant « ${k} »`);
  if (c.limits)
    for (const k of requiredLimits) if (!c.limits[k]) issues.push(`${id} : limits.${k} manquant`);
  if (c.pme) for (const k of requiredPme) if (!c.pme[k]) issues.push(`${id} : pme.${k} manquant`);
  if (c.relevance) {
    if (!['high', 'medium', 'low'].includes(c.relevance.impact))
      issues.push(`${id} : relevance.impact invalide`);
    if (!['low', 'medium', 'high'].includes(c.relevance.effort))
      issues.push(`${id} : relevance.effort invalide`);
  }
  for (const r of c.related || [])
    if (!setSlugs.has(r)) issues.push(`${id} : related cassé → « ${r} »`);
  const refs = sources[c.slug];
  if (!Array.isArray(refs) || refs.length === 0)
    issues.push(`${id} : aucune source (cf. sources.js)`);
}

// Toute clé de sources doit correspondre à un concept existant.
for (const key of Object.keys(sources))
  if (!setSlugs.has(key)) issues.push(`sources.js : clé orpheline « ${key} » (slug inconnu)`);

if (issues.length) {
  console.error(`❌ ${issues.length} problème(s) d'intégrité :\n- ${issues.join('\n- ')}`);
  process.exit(1);
}
console.log(
  `✅ Intégrité OK : ${concepts.length} concepts, ${families.length} familles, ${levels.length} niveaux.`,
);

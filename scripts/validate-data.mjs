// Contrôle d'intégrité des données de contenu. Sort en erreur (code 1) si un problème
// est détecté → utilisable en CI pour bloquer un merge qui casserait les données.
// Lancer : `npm run validate`.
import { concepts, conceptBySlug } from '../src/data/concepts.js';
import { families, levels } from '../src/data/families.js';
import { sources } from '../src/data/sources.js';
import { problems } from '../src/data/problems.js';
import { quickwins } from '../src/data/quickwins.js';

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

// Problèmes (entrée par le problème) : slugs uniques, ≥ 1 solution, concepts existants.
const dupProblems = dup(problems.map((p) => p.slug));
if (dupProblems.length) issues.push(`problems.js : slugs dupliqués : ${dupProblems.join(', ')}`);
for (const p of problems) {
  const pid = p.slug || '(sans slug)';
  if (!p.problem) issues.push(`problème ${pid} : champ « problem » manquant`);
  if (!Array.isArray(p.solutions) || p.solutions.length === 0)
    issues.push(`problème ${pid} : aucune solution`);
  for (const s of p.solutions || [])
    if (!setSlugs.has(s.slug)) issues.push(`problème ${pid} : concept inconnu « ${s.slug} »`);
}

// Pépites : concept existant, gain renseigné, et réellement fort impact + faible effort.
for (const q of quickwins) {
  const c = conceptBySlug[q.slug];
  if (!c) {
    issues.push(`pépite « ${q.slug} » : concept inconnu`);
    continue;
  }
  if (!q.gain) issues.push(`pépite ${q.slug} : « gain » manquant`);
  if (!q.estimate) issues.push(`pépite ${q.slug} : « estimate » manquant`);
  if (c.relevance?.impact !== 'high' || c.relevance?.effort !== 'low')
    issues.push(
      `pépite ${q.slug} : doit être fort impact + faible effort (or ${c.relevance?.impact}/${c.relevance?.effort})`,
    );
}

if (issues.length) {
  console.error(`❌ ${issues.length} problème(s) d'intégrité :\n- ${issues.join('\n- ')}`);
  process.exit(1);
}
console.log(
  `✅ Intégrité OK : ${concepts.length} concepts, ${families.length} familles, ${levels.length} niveaux.`,
);

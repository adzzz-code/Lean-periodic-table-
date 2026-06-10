// Contrôle d'intégrité des données de contenu. Sort en erreur (code 1) si un problème
// est détecté → utilisable en CI pour bloquer un merge qui casserait les données.
// Lancer : `npm run validate`.
import { concepts, conceptBySlug } from '../src/data/concepts.js';
import { families, levels } from '../src/data/families.js';
import { sources } from '../src/data/sources.js';
import { keywords } from '../src/data/keywords.js';
import { problems } from '../src/data/problems.js';
import { quickwins } from '../src/data/quickwins.js';
import { glossary } from '../src/data/glossary.js';

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
  // Conventions (cf. CLAUDE.md) : slugs en kebab-case, symboles de 1 à 3 caractères.
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.slug || ''))
    issues.push(`${id} : slug non kebab-case « ${c.slug} »`);
  if (!c.symbol || c.symbol.length > 3)
    issues.push(`${id} : symbole invalide « ${c.symbol} » (1-3 caractères)`);
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
  const kw = keywords[c.slug];
  if (!Array.isArray(kw) || kw.length === 0)
    issues.push(`${id} : aucun mot-clé de recherche (cf. keywords.js)`);
}

// Toute clé de sources / keywords doit correspondre à un concept existant.
for (const key of Object.keys(sources))
  if (!setSlugs.has(key)) issues.push(`sources.js : clé orpheline « ${key} » (slug inconnu)`);
for (const key of Object.keys(keywords))
  if (!setSlugs.has(key)) issues.push(`keywords.js : clé orpheline « ${key} » (slug inconnu)`);

// Problèmes (entrée par le problème) : slugs uniques, ≥ 1 solution, concepts existants,
// et contenu de landing page complet (contexte + FAQ — cf. en-tête de problems.js).
const dupProblems = dup(problems.map((p) => p.slug));
if (dupProblems.length) issues.push(`problems.js : slugs dupliqués : ${dupProblems.join(', ')}`);
for (const p of problems) {
  const pid = p.slug || '(sans slug)';
  if (!p.problem) issues.push(`problème ${pid} : champ « problem » manquant`);
  if (!Array.isArray(p.solutions) || p.solutions.length === 0)
    issues.push(`problème ${pid} : aucune solution`);
  for (const s of p.solutions || [])
    if (!setSlugs.has(s.slug)) issues.push(`problème ${pid} : concept inconnu « ${s.slug} »`);
  if (!Array.isArray(p.context) || p.context.length === 0)
    issues.push(`problème ${pid} : « context » manquant (≥ 1 paragraphe)`);
  if (!Array.isArray(p.faq) || p.faq.length === 0)
    issues.push(`problème ${pid} : « faq » manquante (≥ 1 question/réponse)`);
  for (const f of p.faq || [])
    if (!f.q || !f.a) issues.push(`problème ${pid} : entrée FAQ incomplète (q et a requis)`);
}

// Glossaire : termes uniques, définition présente, slug (optionnel) existant.
const dupTerms = dup(glossary.map((g) => g.term));
if (dupTerms.length) issues.push(`glossary.js : termes dupliqués : ${dupTerms.join(', ')}`);
for (const g of glossary) {
  if (!g.term || !g.def)
    issues.push(`glossaire : entrée incomplète « ${g.term || '(sans terme)'} »`);
  if (g.slug && !setSlugs.has(g.slug))
    issues.push(`glossaire ${g.term} : concept inconnu « ${g.slug} »`);
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
  if (typeof q.hoursPerWeek !== 'number' || q.hoursPerWeek <= 0)
    issues.push(`pépite ${q.slug} : « hoursPerWeek » doit être un nombre > 0`);
  if (c.relevance?.impact !== 'high' || c.relevance?.effort !== 'low')
    issues.push(
      `pépite ${q.slug} : doit être fort impact + faible effort (or ${c.relevance?.impact}/${c.relevance?.effort})`,
    );
}

// Avertissement (non bloquant) : le diagnostic est l'entrée prioritaire de la cible —
// un concept qu'aucun problème ne recommande est quasi invisible pour elle.
const recommended = new Set(problems.flatMap((p) => p.solutions.map((s) => s.slug)));
const orphans = concepts.filter((c) => !recommended.has(c.slug)).map((c) => c.slug);
if (orphans.length)
  console.warn(
    `⚠️  ${orphans.length} concept(s) jamais recommandé(s) par le diagnostic : ${orphans.join(', ')}`,
  );

if (issues.length) {
  console.error(`❌ ${issues.length} problème(s) d'intégrité :\n- ${issues.join('\n- ')}`);
  process.exit(1);
}
console.log(
  `✅ Intégrité OK : ${concepts.length} concepts, ${families.length} familles, ${levels.length} niveaux.`,
);

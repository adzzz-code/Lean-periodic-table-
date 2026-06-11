# CLAUDE.md — Contexte pour assistant IA

> Lire EN PREMIER dans toute nouvelle session.

## Vision & Owner

**Tableau périodique du Lean & de l'excellence opérationnelle** — **Lean Élémentaire** (_Le Lean, élément par élément._).
En ligne : https://adzzz-code.github.io/Lean-periodic-table-/
Objectif : rendre les outils et méthodes des grandes entreprises **accessibles aux TPE/PME et
entrepreneurs**, adaptés à leur contexte, avec une posture éditoriale **honnête** (on dit aussi
quand un outil ne sert à rien et ses limites — anti « cargo cult »).
**Owner** : Adel — pilote/valide, n'écrit pas de code. (Coordonnées privées, non versionnées dans ce dépôt public.)

## État courant

**V1 livrée, V2 en cours** : tableau interactif + **60 fiches concepts** (extension V2 vers ~60).
Cadrage validé le 2026-06-07 (cf. `docs/PRD.md` §9). Build statique Astro OK (`npm run build`).

## Concept produit

- **Hybride pédagogique** (ni Mendeleïev strict, ni inspiration totalement libre).
- **Colonnes = 8 familles** (cf. `src/data/families.js`). **Lignes = 4 niveaux de maturité**
  (Fondamentaux → Structuration → Optimisation → Excellence). « Trous » assumés.
- Double public : **TPE/PME (prioritaire)** + couche praticiens sur chaque fiche.
- **Entrée prioritaire par le problème** (la cible ne connaît pas le Lean) : `/diagnostic/`
  (`src/data/problems.js`) mappe une douleur en langage courant → concepts recommandés. Mise en
  avant dès l'accueil. Le tableau reste la signature/exploration. Chaque problème est une
  **landing page** (contexte + FAQ, rendue en JSON-LD `FAQPage`) — c'est le levier SEO
  long-tail du projet : on vise les requêtes en langage de dirigeant, pas le jargon.
- **Glossaire** (`/glossaire/`, `src/data/glossary.js`) : termes japonais et acronymes en une
  phrase, liés aux fiches quand elles existent.
- **Pépites** (`/pepites/`, `src/data/quickwins.js`) : objection n°1 = « pas le temps », donc on
  met en avant le **gain de temps** (fort impact / faible effort) + une **estimation indicative**
  (`estimate`) présentée honnêtement comme ordre de grandeur. **Calculateur opt-in** : coût
  horaire → gain €/mois·an (récurrent, basé sur `hoursPerWeek`), mais le total ne cumule **que
  les pépites cochées** (une seule par défaut — pas de promesse globale, posture anti cargo cult).
- ~~Vue graphe~~ : **retirée** (2026-06-10) — peu de valeur pour la cible, inutilisable au
  tactile. Le maillage passe par les « concepts liés » des fiches (liens sortants **et**
  entrants, calculés au build).
- Fiche = gabarit fixe : Essentiel · **schéma visuel** (`src/data/visuals.js`, rendu SVG au
  build par `ConceptVisual.astro`, obligatoire) · **Comment faire** (mode opératoire pas-à-pas,
  `src/data/howto.js`, ≥ 4 étapes, obligatoire) · **Limites & anti-usage** · couche TPE/PME ·
  badge pertinence (impact/effort) · couche praticien · concepts liés · **sources** ·
  **fiche mémo** téléchargeable (`/concept/[slug]/memo/`, A4 imprimable → PDF navigateur,
  `noindex`). Détail : `docs/PRD.md` §4.

## Conventions

- **Source de vérité contenu** : `src/data/concepts.js` (+ `families.js`, `sources.js`,
  `keywords.js`, `problems.js`, `quickwins.js`, `glossary.js`). Ne pas dupliquer ailleurs.
  Ajouter un concept = une entrée respectant le gabarit + **≥ 1 source** + **≥ 1 mot-clé**
  (`keywords.js`) + **un schéma** (`visuals.js`) + **un « comment faire » de ≥ 4 étapes**
  (`howto.js`). Un problème = `context` (≥ 1 §) + `faq` (≥ 1 Q/R) obligatoires. Problèmes et
  pépites pointent des slugs existants (pépites = fort impact/faible effort, vérifié par
  `npm run validate`).
- **Qualité** : `npm run validate` (intégrité + sources + mots-clés), `npm test` (recherche,
  calcul de gain), `npm run lint`, `npm run format` — vérifiés en CI.
- **OG images** : `scripts/generate-og.mjs` (lancé en `prebuild`) — `public/og.png` (versionnée)
  et une image par fiche dans `public/og/` (non versionnées, régénérées au build).
- **Analytics** : support Plausible/Umami sans cookie, activé par `PUBLIC_ANALYTICS_SRC` /
  `PUBLIC_ANALYTICS_DOMAIN` au build (cf. `docs/DEPLOIEMENT.md`). Compte à créer par l'owner.
- **Stack** : Astro + JS + CSS natif. Pas de TypeScript ni framework CSS lourd sans demande.
- **Langue** : FR uniquement en V1.
- **Naming** : kebab-case ; slugs de concepts en kebab-case ; symboles 1-3 caractères.
- **Accessibilité** : contrastes AA, navigation clavier.
- **Commandes** : `npm run dev` · `npm run build` · `npm run preview`.

## À NE PAS FAIRE

- ❌ TypeScript / bundler lourd sans demande explicite.
- ❌ Traduction EN en V1.
- ❌ Dériver la rareté/pertinence de façon incohérente avec le PRD.
- ❌ Hybrider les couches de la fiche (essentiel / limites / TPE-PME / praticien restent
  séparées visuellement).
- ❌ Casser la métaphore : colonnes = familles, lignes = maturité.

## Roadmap & backlog

Documents tenus à jour :

- **Roadmap** : `docs/ROADMAP.md` (V1 livrée · V1.1 consolidation/mise en ligne · V2 aide à la
  décision · V3 personnalisation).
- **Backlog** priorisé (P0/P1/P2) : `docs/BACKLOG.md`.
- **Audit** technique (dev senior, constats sourcés) : `docs/AUDIT.md`.

## Style attendu

Adel reframe vite — suivre, ne pas s'accrocher. Décisions concrètes > frameworks théoriques.
Format : prose serrée, tableaux pour comparaisons, end-with-question.

# Lean Élémentaire — Tableau périodique du Lean & de l'excellence opérationnelle

> _Le Lean, élément par élément._

**🌐 En ligne : https://adzzz-code.github.io/Lean-periodic-table-/**

Un **tableau périodique des concepts Lean et d'excellence opérationnelle**, conçu pour rendre
les outils et méthodes des grandes entreprises **accessibles aux TPE/PME et aux entrepreneurs**,
adaptés à leur contexte (moyens limités, petites équipes), avec leurs **limites** assumées.

> Nom retenu : **Lean Élémentaire** (figé le 2026-06-07).

## Concept

- **Colonnes = 8 familles** de concepts (Mindset, Client & valeur, Flux, Stabilité & qualité,
  Résolution de problèmes, Mesure, Management & culture, Avancé / Six Sigma).
- **Lignes = niveau de maturité** (Fondamentaux → Structuration → Optimisation → Excellence) :
  guide naturellement « par où commencer ».
- Chaque case = un **concept** avec une fiche détaillée : essentiel, **limites & anti-usage**,
  couche dédiée TPE/PME, badge de pertinence (impact/effort) et concepts liés.
- **Mode TPE/PME** : met en avant les incontournables pour une petite structure.

## Trois entrées (la cible ne connaît pas le Lean)

1. **« J'ai un problème »** → `/diagnostic/` : 16 problèmes en langage courant, chacun avec
   contexte, concepts recommandés (et leur « pourquoi ») et FAQ.
2. **« J'ai pas le temps »** → `/pepites/` : sélection fort impact / faible effort, orientée
   **gain de temps**, avec un **calculateur** (coût horaire → gains €/mois et €/an, récurrents)
   qui ne cumule **que les pépites cochées**.
3. **« Je veux explorer »** → le **tableau** : filtres famille/niveau **partageables par URL**,
   recherche en langage courant (mots-clés par concept). Et un **glossaire** (`/glossaire/`)
   des termes japonais et acronymes.

Page **À propos / méthode** : `/a-propos/`.

Cadrage complet : [`docs/PRD.md`](docs/PRD.md) · Roadmap : [`docs/ROADMAP.md`](docs/ROADMAP.md) · Backlog : [`docs/BACKLOG.md`](docs/BACKLOG.md) · Déploiement : [`docs/DEPLOIEMENT.md`](docs/DEPLOIEMENT.md) · Audit : [`docs/AUDIT.md`](docs/AUDIT.md).

## Stack

- [Astro](https://astro.build) (site statique, SEO-friendly), JavaScript, CSS natif.
- Contenu = source de vérité dans `src/data/` : `families.js`, `concepts.js`, `sources.js`,
  `keywords.js`, `problems.js`, `quickwins.js`.
- Qualité vérifiée en CI : intégrité des données, tests unitaires, ESLint, Prettier, build.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build statique dans dist/
npm run preview   # prévisualiser le build
npm run validate  # intégrité des données (slugs, sources, mots-clés, pépites…)
npm test          # tests unitaires (recherche, calcul de gain)
npm run lint      # ESLint
npm run format    # Prettier
npm run og        # (re)génère les images Open Graph (site + une par fiche)
```

## Structure

```
docs/                           PRD · ROADMAP · BACKLOG · AUDIT · DEPLOIEMENT
src/data/families.js            Familles (colonnes) + niveaux (lignes)
src/data/concepts.js            Concepts — source de vérité du contenu
src/data/sources.js             Sources / références par concept
src/data/keywords.js            Mots-clés de recherche (langage courant) par concept
src/data/problems.js            Entrée « par le problème » (landing pages : contexte + FAQ)
src/data/quickwins.js           Pépites (gain de temps) + estimation horaire
src/data/glossary.js            Glossaire (termes japonais, acronymes)
src/layouts/Base.astro          Layout commun (SEO, OG, JSON-LD, navigation, analytics)
src/lib/url.js                  withBase() — liens compatibles racine & sous-dossier
src/lib/search.js               Logique de recherche (testée)
src/lib/gains.js                Calcul de gain des pépites (testé)
src/pages/index.astro           Accueil : entrées + tableau interactif
src/pages/concept/[slug].astro  Fiche détaillée d'un concept
src/pages/diagnostic/           Diagnostic par problème (liste + détail)
src/pages/pepites.astro         Pépites + calculateur de gain (opt-in)
src/pages/glossaire.astro       Glossaire
src/pages/a-propos.astro        À propos & méthode
src/pages/404.astro             Page introuvable
scripts/                        validate-data.mjs · generate-og.mjs
tests/                          Tests unitaires (node --test)
```

## Ajouter un concept

1. Ajouter une entrée dans `src/data/concepts.js` (gabarit : voir l'en-tête du fichier et
   `docs/PRD.md` §4).
2. Ajouter **≥ 1 source** dans `src/data/sources.js` et **≥ 1 mot-clé** en langage courant
   dans `src/data/keywords.js` (obligatoires).
3. `npm run validate` pour vérifier l'intégrité. La case apparaît automatiquement à
   l'intersection famille × niveau ; l'image OG de la fiche est générée au build.

## Licence

- **Code source** : [MIT](LICENSE) — librement réutilisable.
- **Contenu éditorial** (textes des fiches, documentation, marque, logo) : © 2026 Adel —
  Lean Élémentaire, **tous droits réservés**. Voir [`LICENSE`](LICENSE).

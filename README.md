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

1. **« J'ai un problème »** → `/diagnostic/` : 12 problèmes en langage courant → concepts
   recommandés, avec le « pourquoi » de chacun.
2. **« J'ai pas le temps »** → `/pepites/` : sélection fort impact / faible effort, orientée
   **gain de temps**, avec un **calculateur** (coût horaire → gains €/mois et €/an, récurrents).
3. **« Je veux explorer »** → le **tableau** (filtres famille/niveau, recherche) et la
   **vue graphe** (`/graphe/`) des relations entre concepts.

Page **À propos / méthode** : `/a-propos/`.

Cadrage complet : [`docs/PRD.md`](docs/PRD.md) · Roadmap : [`docs/ROADMAP.md`](docs/ROADMAP.md) · Backlog : [`docs/BACKLOG.md`](docs/BACKLOG.md) · Déploiement : [`docs/DEPLOIEMENT.md`](docs/DEPLOIEMENT.md) · Audit : [`docs/AUDIT.md`](docs/AUDIT.md).

## Stack

- [Astro](https://astro.build) (site statique, SEO-friendly), JavaScript, CSS natif.
- Contenu = source de vérité dans `src/data/` : `families.js`, `concepts.js`, `sources.js`,
  `problems.js`, `quickwins.js`.
- Qualité vérifiée en CI : intégrité des données, ESLint, Prettier, build.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build statique dans dist/
npm run preview   # prévisualiser le build
npm run validate  # intégrité des données (slugs, sources, pépites…)
npm run lint      # ESLint
npm run format    # Prettier
npm run og        # (re)génère l'image Open Graph
```

## Structure

```
docs/                           PRD · ROADMAP · BACKLOG · AUDIT · DEPLOIEMENT
src/data/families.js            Familles (colonnes) + niveaux (lignes)
src/data/concepts.js            Concepts — source de vérité du contenu
src/data/sources.js             Sources / références par concept
src/data/problems.js            Entrée « par le problème » (diagnostic)
src/data/quickwins.js           Pépites (gain de temps) + estimation horaire
src/layouts/Base.astro          Layout commun (SEO, OG, JSON-LD, navigation)
src/lib/url.js                  withBase() — liens compatibles racine & sous-dossier
src/pages/index.astro           Accueil : entrées + tableau interactif
src/pages/concept/[slug].astro  Fiche détaillée d'un concept
src/pages/diagnostic/           Diagnostic par problème (liste + détail)
src/pages/pepites.astro         Pépites + calculateur de gain
src/pages/graphe.astro          Vue graphe des relations
src/pages/a-propos.astro        À propos & méthode
src/pages/404.astro             Page introuvable
scripts/                        validate-data.mjs · generate-og.mjs
```

## Ajouter un concept

1. Ajouter une entrée dans `src/data/concepts.js` (gabarit : voir l'en-tête du fichier et
   `docs/PRD.md` §4).
2. Ajouter **≥ 1 source** dans `src/data/sources.js` (obligatoire).
3. `npm run validate` pour vérifier l'intégrité. La case apparaît automatiquement à
   l'intersection famille × niveau.

## Licence

- **Code source** : [MIT](LICENSE) — librement réutilisable.
- **Contenu éditorial** (textes des fiches, documentation, marque, logo) : © 2026 Adel —
  Lean Élémentaire, **tous droits réservés**. Voir [`LICENSE`](LICENSE).

# Lean Atelier — Tableau périodique du Lean & de l'excellence opérationnelle

Un **tableau périodique des concepts Lean et d'excellence opérationnelle**, conçu pour rendre
les outils et méthodes des grandes entreprises **accessibles aux TPE/PME et aux entrepreneurs**,
adaptés à leur contexte (moyens limités, petites équipes), avec leurs **limites** assumées.

> Nom de travail : **Lean Atelier** (branding définitif à figer ultérieurement).

## Concept

- **Colonnes = 8 familles** de concepts (Mindset, Client & valeur, Flux, Stabilité & qualité,
  Résolution de problèmes, Mesure, Management & culture, Avancé / Six Sigma).
- **Lignes = niveau de maturité** (Fondamentaux → Structuration → Optimisation → Excellence) :
  guide naturellement « par où commencer ».
- Chaque case = un **concept** avec une fiche détaillée : essentiel, **limites & anti-usage**,
  couche dédiée TPE/PME, badge de pertinence (impact/effort) et concepts liés.
- **Mode TPE/PME** : met en avant les incontournables pour une petite structure.

Cadrage complet : [`docs/PRD.md`](docs/PRD.md) · Roadmap : [`docs/ROADMAP.md`](docs/ROADMAP.md) · Backlog : [`docs/BACKLOG.md`](docs/BACKLOG.md) · Déploiement : [`docs/DEPLOIEMENT.md`](docs/DEPLOIEMENT.md).

## Stack

- [Astro](https://astro.build) (site statique, SEO-friendly), JavaScript, CSS natif.
- Contenu = source de vérité dans `src/data/` (`families.js`, `concepts.js`).

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build statique dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
docs/PRD.md                     Cahier des charges V1
src/data/families.js            Familles (colonnes) + niveaux (lignes)
src/data/concepts.js            Concepts (source de vérité du contenu)
src/layouts/Base.astro          Layout commun
src/pages/index.astro           Tableau interactif (filtres, recherche, mode TPE/PME)
src/pages/concept/[slug].astro  Fiche détaillée d'un concept
src/styles/global.css           Styles
```

## Ajouter un concept

Ajouter une entrée dans `src/data/concepts.js` en respectant le gabarit (voir l'en-tête du
fichier et `docs/PRD.md` §4). La case apparaît automatiquement à l'intersection
famille × niveau.

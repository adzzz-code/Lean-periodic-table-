# BACKLOG — Lean Élémentaire

> Liste de tâches actionnables, regroupées par thème et priorisées.
> Roadmap d'ensemble : [`ROADMAP.md`](ROADMAP.md). Cadrage : [`PRD.md`](PRD.md). Audit : [`AUDIT.md`](AUDIT.md).

**Priorités** : `P0` = à faire avant la mise en ligne · `P1` = important, court terme ·
`P2` = souhaitable, moyen terme.
**Statut** : `[ ]` à faire · `[~]` en cours · `[x]` fait.

---

## 1. Contenu éditorial

- [ ] `P0` Relire les 40 fiches existantes (justesse lean, ton TPE/PME, fautes).
- [ ] `P1` Ajouter des **sources / références** par concept (livre, auteur, lien).
- [ ] `P1` Vérifier l'équilibre des familles (certaines cases de niveau sont vides — voulu ?).
- [ ] `P1` Ajouter un **glossaire** des termes japonais / acronymes.
- [ ] `P2` Étendre à ~60 concepts (cf. V2) : ex. SIPOC, Kano, QFD, Spaghetti, Yamazumi, 5 Pourquoi inversés.
- [ ] `P2` Mini-cas concrets TPE/PME illustrés (1 par famille).

## 2. UX & interactivité

- [ ] `P1` Tri / mise en avant par **pertinence TPE/PME** (impact ↑ / effort ↓).
- [ ] `P1` Recherche tolérante aux fautes (fuzzy) et aux accents.
- [ ] `P1` État de filtre persistant dans l'URL (partage d'une vue filtrée).
- [ ] `P2` **Parcours de diagnostic guidé** « quel problème → quels concepts » (V2).
- [ ] `P2` **Vue graphe** des concepts liés (prérequis / relations).
- [ ] `P2` Aperçu rapide d'une fiche en survol / panneau latéral (sans changer de page).
- [ ] `P2` Filtre par niveau de maturité (en plus des familles).

## 3. Design & branding

- [x] `P0` **Nom** figé : **Lean Élémentaire** — slogan _« Le Lean, élément par élément. »_ (2026-06-07).
- [x] `P1` **Logo + favicon** (tuile « Lé ») + **image Open Graph** (`public/og.png`, généré via `npm run og`) + balises OG/Twitter.
- [ ] `P1` Valider la palette définitive et la cohérence des couleurs de familles.
- [ ] `P2` Illustrations / pictos par famille.
- [ ] `P2` Mode sombre.

## 4. Technique & qualité

- [x] `P0` **Déploiement** GitHub Pages automatisé + configs Netlify/Vercel (cf. `DEPLOIEMENT.md`).
      ✅ **En ligne** : https://adzzz-code.github.io/Lean-periodic-table-/ (Pages activé, déploiement auto sur push `main`).
- [x] `P0` Vérification de **build en CI** sur push/PR (`.github/workflows/ci.yml`).
- [x] `P0` SEO : `sitemap-index.xml` (intégration `@astrojs/sitemap`) + `robots.txt`.
- [x] `P1` SEO : balises Open Graph / Twitter + image de partage (fait au branding).
- [x] `P0` **LICENSE** ajoutée : code **MIT** + contenu éditorial **tous droits réservés** (cf. `LICENSE`).
- [ ] `P1` SEO : **données structurées JSON-LD** (WebSite, BreadcrumbList, DefinedTerm) — cf. `AUDIT.md` §4.
- [x] `P1` **Linter + formatage** (ESLint flat config + Prettier) avec scripts `lint` / `format` / `format:check`, branchés en CI.
- [x] `P1` **Validation des données en CI** : `scripts/validate-data.mjs` + `npm run validate` (slugs/symboles uniques,
      `related` existants, champs requis), bloquant dans `ci.yml`.
- [x] `P1` **Page 404** personnalisée. (Page « À propos / méthode » : reste à faire.)
- [ ] `P2` Tests légers (build + cohérence des données) en CI.
- [ ] `P2` Audit performance / Lighthouse.
- [ ] `P2` Préparer l'i18n (structure de contenu prête pour l'EN) — sans traduire en V1.

## 5. Accessibilité

- [x] `P0` **Contrastes AA** corrigés : les 8 familles passent désormais (≥ 5.0 avec texte blanc).
      Teal `#0f766e`, vert `#15803d`, orange `#c2410c`, ambre `#b45309`. Cf. `AUDIT.md` §3.
- [~] `P1` Navigation clavier (focus visibles, skip-link ✅ ; valider l'ordre au lecteur d'écran).
- [x] `P1` Sémantique tableau : `role="grid"` incomplet retiré + `aria-label` enrichi sur chaque case
      (nom, famille, niveau) → l'info ne passe plus par la couleur seule.

## 6. Produit & croissance

- [ ] `P1` Analytics respectueux de la vie privée (Plausible / Umami).
- [ ] `P2` Boucle de feedback (« cette fiche vous a-t-elle aidé ? », suggestion de concept).
- [ ] `P2` Export PDF d'une fiche ou d'un parcours.
- [ ] `P2` Partage social d'une fiche.
- [ ] `P2` Newsletter / capture d'e-mail pour les nouveautés.

---

### Notes

- Garder la **source de vérité du contenu** dans `src/data/concepts.js` (cf. en-tête du fichier).
- Toute nouvelle fiche doit respecter le gabarit `PRD.md` §4, **bloc « Limites & anti-usage » inclus**.

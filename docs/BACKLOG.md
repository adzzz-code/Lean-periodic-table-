# BACKLOG — Lean Élémentaire

> Liste de tâches actionnables, regroupées par thème et priorisées.
> Roadmap d'ensemble : [`ROADMAP.md`](ROADMAP.md). Cadrage : [`PRD.md`](PRD.md). Audit : [`AUDIT.md`](AUDIT.md).

**Priorités** : `P0` = à faire avant la mise en ligne · `P1` = important, court terme ·
`P2` = souhaitable, moyen terme.
**Statut** : `[ ]` à faire · `[~]` en cours · `[x]` fait.

---

## 1. Contenu éditorial

- [~] `P0` Relire les 40 fiches existantes (justesse lean, ton TPE/PME, fautes).
  **Passe « expert lean » faite le 2026-06-10** : 7 corrections (8D : cause racine = D4 ;
  définition TOC précisée ; hansei recalé sur Check/Act ; ambiguïté « on recommande » du
  kanban ; pertinence heijunka recalibrée ; sources takt time et management visuel
  consolidées). **Reste : validation finale par un œil humain du métier.**
- [x] `P1` **Sources / références** par concept (`src/data/sources.js`), affichées sur la fiche et
      **imposées par `npm run validate`** (≥ 1 source par concept).
- [ ] `P1` Vérifier l'équilibre des familles (certaines cases de niveau sont vides — voulu ?).
- [x] `P1` **Glossaire** des termes japonais / acronymes (`/glossaire/`, `src/data/glossary.js`) :
      ~45 termes en une phrase, liés aux fiches, JSON-LD `DefinedTermSet`, entrée de navigation.
- [x] `P1` **Landing pages diagnostic** : chaque problème enrichi d'un **contexte** (2 §, langage
      de dirigeant — SEO long-tail) et d'une **FAQ** (objections réelles, réponses honnêtes),
      rendue en JSON-LD `FAQPage`. Champs obligatoires, imposés par `npm run validate`.
- [ ] `P2` Étendre à ~60 concepts (cf. V2) : ex. SIPOC, Kano, QFD, Spaghetti, Yamazumi, 5 Pourquoi inversés.
- [ ] `P2` Mini-cas concrets TPE/PME illustrés (1 par famille).

## 2. UX & interactivité

- [x] `P1` **Pépites** : mise en avant des concepts à fort impact / faible effort, page dédiée
      `/pepites/` orientée **gain de temps** (`src/data/quickwins.js`) — réponse à l'objection « pas le temps ».
      Avec **estimation indicative du temps gagné** par pépite (`estimate`, présentée honnêtement comme ordre de grandeur).
- [x] `P1` **Calculateur de gain** : saisie du coût horaire → gains €/mois et €/an, par pépite et au total
      (le temps gagné est **récurrent** → annualisé). Basé sur `hoursPerWeek`.
      **Opt-in (2026-06-10)** : le total ne cumule que les pépites **cochées** (une seule par
      défaut) — pas de promesse globale, cohérent avec la posture anti cargo cult.
- [x] `P1` Recherche **insensible aux accents** + **multi-mots** (tous les termes doivent matcher).
      _Fuzzy/tolérance aux fautes : reste à faire._
- [x] `P1` Recherche **en langage courant** : mots-clés par concept (`src/data/keywords.js`,
      ≥ 1 imposé par `npm run validate`) + message « partez de votre problème » si aucun résultat.
- [x] `P1` État de filtre persistant dans l'URL (partage d'une vue filtrée : `?q=…&fam=…&niv=…&pme=1`).
- [x] **Parcours de diagnostic guidé** « quel problème → quels concepts » (`/diagnostic/`) —
      **entrée prioritaire** pour la cible qui ne connaît pas le Lean ; en tête d'accueil + nav.
- [x] `P2` Élargir/affiner les problèmes du diagnostic : 16 problèmes, **chaque concept est
      désormais recommandé par au moins un problème** (alerte `npm run validate` sinon).
- [x] ~~`P2` Vue graphe~~ — **retirée** (2026-06-10) : peu de valeur pour la cible, inutilisable
      au tactile. Remplacée par les liens entrants/sortants sur les fiches (« concepts liés »
      complets, calculés au build).
- [ ] `P2` Aperçu rapide d'une fiche en survol / panneau latéral (sans changer de page).
- [x] `P2` **Filtre par niveau de maturité** (chips Niveau 1-4, en plus des familles).

## 3. Design & branding

- [x] `P0` **Nom** figé : **Lean Élémentaire** — slogan _« Le Lean, élément par élément. »_ (2026-06-07).
- [x] `P1` **Logo + favicon** (tuile « Lé ») + **image Open Graph** (`public/og.png`, généré via `npm run og`) + balises OG/Twitter.
- [ ] `P1` Valider la palette définitive et la cohérence des couleurs de familles.
- [x] `P1` **Affichage responsive mobile** : corrigé (débordements/scroll horizontal sur cartes Pépites
      et navigation). À re-vérifier à chaque nouvelle mise en page.
- [ ] `P2` Illustrations / pictos par famille.
- [ ] `P2` Mode sombre.

## 4. Technique & qualité

- [x] `P0` **Déploiement** GitHub Pages automatisé + configs Netlify/Vercel (cf. `DEPLOIEMENT.md`).
      ✅ **En ligne** : https://adzzz-code.github.io/Lean-periodic-table-/ (Pages activé, déploiement auto sur push `main`).
- [x] `P0` Vérification de **build en CI** sur push/PR (`.github/workflows/ci.yml`).
- [x] `P0` SEO : `sitemap-index.xml` (intégration `@astrojs/sitemap`) + `robots.txt`.
- [x] `P1` SEO : balises Open Graph / Twitter + image de partage (fait au branding).
- [x] `P0` **LICENSE** ajoutée : code **MIT** + contenu éditorial **tous droits réservés** (cf. `LICENSE`).
- [x] `P1` SEO : **données structurées JSON-LD** — WebSite (global), BreadcrumbList + DefinedTerm (fiches).
- [x] `P1` **Linter + formatage** (ESLint flat config + Prettier) avec scripts `lint` / `format` / `format:check`, branchés en CI.
- [x] `P1` **Validation des données en CI** : `scripts/validate-data.mjs` + `npm run validate` (slugs/symboles uniques,
      `related` existants, champs requis), bloquant dans `ci.yml`.
- [x] `P1` **Page 404** personnalisée + **page « À propos / méthode »** (`/a-propos/`, liée en en-tête et pied).
- [x] `P2` Tests légers en CI : `npm test` (node --test) — logique de recherche
      (`src/lib/search.js`) et calcul de gain (`src/lib/gains.js`), branchés dans `ci.yml`.
- [x] `P2` **Image OG par fiche** : générée au build (`scripts/generate-og.mjs` en `prebuild`,
      sorties non versionnées dans `public/og/`) — chaque partage de fiche a son aperçu.
- [ ] `P2` Audit performance / Lighthouse.
- [ ] `P2` Préparer l'i18n (structure de contenu prête pour l'EN) — sans traduire en V1.
- [ ] `P2` **Nom de domaine propre** (l'URL Pages avec tiret final dessert la marque) —
      CNAME sur Pages + repasser `BASE_PATH` à `/` (cf. `DEPLOIEMENT.md`).

## 5. Accessibilité

- [x] `P0` **Contrastes AA** corrigés : les 8 familles passent désormais (≥ 5.0 avec texte blanc).
      Teal `#0f766e`, vert `#15803d`, orange `#c2410c`, ambre `#b45309`. Cf. `AUDIT.md` §3.
- [~] `P1` Navigation clavier (focus visibles, skip-link ✅ ; valider l'ordre au lecteur d'écran).
- [x] `P1` Sémantique tableau : `role="grid"` incomplet retiré + `aria-label` enrichi sur chaque case
      (nom, famille, niveau) → l'info ne passe plus par la couleur seule.

## 6. Produit & croissance

- [~] `P1` Analytics respectueux de la vie privée (Plausible / Umami) : **support intégré**
  (variables `PUBLIC_ANALYTICS_SRC` / `PUBLIC_ANALYTICS_DOMAIN` au build, zéro script tant
  que non configuré — cf. `DEPLOIEMENT.md`). **Reste : créer le compte** (action owner) et
  décommenter les 2 lignes dans `deploy.yml`.
- [ ] `P2` Boucle de feedback (« cette fiche vous a-t-elle aidé ? », suggestion de concept).
- [ ] `P2` Export PDF d'une fiche ou d'un parcours.
- [ ] `P2` Partage social d'une fiche.
- [ ] `P2` Newsletter / capture d'e-mail pour les nouveautés.

---

### Notes

- Garder la **source de vérité du contenu** dans `src/data/concepts.js` (cf. en-tête du fichier).
- Toute nouvelle fiche doit respecter le gabarit `PRD.md` §4, **bloc « Limites & anti-usage » inclus**.

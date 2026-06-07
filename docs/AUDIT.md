# Audit technique — Lean Élémentaire

> Revue « dev senior » du projet au 2026-06-07 (post-V1 : tableau + 40 fiches, déployé sur
> GitHub Pages, branding posé). Objectif : état des lieux honnête + plan d'action priorisé.
> Sévérité : 🔴 critique · 🟠 important · 🟡 mineur · 🟢 point fort.

## Synthèse

**Note globale : solide pour une V1 (≈ 7,5/10).** Le projet est sain : architecture claire,
données propres (intégrité vérifiée à 100 %), build reproductible, déploiement automatisé,
SEO de base et branding en place. Les axes à renforcer sont **l'accessibilité** (contrastes),
l'**absence de tests/validation en CI**, la **licence manquante**, et quelques détails d'UX
(recherche sensible aux accents, page 404). Rien de bloquant, que du consolidable.

| Axe | Note | Commentaire |
|-----|------|-------------|
| Architecture | 🟢 8.5/10 | Séparation données / présentation nette, portable. |
| Qualité du code | 🟢 8/10 | Lisible, idiomatique Astro ; manque lint/format. |
| Données (contenu) | 🟢 9/10 | 0 référence cassée, slugs/symboles uniques, gabarit respecté. |
| Accessibilité | 🟠 5.5/10 | Contrastes insuffisants, sémantique `grid` incomplète. |
| SEO | 🟢 8/10 | Sitemap, OG, canonical OK ; manque données structurées. |
| Performance | 🟢 9/10 | Site statique, JS minime inline, aucun framework client. |
| Sécurité / Privacy | 🟠 6.5/10 | Pas de secret exposé ; email perso à retirer (fait) ; repo public à cadrer. |
| Tests / CI | 🟠 5/10 | Build vérifié en CI, mais aucune validation de données ni test. |
| Maintenabilité | 🟢 8/10 | Doc fournie, conventions claires, source de vérité unique. |

---

## 1. 🟢 Architecture & code

**Forces**
- Séparation exemplaire : `src/data/` (vérité) / `layouts` / `pages` / `lib`. Le tableau et les
  fiches dérivent entièrement des données → ajouter un concept = une entrée.
- Portabilité réelle : `withBase()` rend le site déployable à la racine **et** en sous-dossier
  (vérifié sur les deux builds). Bon réflexe senior.
- Zéro framework client : interactivité en JS vanilla inliné (~1 Ko). Excellent pour la perf.

**À améliorer**
- 🟡 `src/styles/global.css` : règle morte `.cell.empty::after { content: "" }` (sans effet).
- 🟡 Le `<script>` de `index.astro` suppose la présence des éléments (pas de garde si `null`).
  Sans risque ici, mais fragile si le markup évolue.
- 🟡 `sharp` (génération OG) est une dépendance lourde installée aussi en CI alors qu'elle ne
  sert qu'au script ponctuel `npm run og`. Acceptable (l'image est versionnée), à surveiller.

## 2. 🟢 Données & contenu

- ✅ **Intégrité vérifiée par script** : 40 concepts, 8 familles, 4 niveaux ; aucun slug/symbole/
  numéro dupliqué ; tous les `related` pointent vers un concept existant ; champs requis présents.
- 🟡 **Déséquilibre de couverture** : `mesure` (4), `management` (4), `avance` (3) sont plus
  pauvres que les autres (5-6). Volontaire (trous assumés) mais à arbitrer côté éditorial.
- 🟠 **Aucune source/référence** par fiche (livre, auteur) → enjeu de **crédibilité** pour un
  contenu d'autorité. (déjà au backlog)
- 🔵 **Recommandation outil** : promouvoir le script de contrôle en `npm run validate` et le
  brancher en CI (voir §7) pour garantir l'intégrité à chaque contribution.

## 3. 🟠 Accessibilité (a11y)

- 🟠 **Contrastes insuffisants** (texte blanc sur couleurs de familles, mesuré WCAG) :

  | Famille | Couleur | Ratio | Verdict (petit texte, seuil 4.5) |
  |---------|---------|-------|----------------------------------|
  | Mesure | `#ca8a04` | 2.94 | ❌ échec |
  | Stabilité & qualité | `#16a34a` | 3.30 | ⚠️ insuffisant |
  | Résolution | `#ea580c` | 3.56 | ⚠️ insuffisant |
  | Client & valeur | `#0d9488` | 3.74 | ⚠️ insuffisant |
  | Management | `#dc2626` | 4.83 | ✅ |
  | Mindset / Flux / Avancé | — | 5.2–6.3 | ✅ |

  → **Correctif** : foncer ces 4 couleurs (pour l'usage « fond + texte blanc ») OU passer le texte
  des en-têtes/tags en sombre, OU ajouter une ombre/poids. La palette validée reste la référence,
  mais l'usage « texte blanc dessus » doit être corrigé.
- 🟠 **Sémantique du tableau** : `role="grid"` posé sur la matrice sans `role="row"`/`gridcell`
  sur les enfants → annoncé incorrectement par les lecteurs d'écran. Soit compléter les rôles,
  soit retirer `role="grid"` et s'appuyer sur une structure plus simple.
- 🟡 Pas d'indication textuelle de la famille sur chaque case (seule la couleur la porte dans le
  tableau) → l'information passe par la couleur seule. Le lien mène à la fiche qui la nomme, mais
  un `aria-label` enrichi sur la case aiderait.
- 🟢 Bons points : `skip-link`, `aria-pressed` sur les filtres, focus visibles, cases = liens
  focusables, `lang="fr"`.

## 4. 🟢 SEO

- 🟢 Sitemap (`@astrojs/sitemap`), `robots.txt`, `canonical`, Open Graph + Twitter card, titres
  par page : socle correct.
- 🟡 Manque des **données structurées** (JSON-LD : `WebSite`, `BreadcrumbList`, voire
  `DefinedTerm`/`DefinedTermSet` pour les concepts) → gain de visibilité possible.
- 🟡 `robots.txt` code en dur l'URL Pages du sitemap : à rendre cohérent si changement de domaine.

## 5. 🟢 Performance

- Site 100 % statique, aucun JS de framework, CSS unique, images limitées (favicon SVG + 1 PNG OG).
- 🟡 Aucune mesure formelle (Lighthouse) au dossier → à faire une fois pour objectiver (au backlog).

## 6. 🟠 Sécurité & confidentialité — *« le repo public, est-ce grave ? »*

**Réponse courte : non, ce n'est pas grave pour ce projet** — mais 3 points méritent attention.

- 🟢 **Aucun secret exposé** : pas de `.env`, pas de token/clé/mot de passe dans le code (vérifié).
  Le site est un contenu statique **destiné à être public** ; le code l'étant aussi, le risque
  d'exposition technique est quasi nul.
- 🟠 **Donnée personnelle** : l'email `adel.fayet@outlook.fr` figurait dans `CLAUDE.md` (dépôt
  public → exposé aux robots/spam). **Retiré** dans cette itération. ⚠️ Il reste visible dans
  **l'historique git** (auteur des commits) — non critique, mais à savoir.
- 🟡 **Propriété / réutilisation** : sans `LICENSE`, le droit d'auteur par défaut s'applique
  (personne ne peut légalement réutiliser), mais **tout le monde peut lire, cloner et s'inspirer**.
  Pour un contenu éditorial qui est ton actif, **choisir une licence explicite** clarifie l'intention
  (ex. code sous MIT + contenu sous *All Rights Reserved* ou Creative Commons BY-NC).
- 🟡 **Pourquoi public ?** GitHub Pages est gratuit uniquement sur dépôt public (le privé exige
  GitHub Pro). **Si tu veux le code privé sans payer**, déployer via **Netlify ou Vercel** (déjà
  configurés) fonctionne depuis un dépôt **privé** gratuitement. Le site, lui, reste public — c'est
  le but.

**Verdict** : garder public est parfaitement OK ici. Actions conseillées : ✅ email retiré,
➕ ajouter une `LICENSE`, et seulement si tu tiens au code privé → bascule Netlify/Vercel.

## 7. 🟠 Tests, CI & qualité

- 🟢 CI de build sur push/PR (`ci.yml`) : empêche de merger un projet qui ne compile pas.
- 🟠 **Aucune validation de données en CI** : un `related` cassé ou un slug dupliqué passerait
  inaperçu. → **Action recommandée** : committer `scripts/validate-data.mjs` + `npm run validate`
  et l'ajouter à `ci.yml`.
- 🟡 **Pas de linter/formatter** (ESLint/Prettier) → style non garanti entre contributions.
- 🟡 **Pas de page 404** personnalisée.

## 8. Plan d'action priorisé (issu de l'audit)

**P0 — à traiter vite**
1. Corriger les **contrastes** des 4 familles en échec (a11y).
2. Ajouter une **`LICENSE`** (décision owner : code + contenu).

**P1 — court terme**
3. `npm run validate` (intégrité données) **en CI**.
4. Compléter/retirer proprement `role="grid"` (sémantique a11y).
5. ESLint + Prettier ; page **404**.
6. Sources/références par fiche (crédibilité éditoriale).

**P2 — moyen terme**
7. Recherche **insensible aux accents** + tolérante aux fautes.
8. **JSON-LD** (données structurées).
9. Lighthouse de référence ; mode sombre ; rééquilibrage du contenu des familles pauvres.

> Ces éléments sont reportés dans `BACKLOG.md`.

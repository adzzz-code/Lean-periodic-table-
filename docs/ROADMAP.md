# ROADMAP — Lean Élémentaire

> Vision : rendre les outils & méthodes des grandes entreprises accessibles aux TPE/PME.
> Source de cadrage : [`PRD.md`](PRD.md). Tâches détaillées : [`BACKLOG.md`](BACKLOG.md).

La progression suit la logique du produit : **d'abord une référence crédible et consultable**
(V1), **puis l'aide à la décision** (V2), **puis la personnalisation** (V3).

---

## ✅ V1 — Le tableau de référence (livrée)

> Objectif : une carte visuelle crédible des concepts Lean, consultable et adaptée TPE/PME.

- [x] Cadrage produit (PRD) validé.
- [x] Tableau périodique interactif : 8 familles (colonnes) × 4 niveaux de maturité (lignes).
- [x] Filtres par famille, recherche, **mode TPE/PME** (incontournables).
- [x] 40 fiches concepts (gabarit : essentiel · limites & anti-usage · couche TPE/PME ·
      badge impact/effort · couche praticien · concepts liés).
- [x] Build statique Astro vérifié.

## 🔜 V1.1 — Consolidation & mise en ligne (prochaine étape)

> Objectif : rendre le site **public, soigné et trouvable**. Peu de nouvelles fonctions,
> beaucoup de finition.

- [x] Déploiement continu (GitHub Pages + configs Netlify/Vercel). _Nom de domaine : à venir._
- [x] Branding : nom figé (**Lean Élémentaire**), logo, favicon, Open Graph.
- [x] SEO (sitemap, OG, canonical, **JSON-LD**) + **page « À propos / méthode »**.
- [x] Accessibilité : contrastes AA (8/8), sémantique du tableau, `aria-label`. _Test lecteur d'écran : à compléter._
- [x] **Sources/références** par fiche (imposées par la validation). _Relecture éditoriale fine : en continu._

➡️ **V1.1 quasi complète** : reste un nom de domaine, la relecture éditoriale fine et un test lecteur d'écran.

## 🧭 V2 — L'aide à la décision

> Objectif : ne plus seulement consulter, mais **être guidé** vers les bons concepts.

- **Parcours de diagnostic guidé** : « quel est ton problème → quels concepts pour toi ».
- **Vue graphe** des relations entre concepts (prérequis / concepts liés).
- Tri / mise en avant par pertinence TPE/PME (impact vs effort).
- Élargissement du contenu (objectif ~60 concepts) + glossaire.
- Fiches enrichies : check-lists de démarrage téléchargeables, mini-cas.

## 🚀 V3 — Personnalisation & diffusion

> Objectif : un usage récurrent et une portée élargie.

- Comptes / progression : marquer les concepts « à explorer / en cours / acquis ».
- Exports (fiche ou parcours en PDF), partage social.
- Internationalisation (EN d'abord), si la traction le justifie.
- Boucle de feedback utilisateurs intégrée.

---

### Principes de priorisation

1. **Crédibilité avant fonctionnalités** : le contenu juste prime sur les gadgets.
2. **Valeur TPE/PME d'abord** : chaque ajout doit servir une petite structure.
3. **Honnêteté éditoriale** : toujours dire les limites d'un outil (anti « cargo cult »).
4. **Simplicité technique** : rester sur un site statique tant que possible.

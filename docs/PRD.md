# PRD — Tableau périodique du Lean & de l'Excellence Opérationnelle

> Nom de travail : **Lean Atelier** (branding définitif à figer ultérieurement).
> Statut : V1 — cadrage validé le 2026-06-07. Document de référence, à amender par versions.

## 1. Vision

Un **tableau périodique des concepts Lean & d'excellence opérationnelle** : une carte
visuelle, structurée et consultable qui range les outils et méthodes des grandes entreprises
de façon à les rendre **accessibles, hiérarchisés et actionnables**.

**Objectif à terme :** permettre aux **entrepreneurs et petites entreprises (TPE/PME)**
d'accéder aux outils et méthodes des grandes entreprises, **adaptés à leur contexte** (moyens
limités, petites équipes, polyvalence, pas de service qualité dédié).

Posture éditoriale : honnêteté lean — on explique aussi **quand un outil ne sert à rien** et
ses **limites**, pour éviter le « cargo cult » d'outils.

## 2. Public cible

Double couche assumée (décision de cadrage) :
- **TPE/PME & entrepreneurs débutants** (public prioritaire) : vulgarisation, premiers pas
  réalistes, exemples concrets de petite structure, zéro jargon non expliqué.
- **Praticiens confirmés** : couche « pour aller plus loin » (prérequis, indicateurs,
  approfondissement) sur chaque fiche.

## 3. Concept produit : la métaphore

Approche **hybride pédagogique** : on garde l'identité visuelle et la logique de classement
d'un tableau périodique (familles en colonnes, code couleur, symboles courts, cases, « trous »
assumés), mais on s'autorise des écarts si la pédagogie l'exige.

### 3.1 Axe horizontal — Familles (colonnes / « groupes »)

8 familles, chacune avec un code couleur :

| # | Id | Famille | Exemples |
|---|----|---------|----------|
| 1 | `mindset` | **Mindset & principes** | Genchi Genbutsu, Respect des personnes, Amélioration continue, Hansei, Nemawashi, Pensée long terme |
| 2 | `client-valeur` | **Voix du client & valeur** | Valeur, VOC, Gemba, Gaspillages (3M), CTQ |
| 3 | `flux` | **Flux & système de production** | VSM, JIT, Kanban/Flux tiré, Takt Time, Heijunka, SMED |
| 4 | `stabilite-qualite` | **Stabilité & qualité** | 5S, Travail standardisé, Poka-Yoke, Jidoka, TPM, Andon |
| 5 | `resolution` | **Résolution de problèmes** | PDCA, 5 Pourquoi, Ishikawa, A3, DMAIC, 8D |
| 6 | `mesure` | **Mesure & maîtrise statistique** | KPI, Pareto, SPC/MSP, OEE/TRS |
| 7 | `management` | **Management & culture** | Kaizen, Hoshin Kanri, Management visuel, Leader Standard Work |
| 8 | `avance` | **Amélioration avancée / Six Sigma** | Six Sigma, Théorie des contraintes, Kata, DOE |

### 3.2 Axe vertical — Niveau de maturité (lignes / « périodes »)

Les lignes encodent **par où commencer** : du fondamental vers l'avancé.

| Niveau | Libellé | Intention |
|--------|---------|-----------|
| 1 | **Fondamentaux** | À déployer en premier, peu de prérequis |
| 2 | **Structuration** | Met de l'ordre et de la méthode |
| 3 | **Optimisation** | Améliore et fiabilise un système déjà stable |
| 4 | **Excellence** | Pratiques avancées / culture mature |

Tous les croisements (famille × niveau) ne sont pas remplis — les « trous » sont assumés
(comme dans un vrai tableau périodique).

## 4. Anatomie d'un élément (gabarit de fiche)

| Bloc | Contenu |
|------|---------|
| **En-tête** | Symbole court (`5S`, `VSM`…), nom complet, famille (couleur), n°, niveau de maturité |
| **Essentiel** | Définition en 1 phrase + à quoi ça sert |
| **Limites & anti-usage** | À quoi ça **ne** sert **pas**, quand ne pas l'utiliser, limites, pièges classiques |
| **Couche TPE/PME** | Pourquoi ça compte pour une petite structure · 1er pas réaliste · exemple concret · erreur fréquente |
| **Badge pertinence** | Impact / effort pour une petite équipe (ex. fort impact / faible effort) |
| **Couche praticien** | Pour aller plus loin · prérequis · indicateurs de succès |
| **Concepts liés** | Liens vers d'autres éléments (le tableau est aussi un graphe de relations) |

## 5. Fonctionnalités V1

- **Tableau interactif** : matrice familles (colonnes) × niveaux (lignes), cases cliquables.
- **Filtres** : par famille, par niveau de maturité.
- **Recherche** : par nom / symbole / mot-clé.
- **Mode TPE/PME** : bascule pour ne mettre en avant que les concepts à fort impact / faible
  effort pour une petite structure (s'appuie sur les badges de pertinence).
- **Fiche concept** : page dédiée par concept selon le gabarit (§4), SEO-friendly.
- **Graphe de relations léger** : liens « concepts liés » entre fiches.

### Hors périmètre V1
- Comptes utilisateurs, favoris, progression personnelle.
- Multilingue (FR uniquement en V1).
- Backend / CMS (contenu en fichiers de données versionnés).
- Parcours de diagnostic guidé (« quel est ton problème → quels concepts ») — candidat V2.

## 6. Contenu V1

~36-40 concepts essentiels répartis sur les 8 familles et les 4 niveaux. Chaque concept
respecte le gabarit §4. Qualité éditoriale > exhaustivité.

## 7. Stack technique

- **Astro** (site de contenu rapide, SEO-friendly, contenu en données structurées).
- **JavaScript** (pas de TypeScript en V1), CSS natif (pas de framework CSS lourd).
- Données : modules JS (`src/data/`) — source de vérité du contenu.
- Interactivité (filtres/recherche) en JS vanilla côté client.
- Déploiement : site statique (cible : hébergement statique type Netlify/Vercel/Pages).

## 8. Conventions

- **Langue** : FR uniquement (V1).
- **Naming** : kebab-case pour fichiers et identifiants ; symboles concepts = 1-3 caractères.
- **Source de vérité contenu** : `src/data/concepts.js` + `src/data/families.js`.
- **Accessibilité** : contrastes AA, navigation clavier sur le tableau.

## 9. Décisions de cadrage (refinement 2026-06-07)

1. Métaphore : **hybride pédagogique** (ni Mendeleïev strict, ni inspiration totalement libre).
2. Public : **double couche** TPE/PME (prioritaire) + praticiens.
3. Lignes = **niveau de maturité** (Fondamentaux → Excellence).
4. Familles : **8** (les 7 initiales + **Mindset & principes**).
5. Interactivité V1 : **filtres + recherche + fiches** (diagnostic guidé reporté en V2).
6. Adaptation TPE/PME : **bloc dédié dans la fiche + badge/filtre** dans le tableau.
7. Fiche : ajout d'un bloc **Limites & anti-usage**.
8. Stack : **Astro**, JS, contenu en données versionnées.

## 10. Roadmap indicative

- **V1 (présent)** : tableau interactif + ~38 fiches + mode TPE/PME.
- **V2** : parcours de diagnostic guidé, graphe de relations enrichi, plus de concepts.
- **V3+** : comptes / progression, exports, éventuelle internationalisation.

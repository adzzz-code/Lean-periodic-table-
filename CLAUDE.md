# CLAUDE.md — Contexte pour assistant IA

> Lire EN PREMIER dans toute nouvelle session.

## Vision & Owner

**Tableau périodique du Lean & de l'excellence opérationnelle** — **Lean Élémentaire** (*Le Lean, élément par élément.*).
En ligne : https://adzzz-code.github.io/Lean-periodic-table-/
Objectif : rendre les outils et méthodes des grandes entreprises **accessibles aux TPE/PME et
entrepreneurs**, adaptés à leur contexte, avec une posture éditoriale **honnête** (on dit aussi
quand un outil ne sert à rien et ses limites — anti « cargo cult »).
**Owner** : Adel — pilote/valide, n'écrit pas de code. (Coordonnées privées, non versionnées dans ce dépôt public.)

## État courant

**V1 livrée** : tableau interactif + 40 fiches concepts. Cadrage validé le 2026-06-07
(cf. `docs/PRD.md` §9). Build statique Astro OK (`npm run build`).

## Concept produit

- **Hybride pédagogique** (ni Mendeleïev strict, ni inspiration totalement libre).
- **Colonnes = 8 familles** (cf. `src/data/families.js`). **Lignes = 4 niveaux de maturité**
  (Fondamentaux → Structuration → Optimisation → Excellence). « Trous » assumés.
- Double public : **TPE/PME (prioritaire)** + couche praticiens sur chaque fiche.
- Fiche = gabarit fixe : Essentiel · **Limites & anti-usage** · couche TPE/PME · badge
  pertinence (impact/effort) · couche praticien · concepts liés. Détail : `docs/PRD.md` §4.

## Conventions

- **Source de vérité contenu** : `src/data/concepts.js` (+ `families.js`). Ne pas dupliquer
  ailleurs. Ajouter un concept = une entrée respectant le gabarit (en-tête du fichier).
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

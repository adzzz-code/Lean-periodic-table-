# Déploiement — Lean Élémentaire

Le site est statique (Astro). Trois options sont prêtes à l'emploi. **GitHub Pages** est
l'option par défaut (gratuite, intégrée, aucun compte externe).

## Variables d'environnement

| Variable    | Rôle                                | Défaut                         |
| ----------- | ----------------------------------- | ------------------------------ |
| `SITE_URL`  | URL publique (sitemap, métadonnées) | `https://adzzz-code.github.io` |
| `BASE_PATH` | Préfixe de chemin                   | `/`                            |

> Les liens internes utilisent `withBase()` (`src/lib/url.js`) : le site fonctionne donc à la
> racine **comme** dans un sous-dossier, sans rien changer au code.

---

## Option A — GitHub Pages (par défaut, automatisée)

Workflow : `.github/workflows/deploy.yml` (build avec `BASE_PATH=/Lean-periodic-table-/` puis
déploiement à chaque push sur `main`).

**Étape unique à faire une seule fois (manuelle, côté GitHub) :**

1. Repo → **Settings** → **Pages**.
2. **Build and deployment → Source : GitHub Actions**.

Au prochain push sur `main` (ou via _Actions → Deploy → Run workflow_), le site sera publié sur :

```
https://adzzz-code.github.io/Lean-periodic-table-/
```

> Tant que cette étape n'est pas faite, le job `deploy` échoue avec un message demandant
> d'activer Pages — c'est attendu.

### Domaine personnalisé

Avec un domaine propre servi à la racine, repasser `BASE_PATH` à `/` (modifier le `env:` du
workflow) et ajuster `SITE_URL` + l'URL du sitemap dans `public/robots.txt`.

---

## Option B — Netlify

Config : `netlify.toml` (build `npm run build`, publication `dist`, servi à la racine).

1. Connecter le dépôt sur Netlify.
2. Aucune config supplémentaire (`BASE_PATH` reste `/`).
3. Renseigner `SITE_URL` avec l'URL Netlify si besoin (sitemap).

## Option C — Vercel

Config : `vercel.json` (framework Astro détecté).

1. Importer le dépôt sur Vercel.
2. Build et output déjà définis ; servi à la racine.

---

## CI

`.github/workflows/ci.yml` construit le site sur chaque push (hors `main`) et chaque PR, pour
détecter une régression de build avant fusion.

## Construire / prévisualiser en local

```bash
npm install
npm run build                                  # build racine
BASE_PATH=/Lean-periodic-table-/ npm run build # build "façon GitHub Pages"
npm run preview
```

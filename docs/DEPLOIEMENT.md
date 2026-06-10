# Déploiement — Lean Élémentaire

Le site est statique (Astro). Trois options sont prêtes à l'emploi. **GitHub Pages** est
l'option par défaut (gratuite, intégrée, aucun compte externe).

## Variables d'environnement

| Variable                  | Rôle                                          | Défaut                         |
| ------------------------- | --------------------------------------------- | ------------------------------ |
| `SITE_URL`                | URL publique (sitemap, métadonnées)           | `https://adzzz-code.github.io` |
| `BASE_PATH`               | Préfixe de chemin                             | `/`                            |
| `PUBLIC_ANALYTICS_SRC`    | URL du script analytics (cf. §Analytics)      | _(vide = pas d'analytics)_     |
| `PUBLIC_ANALYTICS_DOMAIN` | Domaine déclaré chez le fournisseur analytics | _(vide)_                       |

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

## Analytics (sans cookie, sans bannière RGPD)

Le layout (`src/layouts/Base.astro`) sait injecter un script de mesure d'audience **sans
cookie** (Plausible ou Umami) — mais **uniquement si configuré au build**. Tant que les deux
variables sont vides, aucun script tiers n'est chargé.

**Pour activer (une fois le compte créé chez le fournisseur) :**

1. Créer un compte (ex. [Plausible](https://plausible.io) ou [Umami Cloud](https://umami.is))
   et y déclarer le site (`adzzz-code.github.io` ou le futur domaine propre).
2. Dans `.github/workflows/deploy.yml`, décommenter les deux lignes `PUBLIC_ANALYTICS_*`
   (et ajuster leurs valeurs au fournisseur choisi).

> Pourquoi c'est important : le site enseigne « décider sur des faits » — sans mesure d'usage
> (diagnostic vs tableau, pépites consultées…), la roadmap se pilote au feeling.

## CI

`.github/workflows/ci.yml` vérifie sur chaque push (hors `main`) et chaque PR : intégrité des
données (`npm run validate`), tests unitaires (`npm test`), lint, format et build.

## Construire / prévisualiser en local

```bash
npm install
npm run build                                  # build racine
BASE_PATH=/Lean-periodic-table-/ npm run build # build "façon GitHub Pages"
npm run preview
```

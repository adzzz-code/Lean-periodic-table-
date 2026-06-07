// "Pépites" — la sélection à plus fort retour pour une petite structure qui MANQUE DE TEMPS.
// Critère strict : fort impact + faible effort (vérifié par `npm run validate`).
// `gain` = ce que ça fait gagner CONCRÈTEMENT (formulé en temps / charge mentale).
// Ordre = ordre d'affichage (du plus évident au plus structurant).

export const quickwins = [
  {
    slug: 'cinq-s',
    gain: 'Fini de chercher : vous récupérez les minutes perdues chaque jour à fouiller outils, papiers et fichiers.',
  },
  {
    slug: 'management-visuel',
    gain: 'Moins de réunions et d’e-mails : l’état du travail est visible par tous, d’un coup d’œil.',
  },
  {
    slug: 'cinq-pourquoi',
    gain: 'Le problème ne revient plus : zéro temps reperdu à le re-traiter encore et encore.',
  },
  {
    slug: 'pareto',
    gain: 'Vous arrêtez de vous éparpiller : votre temps va sur les 20 % de sujets qui font 80 % du résultat.',
  },
  {
    slug: 'pdca',
    gain: 'Vous arrêtez de tout refaire : on teste en petit, on garde seulement ce qui marche.',
  },
  {
    slug: 'kanban',
    gain: 'Plus de ruptures ni de sur-stock à gérer dans l’urgence : le réassort se déclenche tout seul.',
  },
  {
    slug: 'gemba',
    gain: 'Vous décidez vite et juste en allant voir, au lieu de réunions d’analyse interminables.',
  },
  {
    slug: 'kpi',
    gain: 'Décider en un coup d’œil sur 3 chiffres, au lieu de tergiverser sur des impressions.',
  },
];

export const quickwinSlugs = new Set(quickwins.map((q) => q.slug));

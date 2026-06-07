// Entrée "par le problème" (V2) — pensée pour des TPE/PME qui ne connaissent pas le Lean.
// On part de la douleur exprimée en langage courant, et on renvoie vers les concepts qui aident,
// avec un "pourquoi" taillé pour CE problème. `concepts` est ordonné : commencer par le 1er.
// Tous les slugs de `concepts` doivent exister dans concepts.js (vérifié par `npm run validate`).
//
// Champs : slug, problem (les mots du dirigeant), lead (mise en contexte),
//          featured (mis en avant sur l'accueil), solutions: [{ slug, why }]

export const problems = [
  {
    slug: 'par-ou-commencer',
    problem: 'Je veux m’améliorer mais je ne sais pas par où commencer',
    lead: 'Commencez simple, visible et gratuit. Ces fondamentaux ne demandent aucun budget, juste un peu de régularité.',
    featured: true,
    solutions: [
      {
        slug: 'cinq-s',
        why: 'Le premier pas idéal : visible, fédérateur et rentable dès la première semaine.',
      },
      {
        slug: 'gemba',
        why: 'Aller observer là où le travail se fait pour voir les vrais problèmes.',
      },
      {
        slug: 'pdca',
        why: 'Un cadre simple pour tester une amélioration puis l’ancrer si elle marche.',
      },
      {
        slug: 'amelioration-continue',
        why: 'Installer le réflexe des petits pas réguliers plutôt que la grande refonte.',
      },
    ],
  },
  {
    slug: 'desordre-temps-perdu',
    problem: 'Je perds du temps à chercher mes outils, mes documents ou mes infos',
    lead: 'Le désordre coûte quelques minutes, mille fois par jour. On rend l’espace et l’information évidents.',
    featured: true,
    solutions: [
      {
        slug: 'cinq-s',
        why: 'Trier, ranger et standardiser pour que chaque chose ait une place évidente.',
      },
      {
        slug: 'management-visuel',
        why: 'Voir d’un coup d’œil l’état du travail et où sont les choses.',
      },
      {
        slug: 'gaspillages',
        why: 'Mettre un nom — et un coût — sur ces déplacements et attentes invisibles.',
      },
    ],
  },
  {
    slug: 'erreurs-recurrentes',
    problem: 'Les mêmes erreurs ou problèmes reviennent sans arrêt',
    lead: 'Tant qu’on traite le symptôme, le problème revient. On remonte à la cause racine.',
    featured: true,
    solutions: [
      {
        slug: 'cinq-pourquoi',
        why: 'Remonter à la vraie cause en 10 minutes au lieu de colmater.',
      },
      {
        slug: 'pdca',
        why: 'Tester une correction et vérifier qu’elle tient avant de la généraliser.',
      },
      {
        slug: 'poka-yoke',
        why: 'Rendre l’erreur physiquement impossible plutôt que compter sur la vigilance.',
      },
      {
        slug: 'ishikawa',
        why: 'Explorer en équipe toutes les causes possibles avant de conclure.',
      },
    ],
  },
  {
    slug: 'delais-trop-longs',
    problem: 'Mes délais sont trop longs, je livre en retard',
    lead: 'Souvent, le travail passe plus de temps à attendre qu’à être réalisé. On fait circuler le flux.',
    featured: true,
    solutions: [
      {
        slug: 'vsm',
        why: 'Cartographier le parcours d’une commande révèle les attentes énormes entre étapes.',
      },
      { slug: 'gaspillages', why: 'Cibler les attentes et reprises qui allongent le délai.' },
      {
        slug: 'theorie-contraintes',
        why: 'Trouver le goulot qui bride tout le reste et l’organiser en priorité.',
      },
      {
        slug: 'kanban',
        why: 'Tirer le travail au rythme réel pour éviter les en-cours qui s’accumulent.',
      },
    ],
  },
  {
    slug: 'trop-de-stock',
    problem: 'J’ai trop de stock, ma trésorerie est bloquée',
    lead: 'Le stock dormant, c’est de l’argent immobilisé et un risque d’invendus.',
    featured: false,
    solutions: [
      {
        slug: 'kanban',
        why: 'Réapprovisionner seulement ce qui est consommé (système à deux bacs).',
      },
      { slug: 'jit', why: 'Commander ou produire la bonne quantité, au bon moment.' },
      {
        slug: 'gaspillages',
        why: 'Repérer le stock dormant le plus coûteux pour commencer par lui.',
      },
    ],
  },
  {
    slug: 'qualite-variable',
    problem: 'La qualité dépend de qui fait le travail, ce n’est pas régulier',
    lead: 'Sans « bonne façon » partagée, chacun fait à sa manière. On stabilise.',
    featured: true,
    solutions: [
      {
        slug: 'travail-standardise',
        why: 'Écrire ou afficher la meilleure façon connue pour que tous l’appliquent.',
      },
      { slug: 'poka-yoke', why: 'Empêcher l’erreur à la source grâce à un détrompeur.' },
      { slug: 'cinq-s', why: 'Un poste organisé est la base d’un travail régulier.' },
    ],
  },
  {
    slug: 'journees-yoyo',
    problem: 'Mes journées sont du yo-yo : coups de feu puis temps morts',
    lead: 'L’irrégularité épuise et génère des erreurs. On lisse la charge.',
    featured: false,
    solutions: [
      {
        slug: 'heijunka',
        why: 'Étaler le volume et la variété du travail pour éviter les à-coups.',
      },
      { slug: 'takt-time', why: 'Caler la cadence sur la demande réelle, ni plus ni moins.' },
      { slug: 'kanban', why: 'Réguler l’arrivée du travail pour lisser la charge.' },
    ],
  },
  {
    slug: 'equipe-nadhere-pas',
    problem: 'Mon équipe n’adhère pas, je décide et porte tout seul',
    lead: 'Une amélioration imposée ne survit pas : elle doit se construire avec l’équipe.',
    featured: false,
    solutions: [
      {
        slug: 'respect-personnes',
        why: 'Ceux qui font le travail sont les mieux placés pour l’améliorer.',
      },
      {
        slug: 'kaizen',
        why: 'Mobiliser l’équipe sur un irritant concret donne un résultat motivant.',
      },
      { slug: 'management-visuel', why: 'Un tableau partagé aligne mieux qu’une pile d’e-mails.' },
      { slug: 'nemawashi', why: 'Consulter avant d’annoncer évite le rejet silencieux.' },
    ],
  },
  {
    slug: 'pilotage-au-feeling',
    problem: 'Je pilote au feeling, sans chiffres pour décider',
    lead: 'Quelques bons indicateurs valent mieux que l’intuition — sans usine à gaz.',
    featured: false,
    solutions: [
      { slug: 'kpi', why: 'Choisir 3-4 chiffres vitaux et les suivre chaque semaine.' },
      { slug: 'pareto', why: 'Concentrer l’effort sur les 20 % de causes qui pèsent 80 %.' },
      { slug: 'management-visuel', why: 'Afficher les chiffres pour que chacun voie et réagisse.' },
    ],
  },
  {
    slug: 'comprendre-clients',
    problem: 'Je ne sais pas vraiment ce que veulent mes clients',
    lead: 'On gaspille de l’énergie sur ce que le client ne remarque pas. On repart de lui.',
    featured: false,
    solutions: [
      {
        slug: 'voix-client',
        why: 'Recueillir les vrais besoins en posant 3 questions à vos prochains clients.',
      },
      {
        slug: 'valeur',
        why: 'Distinguer ce pour quoi le client paie de ce qui ne lui apporte rien.',
      },
      { slug: 'gemba', why: 'Observer le parcours réel du client pour comprendre son expérience.' },
    ],
  },
  {
    slug: 'pannes-machine',
    problem: 'Une machine ou un équipement clé tombe souvent en panne',
    lead: 'Attendre la panne coûte cher. Un entretien minimal régulier évite l’arrêt en pleine journée.',
    featured: false,
    solutions: [
      {
        slug: 'tpm',
        why: 'Faire entretenir l’équipement, au quotidien, par ceux qui l’utilisent.',
      },
      {
        slug: 'oee',
        why: 'Mesurer les vraies pertes (micro-arrêts, ralentissements) pour cibler.',
      },
      { slug: 'cinq-s', why: 'Un équipement propre et rangé révèle tôt les anomalies.' },
    ],
  },
  {
    slug: 'exigence-client-precise',
    problem: 'Un client ou une norme exige une qualité précise et constante',
    lead: 'Tenir une promesse chiffrée demande de la maîtrise, pas du « au feeling ».',
    featured: false,
    solutions: [
      { slug: 'ctq', why: 'Traduire l’exigence en un critère mesurable et vérifiable.' },
      { slug: 'spc', why: 'Suivre le procédé pour réagir aux vraies dérives sans sur-réagir.' },
      { slug: 'poka-yoke', why: 'Sécuriser le point critique contre l’erreur.' },
      {
        slug: 'six-sigma',
        why: 'En dernier recours, pour un problème de variation chiffré, coûteux et persistant.',
      },
    ],
  },
];

export const problemBySlug = Object.fromEntries(problems.map((p) => [p.slug, p]));

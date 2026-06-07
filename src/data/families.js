// Source de vérité — familles (colonnes / "groupes") du tableau périodique.
// Ordre = ordre d'affichage des colonnes. La couleur sert au code visuel.

export const families = [
  {
    id: 'mindset',
    name: 'Mindset & principes',
    short: 'Mindset',
    color: '#7c3aed',
    description:
      "L'état d'esprit et les principes fondateurs : sans eux, les outils ne tiennent pas.",
  },
  {
    id: 'client-valeur',
    name: 'Voix du client & valeur',
    short: 'Client & valeur',
    color: '#0d9488',
    description:
      'Comprendre ce que le client valorise réellement et débusquer ce qui ne crée pas de valeur.',
  },
  {
    id: 'flux',
    name: 'Flux & système de production',
    short: 'Flux',
    color: '#2563eb',
    description: 'Faire circuler le travail sans à-coups, au rythme de la demande.',
  },
  {
    id: 'stabilite-qualite',
    name: 'Stabilité & qualité',
    short: 'Stabilité & qualité',
    color: '#16a34a',
    description: 'Rendre les processus fiables, propres et capables de produire bon du premier coup.',
  },
  {
    id: 'resolution',
    name: 'Résolution de problèmes',
    short: 'Résolution',
    color: '#ea580c',
    description: "Aller à la cause racine plutôt que de traiter les symptômes.",
  },
  {
    id: 'mesure',
    name: 'Mesure & maîtrise statistique',
    short: 'Mesure',
    color: '#ca8a04',
    description: 'Décider sur des faits chiffrés et distinguer le signal du bruit.',
  },
  {
    id: 'management',
    name: 'Management & culture',
    short: 'Management',
    color: '#dc2626',
    description: "Aligner, animer et faire vivre l'amélioration au quotidien.",
  },
  {
    id: 'avance',
    name: 'Amélioration avancée / Six Sigma',
    short: 'Avancé',
    color: '#4f46e5',
    description: 'Méthodes plus exigeantes pour des systèmes déjà stables et matures.',
  },
];

export const levels = [
  { level: 1, name: 'Fondamentaux', hint: 'À déployer en premier, peu de prérequis.' },
  { level: 2, name: 'Structuration', hint: 'Met de l’ordre et de la méthode.' },
  { level: 3, name: 'Optimisation', hint: 'Améliore un système déjà stable.' },
  { level: 4, name: 'Excellence', hint: 'Pratiques avancées / culture mature.' },
];

export const familyById = Object.fromEntries(families.map((f) => [f.id, f]));

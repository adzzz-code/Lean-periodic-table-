// Schéma visuel par concept (slug → { type, ...params }), rendu au build par
// src/components/ConceptVisual.astro — zéro JS client. Chaque concept DOIT avoir
// un schéma (vérifié par `npm run validate`).
// Types : cycle · steps · chain · fishbone · bars · curve · compare · flow ·
//         house · matrix · grid · spaghetti · formula

export const visuals = {
  // Mindset & principes
  'genchi-genbutsu': {
    type: 'steps',
    steps: ['Aller voir', 'Observer les faits', 'Écouter', 'Décider'],
  },
  'respect-personnes': {
    type: 'steps',
    steps: ['Écouter', 'Impliquer', 'Développer', 'Faire confiance'],
  },
  'amelioration-continue': {
    type: 'cycle',
    steps: ['Petit pas', 'Mesure', 'Ancrage', 'Pas suivant'],
  },
  hansei: {
    type: 'cycle',
    steps: ['Agir', 'Prendre du recul', 'Tirer les leçons', 'Réessayer mieux'],
  },
  nemawashi: {
    type: 'steps',
    steps: ['Identifier les concernés', 'Consulter un à un', 'Ajuster', 'Décider ensemble'],
  },
  'pensee-long-terme': {
    type: 'compare',
    left: {
      title: 'Court terme',
      lines: ['Encaisser vite', 'Qualité sacrifiée', 'Confiance érodée'],
    },
    right: {
      title: 'Long terme',
      lines: ['Réputation protégée', 'Clients fidèles', 'Marge durable'],
    },
  },
  'cinq-g': {
    type: 'steps',
    steps: [
      'Genba — terrain',
      "Genbutsu — l'objet",
      'Genjitsu — les faits',
      'Genri — principes',
      'Gensoku — standards',
    ],
  },

  // Voix du client & valeur
  valeur: {
    type: 'bars',
    bars: [
      { label: 'Ce que le client paie', value: 30, accent: true },
      { label: 'Activités sans valeur ajoutée', value: 70 },
    ],
    note: 'Le gisement est dans la part grise : la réduire, pas l’accélérer.',
  },
  'voix-client': {
    type: 'steps',
    steps: [
      '3 questions ouvertes',
      'Noter les verbatims',
      'Repérer les répétitions',
      'Traduire en actions',
    ],
  },
  gemba: {
    type: 'steps',
    steps: ['Y aller', 'Observer le flux réel', 'Écouter ceux qui font', 'Décider sur des faits'],
  },
  gaspillages: {
    type: 'flow',
    nodes: [
      { label: 'Mura — irrégularité' },
      { label: 'Muri — surcharge' },
      { label: 'Muda — gaspillages', accent: true },
    ],
    note: 'L’irrégularité et la surcharge fabriquent le gaspillage.',
  },
  ctq: {
    type: 'steps',
    steps: ['Besoin client', 'Exigence formulée', 'Critère mesurable', 'Contrôle simple'],
  },
  sipoc: {
    type: 'steps',
    steps: ['Fournisseurs', 'Entrées', 'Processus (5-7 étapes)', 'Sorties', 'Clients'],
  },
  kano: { type: 'curve', kind: 'kano' },
  qfd: {
    type: 'steps',
    steps: [
      'Voix du client',
      'Quoi (besoins)',
      'Comment (réponses)',
      'Priorités',
      'Cibles techniques',
    ],
  },

  // Flux & système de production
  vsm: {
    type: 'flow',
    nodes: [
      { label: 'Commande' },
      { label: 'Étape A' },
      { label: 'Étape B' },
      { label: 'Livraison' },
    ],
    waits: true,
    note: 'Le délai dort dans les triangles : les attentes entre les étapes.',
  },
  kanban: {
    type: 'compare',
    left: {
      title: 'Flux poussé',
      lines: ['On produit « au cas où »', 'Stocks et invendus', 'Ruptures surprises'],
    },
    right: {
      title: 'Flux tiré (kanban)',
      lines: ['Le vide déclenche le réassort', 'Stock minimal piloté', 'Ruptures rares'],
    },
  },
  'takt-time': {
    type: 'formula',
    a: { label: 'Temps disponible', value: '480 min' },
    b: { label: 'Demande client', value: '40 pièces' },
    result: { label: 'Takt time', value: '12 min / pièce' },
  },
  jit: {
    type: 'house',
    roof: 'Livrer juste ce qu’il faut',
    pillars: ['Flux tiré (kanban)', 'Rythme (takt, heijunka)'],
    base: 'Processus stables · fournisseurs fiables · qualité (jidoka)',
  },
  smed: {
    type: 'compare',
    left: {
      title: 'Avant',
      lines: ['Tout machine arrêtée', 'Recherches d’outillage', 'Arrêt : 60 min'],
    },
    right: {
      title: 'Après SMED',
      lines: ['Préparation en marche', 'Tout à portée de main', 'Arrêt : 25 min'],
    },
  },
  heijunka: {
    type: 'bars',
    groups: [
      { title: 'À-coups', bars: [6, 1, 7, 2] },
      { title: 'Lissé', bars: [4, 4, 4, 4] },
    ],
    note: 'Même volume total — sans les pics qui épuisent ni les creux qui coûtent.',
  },
  'diagramme-spaghetti': { type: 'spaghetti' },
  yamazumi: {
    type: 'bars',
    groups: [
      { title: 'Déséquilibré', bars: [14, 7, 10] },
      { title: 'Équilibré (≤ takt)', bars: [11, 10, 10] },
    ],
    note: 'Même travail, mieux réparti — le goulot tombe de 14 à 11 min.',
  },
  'milk-run': {
    type: 'compare',
    left: {
      title: 'Trajets séparés',
      lines: ['Un aller-retour par point', 'Camion à moitié vide', 'Beaucoup de kilomètres'],
    },
    right: {
      title: 'Milk run',
      lines: [
        'Une tournée, plusieurs points',
        'Petites quantités fréquentes',
        'Kilomètres réduits',
      ],
    },
  },

  // Stabilité & qualité
  'cinq-s': {
    type: 'steps',
    steps: ['1. Trier', '2. Ranger', '3. Nettoyer', '4. Standardiser', '5. Suivre'],
  },
  'travail-standardise': {
    type: 'cycle',
    steps: ['Standard actuel', 'Amélioration (kaizen)', 'Nouveau standard'],
  },
  andon: {
    type: 'steps',
    steps: ['Anomalie détectée', 'Signal immédiat', 'Aide rapide', 'Cause traitée'],
  },
  'poka-yoke': {
    type: 'compare',
    left: {
      title: 'Détection (après coup)',
      lines: ['L’erreur arrive', 'On la découvre plus tard', 'Retouche et coût'],
    },
    right: {
      title: 'Prévention (poka-yoke)',
      lines: ['L’erreur est impossible', 'Ou visible immédiatement', 'Zéro retouche'],
    },
  },
  jidoka: {
    type: 'steps',
    steps: ['Détecter l’anomalie', 'Arrêter', 'Corriger', 'Traiter la cause'],
  },
  tpm: { type: 'cycle', steps: ['Nettoyer', 'Inspecter', 'Détecter tôt', 'Prévenir'] },
  amdec: {
    type: 'matrix',
    xLabel: 'Fréquence →',
    yLabel: '← Gravité',
    quadrants: ['Sécuriser (plan B)', 'Traiter en priorité', 'Accepter', 'Surveiller / réduire'],
    accent: 1,
  },

  // Résolution de problèmes
  pdca: {
    type: 'cycle',
    steps: ['Plan — préparer', 'Do — tester', 'Check — vérifier', 'Act — ancrer'],
  },
  'cinq-pourquoi': {
    type: 'chain',
    steps: [
      'Problème visible',
      '« Pourquoi ? » ×5 — en vérifiant chaque réponse',
      'Cause racine actionnable',
    ],
  },
  ishikawa: {
    type: 'fishbone',
    branches: ['Matière', 'Méthode', 'Main-d’œuvre', 'Matériel', 'Milieu'],
    effect: 'Problème',
  },
  a3: {
    type: 'steps',
    steps: ['Contexte', 'Objectif', 'Analyse des causes', 'Contre-mesures', 'Suivi'],
  },
  dmaic: { type: 'steps', steps: ['Définir', 'Mesurer', 'Analyser', 'Innover', 'Contrôler'] },
  'huit-d': {
    type: 'steps',
    steps: [
      'Équipe & problème (D1-D2)',
      'Confinement (D3)',
      'Cause racine (D4)',
      'Corriger & prévenir (D5-D7)',
      'Clôture (D8)',
    ],
  },

  // Mesure & maîtrise statistique
  pareto: {
    type: 'bars',
    bars: [
      { label: 'Cause A', value: 45, accent: true },
      { label: 'Cause B', value: 25, accent: true },
      { label: 'C', value: 12 },
      { label: 'D', value: 8 },
      { label: 'E', value: 6 },
      { label: 'F', value: 4 },
    ],
    note: '2 causes sur 6 ≈ 70 % des effets : commencez là.',
  },
  kpi: {
    type: 'steps',
    steps: [
      'Choisir 3 chiffres vitaux',
      'Les afficher',
      'Les regarder chaque semaine',
      'Réagir aux dérives',
    ],
  },
  oee: {
    type: 'bars',
    bars: [
      { label: 'Temps total', value: 100 },
      { label: '− arrêts', value: 90 },
      { label: '− ralentissements', value: 77 },
      { label: '− défauts = OEE', value: 73, accent: true },
    ],
    note: 'Les pertes se multiplient : 90 % × 85 % × 95 % ≈ 73 %.',
  },
  spc: { type: 'curve', kind: 'control' },

  // Management & culture
  'management-visuel': {
    type: 'compare',
    left: {
      title: 'Invisible',
      lines: ['Info dans les têtes', 'Statut par e-mails', 'On découvre tard'],
    },
    right: {
      title: 'Visible',
      lines: ['Tableau partagé', 'État vu d’un coup d’œil', 'On réagit tôt'],
    },
  },
  kaizen: {
    type: 'cycle',
    steps: ['Cibler un irritant', 'Améliorer en équipe', 'Mesurer le gain', 'Standardiser'],
  },
  'leader-standard-work': {
    type: 'cycle',
    steps: ['Tournée terrain', 'Point d’équipe', 'Vérifier les standards', 'Coacher'],
  },
  'hoshin-kanri': {
    type: 'chain',
    steps: [
      'Vision / cap',
      '1 à 3 priorités annuelles',
      'Actions d’équipe trimestrielles',
      'Revue régulière (catchball)',
    ],
  },
  obeya: {
    type: 'matrix',
    quadrants: ['Objectifs & jalons', 'Avancement', 'Problèmes ouverts', 'Plan d’action'],
  },
  'matrice-competences': { type: 'grid' },
  kamishibai: {
    type: 'cycle',
    steps: ['Tirer une carte', 'Vérifier le standard', 'Vert ou rouge', 'Corriger si écart'],
  },

  // Amélioration avancée / Six Sigma
  kata: {
    type: 'cycle',
    steps: ['État cible', 'Obstacle du moment', 'Expérience', 'Apprentissage'],
  },
  'theorie-contraintes': {
    type: 'flow',
    nodes: [
      { label: 'Étape A — 10/h' },
      { label: 'Étape B — goulot, 4/h', accent: true },
      { label: 'Étape C — 8/h' },
    ],
    note: 'Le débit total = 4/h. Améliorer A ou C ne change rien : traitez B.',
  },
  'six-sigma': {
    type: 'compare',
    left: {
      title: 'Processus variable',
      lines: ['Résultats dispersés', 'Défauts fréquents', 'Client méfiant'],
    },
    right: {
      title: 'Processus maîtrisé',
      lines: ['Résultats resserrés', 'Défauts rares', 'Promesse tenue'],
    },
  },
  jishuken: {
    type: 'cycle',
    steps: ['Problème difficile', 'Atelier encadré', 'Apprentissage', 'Standard relevé'],
  },
};

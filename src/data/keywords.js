// Mots-clés de recherche par concept (slug → termes). La cible ne connaît pas le Lean :
// elle cherche avec SES mots (« rangement », « goulot », « stock »…), pas ceux du jargon.
// Ces termes alimentent la recherche du tableau (en plus du nom, symbole et intitulé).
// Séparé de concepts.js pour garder la donnée de contenu lisible.
// Toute fiche doit avoir ≥ 1 mot-clé (vérifié par `npm run validate`).

export const keywords = {
  // Mindset & principes
  'genchi-genbutsu': ['aller voir', 'terrain', 'observation', 'constater', 'faits'],
  'respect-personnes': ['équipe', 'adhésion', 'implication', 'motivation', 'confiance'],
  'amelioration-continue': ['petits pas', 'progrès', 'habitude', 'régularité', 'kaizen'],
  hansei: ['bilan', 'réflexion', 'autocritique', 'leçons', "retour d'expérience", 'rétrospective'],
  nemawashi: ['consensus', 'consultation', 'concertation', 'préparer une décision', 'adhésion'],
  'pensee-long-terme': ['vision', 'stratégie', 'cap', 'durable', 'court-termisme'],

  // Voix du client & valeur
  valeur: ['valeur ajoutée', 'utile', 'ce que le client paie', 'priorités'],
  'voix-client': ['voc', 'besoins', 'attentes', 'écoute client', 'enquête', 'feedback'],
  gemba: ['terrain', 'atelier', 'aller voir', 'observation'],
  gaspillages: ['muda', 'mura', 'muri', 'pertes', 'temps perdu', '7 gaspillages', 'déchets'],
  ctq: ['exigence', 'critère mesurable', 'spécification', 'norme', 'critique qualité'],
  sipoc: ['processus', 'cadrage', 'périmètre', "vue d'ensemble", 'fournisseurs', 'clients'],
  kano: ['attentes', 'satisfaction', 'basique', 'différenciation', 'offre', 'avis clients'],
  qfd: [
    'besoins client',
    'conception',
    'cahier des charges',
    'maison de la qualité',
    'traduire les attentes',
  ],
  'cinq-g': ['terrain', 'faits réels', 'aller voir', 'principes', 'objet réel'],

  // Flux & système de production
  vsm: ['cartographie', 'flux de valeur', 'processus', 'délais', 'attentes', 'value stream'],
  kanban: [
    'stock',
    'réassort',
    'flux tiré',
    'réapprovisionnement',
    'deux bacs',
    'rupture',
    'en-cours',
  ],
  'takt-time': ['cadence', 'rythme', 'demande', 'capacité'],
  jit: ['juste-à-temps', 'just in time', 'stock', 'trésorerie', 'flux'],
  smed: ['changement de série', 'réglage', 'préparation', 'setup', 'temps de changement'],
  heijunka: ['lissage', 'charge', 'à-coups', 'coups de feu', 'variabilité', 'planification'],
  'diagramme-spaghetti': [
    'déplacements',
    'trajets',
    'allers-retours',
    'implantation',
    'plan',
    'marche',
  ],
  yamazumi: ['équilibrage', 'charge', 'postes', 'répartition', 'goulot', 'temps de cycle'],
  'milk-run': ['tournée', 'livraison', 'ramassage', 'logistique', 'transport', 'approvisionnement'],

  // Stabilité & qualité
  'cinq-s': ['rangement', 'ordre', 'tri', 'organisation', 'propreté', 'désordre', 'chercher'],
  'travail-standardise': [
    'standard',
    'mode opératoire',
    'procédure',
    'check-list',
    'bonne façon',
    'régularité',
  ],
  andon: ['alerte', 'signal', 'incident', 'incendies', 'urgence', 'remontée de problème'],
  'poka-yoke': ['détrompeur', 'anti-erreur', 'erreur', 'oubli', 'sécuriser'],
  jidoka: ['arrêt au défaut', 'qualité à la source', 'autonomation', 'défauts'],
  tpm: ['panne', 'maintenance', 'entretien', 'machine', 'équipement'],
  amdec: ['risques', 'défaillance', 'prévention', 'fmea', 'anticiper', 'gravité', 'criticité'],

  // Résolution de problèmes
  pdca: ['roue de deming', 'tester', 'expérimenter', 'plan do check act', 'essai'],
  'cinq-pourquoi': ['cause racine', 'pourquoi', 'analyse', 'récidive', 'problème qui revient'],
  ishikawa: ['arête de poisson', 'causes', 'effet', 'diagramme', '5m'],
  a3: ['une page', 'résolution structurée', 'rapport', 'synthèse', "plan d'action"],
  dmaic: ['six sigma', 'projet', 'variation', 'mesure', 'amélioration structurée'],
  'huit-d': ['réclamation', 'client mécontent', 'non-conformité', 'action corrective'],
  qqoqccp: ['poser le problème', 'décrire', 'questions', '5w2h', 'cadrage', 'qui quoi où quand'],

  // Mesure & maîtrise statistique
  pareto: ['80/20', 'priorités', 'classement', 'essentiel', 'éparpillement'],
  kpi: ['indicateur', 'tableau de bord', 'chiffres', 'pilotage', 'mesure'],
  oee: ['trs', 'rendement', 'machine', 'disponibilité', 'micro-arrêts', 'performance'],
  spc: ['carte de contrôle', 'msp', 'variation', 'dérive', 'statistique', 'stabilité'],
  'feuille-releves': ['compter', 'relevé', 'cocher', 'fréquence', 'faits', 'pointage'],
  'matrice-impact-effort': [
    'prioriser',
    'choisir',
    'gains rapides',
    'quick win',
    'tri',
    'arbitrer',
  ],
  capabilite: ['cp', 'cpk', 'tolérance', 'dispersion', 'garantie', 'audit qualité'],

  // Management & culture
  'management-visuel': ['tableau', 'affichage', 'visible', 'suivi', 'réunion', 'communication'],
  kaizen: ['chantier', 'amélioration', 'irritants', 'équipe', 'atelier'],
  'leader-standard-work': ['routine', 'rituels', 'tournée', 'manager', 'dirigeant', 'régularité'],
  'hoshin-kanri': ['stratégie', 'objectifs', 'déploiement', 'alignement', 'priorités annuelles'],
  obeya: ['salle de pilotage', 'projet', 'mur', 'affichage', 'avancement', 'coordination'],
  'matrice-competences': [
    'polyvalence',
    'formation',
    'compétences',
    'iluo',
    'remplacement',
    'personne clé',
    'absence',
  ],
  kamishibai: ['audit', 'cartes', 'contrôle', 'standards', 'tournée', 'vérification'],
  'point-quotidien': ['réunion', 'debout', 'stand-up', 'rituel', '10 minutes', 'huddle', 'équipe'],
  'systeme-suggestions': ['idées', 'boîte à idées', 'suggestions', 'participation', 'teian'],

  // Amélioration avancée / Six Sigma
  kata: ['routine', 'coaching', 'entraînement', 'habitude', 'amélioration durable'],
  'theorie-contraintes': ['goulot', 'goulet', 'contrainte', 'capacité', 'retard', 'le but', 'toc'],
  'six-sigma': ['variation', 'défauts', 'qualité', 'statistique', 'ceintures', 'black belt'],
  jishuken: ['chantier', 'atelier', 'formation', 'management', 'problème difficile', 'autonomie'],
  yokoten: ['répliquer', 'déployer', 'partager', 'bonnes pratiques', 'généraliser'],
  kaikaku: ['rupture', 'transformation', 'refonte', 'changement radical', 'réorganisation'],
};

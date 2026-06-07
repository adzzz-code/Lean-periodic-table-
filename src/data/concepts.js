// Source de vérité — concepts ("éléments") du tableau périodique.
// Gabarit (cf. docs/PRD.md §4) :
//   number, slug, symbol, name, fullName, family, level
//   definition, purpose
//   limits: { notFor, whenNot, pitfalls }
//   pme:    { why, firstStep, example, commonMistake }
//   relevance: { impact: 'high'|'medium'|'low', effort: 'low'|'medium'|'high' }
//   pmeStarter: bool  (mis en avant en "mode TPE/PME")
//   practitioner: { deeper, prerequisites: [], successIndicators: [] }
//   related: [slug]

export const concepts = [
  // ───────────────────────── Mindset & principes ─────────────────────────
  {
    number: 1,
    slug: 'genchi-genbutsu',
    symbol: 'Gg',
    name: 'Genchi Genbutsu',
    fullName: 'Genchi Genbutsu — aller voir sur le terrain',
    family: 'mindset',
    level: 1,
    definition: 'Aller observer soi-même, là où le travail se fait, avant de décider.',
    purpose: 'Décider sur des faits constatés plutôt que sur des rapports ou des suppositions.',
    limits: {
      notFor:
        "Ce n'est pas une méthode d'analyse : observer ne remplace pas la mesure ni la résolution structurée.",
      whenNot: 'Inutile de se déplacer pour un fait déjà parfaitement documenté et mesuré.',
      pitfalls: "Confondre 'passer voir' avec micro-management ou surveillance des personnes.",
    },
    pme: {
      why: "Le dirigeant d'une petite structure est déjà proche du terrain : formaliser le réflexe d'observer évite de piloter depuis un tableur.",
      firstStep:
        'Aller passer 20 minutes à observer un processus concret (préparation de commande, accueil client) sans intervenir.',
      example:
        'Un gérant de restaurant observe le service du midi et découvre que la lenteur vient du passage en caisse, pas de la cuisine comme il le croyait.',
      commonMistake: 'Observer puis imposer sa solution sans écouter ceux qui font le travail.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Base culturelle du Toyota Way ; alimente le Gemba Walk et le management visuel.',
      prerequisites: ["Posture d'humilité et d'écoute"],
      successIndicators: [
        'Décisions justifiées par des faits observés',
        "Moins d'allers-retours sur des décisions mal informées",
      ],
    },
    related: ['gemba', 'respect-personnes', 'leader-standard-work'],
  },
  {
    number: 2,
    slug: 'respect-personnes',
    symbol: 'Rp',
    name: 'Respect des personnes',
    fullName: 'Respect des personnes',
    family: 'mindset',
    level: 1,
    definition: "Considérer que ceux qui font le travail sont les mieux placés pour l'améliorer.",
    purpose: 'Construire une amélioration durable portée par les équipes, pas subie par elles.',
    limits: {
      notFor:
        "Ce n'est pas du laisser-faire ni l'absence d'exigence : respect = attentes claires + soutien.",
      whenNot: 'Ne dispense pas de trancher quand une décision relève de la direction.',
      pitfalls:
        "Réduire le 'respect' à des avantages sociaux au lieu de développer les compétences et l'autonomie.",
    },
    pme: {
      why: "Dans une petite équipe polyvalente, l'adhésion fait toute la différence : une amélioration imposée ne survit pas.",
      firstStep:
        'Demander à chaque collaborateur les 3 irritants qui lui font perdre du temps, et en traiter un.',
      example:
        "Une PME implique ses deux préparateurs dans la réorganisation de l'atelier : ils l'entretiennent ensuite spontanément.",
      commonMistake:
        "Lancer des chantiers d'amélioration 'sur' les gens au lieu de les faire 'avec' eux.",
    },
    relevance: { impact: 'high', effort: 'medium' },
    pmeStarter: true,
    practitioner: {
      deeper: "Avec l'amélioration continue, l'un des deux piliers du Toyota Way.",
      prerequisites: ["Sécurité psychologique minimale dans l'équipe"],
      successIndicators: ["Suggestions d'amélioration venant du terrain", 'Faible turnover'],
    },
    related: ['amelioration-continue', 'genchi-genbutsu', 'kaizen'],
  },
  {
    number: 3,
    slug: 'amelioration-continue',
    symbol: 'Ac',
    name: 'Amélioration continue',
    fullName: 'Amélioration continue (Kaizen, état d’esprit)',
    family: 'mindset',
    level: 1,
    definition:
      "Chercher chaque jour de petites améliorations plutôt que d'attendre la grande refonte.",
    purpose: "Faire progresser l'organisation par petits pas réguliers, cumulés dans le temps.",
    limits: {
      notFor:
        'Ne remplace pas une rupture stratégique (kaikaku) quand le modèle entier est à revoir.',
      whenNot: "Inutile d'optimiser un processus voué à disparaître.",
      pitfalls:
        "Multiplier les petites actions sans cap ni mesure : de l'agitation, pas du progrès.",
    },
    pme: {
      why: "Pas besoin de budget : c'est le levier le plus accessible quand on a peu de moyens.",
      firstStep: "Instaurer un point hebdo de 15 min : 'qu'est-ce qu'on améliore cette semaine ?'.",
      example:
        'Un artisan note chaque vendredi une micro-amélioration testée ; en un an, 40 ajustements cumulés.',
      commonMistake: "Vouloir tout changer d'un coup et s'épuiser, au lieu d'ancrer une habitude.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: "Se structure via PDCA et le Kata d'amélioration ; s'oppose/complète le kaikaku.",
      prerequisites: ['Rituel régulier', "Droit à l'erreur"],
      successIndicators: ["Nombre d'améliorations implémentées", 'Problèmes qui ne reviennent pas'],
    },
    related: ['pdca', 'kaizen', 'kata'],
  },
  {
    number: 4,
    slug: 'hansei',
    symbol: 'Hs',
    name: 'Hansei',
    fullName: 'Hansei — réflexion critique',
    family: 'mindset',
    level: 3,
    definition:
      "Prendre un temps de recul honnête pour reconnaître ce qui n'a pas marché et en tirer des leçons.",
    purpose: 'Transformer les échecs et les succès en apprentissage explicite.',
    limits: {
      notFor:
        "Ce n'est pas la recherche d'un coupable ; ce n'est pas non plus l'auto-flagellation.",
      whenNot: 'Un débriefing systématique sur des sujets triviaux finit par lasser.',
      pitfalls: 'Faire un hansei de façade qui ne débouche sur aucune action.',
    },
    pme: {
      why: 'Une petite structure rejoue souvent les mêmes erreurs faute de temps de bilan : 30 minutes suffisent à casser le cycle.',
      firstStep:
        "Après chaque projet ou gros chantier, se poser : qu'a-t-on appris ? que ferait-on différemment ?",
      example:
        "Après une livraison ratée, l'équipe identifie un manque de check-list et en crée une.",
      commonMistake: 'Sauter le bilan dès que ça va mieux et ne garder aucune trace.',
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper: "Pilier de la section 'agir/standardiser' du PDCA et du retour d'expérience A3.",
      prerequisites: ['Culture sans blâme'],
      successIndicators: ['Leçons documentées et réutilisées', 'Erreurs non répétées'],
    },
    related: ['pdca', 'a3', 'amelioration-continue'],
  },
  {
    number: 5,
    slug: 'nemawashi',
    symbol: 'Nw',
    name: 'Nemawashi',
    fullName: 'Nemawashi — préparer la décision par consensus',
    family: 'mindset',
    level: 3,
    definition:
      "Préparer une décision en amont avec les parties prenantes pour qu'elle soit adoptée sans heurt.",
    purpose: 'Obtenir une décision solide et réellement appliquée, parce que partagée.',
    limits: {
      notFor:
        'Ne convient pas aux urgences ni aux décisions triviales : ce serait une perte de temps.',
      whenNot:
        'À éviter quand la lenteur du consensus coûte plus cher que le risque de la décision.',
      pitfalls: "Dériver vers la recherche d'unanimité ou la dilution des responsabilités.",
    },
    pme: {
      why: "Dans une petite équipe, une décision rejetée en silence bloque tout : consulter avant d'annoncer évite le sabotage passif.",
      firstStep:
        "Avant d'annoncer un changement, en parler individuellement aux 2-3 personnes les plus impactées.",
      example:
        'Avant de changer de logiciel de caisse, le gérant en discute avec les vendeurs et ajuste son choix.',
      commonMistake: 'Confondre concertation et réunionite : tout faire valider par tout le monde.',
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Souvent associé au Hoshin Kanri (catchball) pour aligner les objectifs.',
      prerequisites: ['Relations de confiance'],
      successIndicators: ['Décisions appliquées sans résistance', 'Moins de retours en arrière'],
    },
    related: ['hoshin-kanri', 'respect-personnes'],
  },
  {
    number: 6,
    slug: 'pensee-long-terme',
    symbol: 'Lt',
    name: 'Pensée long terme',
    fullName: 'Décider sur le long terme',
    family: 'mindset',
    level: 4,
    definition:
      "Fonder les décisions sur la valeur à long terme, même au prix d'objectifs financiers court terme.",
    purpose: "Construire une organisation résiliente plutôt que d'optimiser le trimestre.",
    limits: {
      notFor:
        "Ne doit pas servir d'excuse pour ignorer la trésorerie : une TPE doit d'abord survivre.",
      whenNot: 'À nuancer fortement quand la survie à court terme est en jeu.',
      pitfalls:
        "Justifier l'immobilisme ou des investissements jamais rentabilisés au nom du 'long terme'.",
    },
    pme: {
      why: "Tentant de sacrifier la qualité pour encaisser vite ; le long terme protège la réputation, capital n°1 d'une petite entreprise.",
      firstStep:
        "Pour chaque grosse décision, se demander : 'qu'est-ce que ça donne dans 3 ans ?'.",
      example: 'Un artisan refuse un chantier bâclé qui aurait nui à sa réputation locale.',
      commonMistake: 'Tout arbitrer à la marge immédiate et éroder la confiance des clients.',
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Principe n°1 du Toyota Way ; cadre les arbitrages du Hoshin Kanri.',
      prerequisites: ['Vision claire'],
      successIndicators: ['Cohérence des décisions dans le temps', 'Fidélité clients'],
    },
    related: ['hoshin-kanri', 'respect-personnes'],
  },

  // ─────────────────────── Voix du client & valeur ───────────────────────
  {
    number: 7,
    slug: 'valeur',
    symbol: 'Va',
    name: 'Valeur',
    fullName: 'Valeur (du point de vue client)',
    family: 'client-valeur',
    level: 1,
    definition: 'Ce pour quoi le client est réellement prêt à payer.',
    purpose: "Distinguer les activités qui créent de la valeur de celles qui n'en créent pas.",
    limits: {
      notFor:
        "Ne dit pas comment supprimer le gaspillage : c'est un critère de tri, pas une méthode.",
      whenNot:
        "Difficile à appliquer tel quel sur des activités réglementaires obligatoires (valeur 'indirecte').",
      pitfalls: 'Décréter la valeur depuis le bureau au lieu de la valider avec de vrais clients.',
    },
    pme: {
      why: "Clarifier ce que le client valorise évite de gaspiller des heures sur ce qu'il ne remarque même pas.",
      firstStep:
        "Lister les 5 dernières tâches d'une journée et marquer celles que le client paierait volontiers.",
      example:
        "Un fleuriste réalise que le client valorise le conseil, pas l'emballage sophistiqué qui lui prend 10 min.",
      commonMistake: "Confondre 'ce dont je suis fier' avec 'ce que le client veut'.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Point de départ du Lean (Womack & Jones) ; alimente la VSM (VA/NVA).',
      prerequisites: ['Connaissance des clients'],
      successIndicators: ['Part du temps en valeur ajoutée', 'Offre recentrée'],
    },
    related: ['voix-client', 'gaspillages', 'vsm'],
  },
  {
    number: 8,
    slug: 'voix-client',
    symbol: 'Vc',
    name: 'Voix du client',
    fullName: 'Voix du client (VOC)',
    family: 'client-valeur',
    level: 1,
    definition: 'Recueil structuré des besoins et attentes réels des clients.',
    purpose: 'Aligner produits et processus sur ce qui compte vraiment pour le client.',
    limits: {
      notFor:
        "Les clients expriment des symptômes, pas toujours la solution : la VOC ne dicte pas le 'comment'.",
      whenNot: 'Sur-sonder une clientèle déjà bien comprise apporte peu.',
      pitfalls: "Traiter les avis les plus bruyants comme représentatifs de l'ensemble.",
    },
    pme: {
      why: 'Le dirigeant parle directement aux clients : il a accès à une VOC riche que les grands groupes paient cher.',
      firstStep: 'Poser 3 questions ouvertes aux 10 prochains clients et noter les verbatims.',
      example:
        'Un coiffeur découvre que ses clients veulent surtout réserver en ligne, pas un nouveau service.',
      commonMistake: 'Supposer connaître le besoin sans jamais le vérifier auprès des clients.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Se traduit en CTQ pour rendre les attentes mesurables ; entrée du QFD.',
      prerequisites: ['Accès aux clients'],
      successIndicators: ['Besoins traduits en critères mesurables', 'Satisfaction client'],
    },
    related: ['valeur', 'ctq', 'gemba'],
  },
  {
    number: 9,
    slug: 'gemba',
    symbol: 'Gb',
    name: 'Gemba',
    fullName: 'Gemba — le lieu réel',
    family: 'client-valeur',
    level: 1,
    definition: 'Le terrain, là où la valeur est créée et où les problèmes se voient vraiment.',
    purpose: 'Ancrer décisions et améliorations dans la réalité du travail.',
    limits: {
      notFor: "Le Gemba se constate, il ne s'analyse pas tout seul : il faut ensuite une méthode.",
      whenNot:
        "Pour un problème purement administratif/données, le 'terrain' peut être un écran ou un fichier.",
      pitfalls: 'Transformer la présence terrain en contrôle descendant.',
    },
    pme: {
      why: 'Le terrain est à portée de main : profitez-en, là où une grande entreprise doit organiser des visites.',
      firstStep:
        "Choisir un endroit où 'ça coince' et y rester 15 minutes à observer le flux réel.",
      example:
        "Une gérante de boutique constate sur place la file d'attente aux essayages et déplace une cabine.",
      commonMistake: 'Piloter à distance via le logiciel sans jamais regarder le flux réel.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Support du Gemba Walk et du management visuel ; lié à Genchi Genbutsu.',
      prerequisites: ['Disponibilité régulière'],
      successIndicators: ['Problèmes détectés tôt', 'Décisions ancrées dans le réel'],
    },
    related: ['genchi-genbutsu', 'management-visuel', 'voix-client'],
  },
  {
    number: 10,
    slug: 'gaspillages',
    symbol: 'Md',
    name: 'Gaspillages',
    fullName: 'Gaspillages — Muda, Mura, Muri (les 3M)',
    family: 'client-valeur',
    level: 2,
    definition:
      "Tout ce qui consomme des ressources sans créer de valeur (Muda), l'irrégularité (Mura) et la surcharge (Muri).",
    purpose: "Repérer et éliminer systématiquement ce qui n'apporte rien au client.",
    limits: {
      notFor:
        "Toute activité sans valeur directe n'est pas supprimable (sécurité, légal) : on parle alors de 'gaspillage nécessaire'.",
      whenNot:
        "Chasser le gaspillage sur un processus instable, c'est optimiser le chaos : stabiliser d'abord.",
      pitfalls: "Couper du 'gras' au point de fragiliser le système (sous-effectif, zéro marge).",
    },
    pme: {
      why: "Les 7 gaspillages (attentes, déplacements, stocks, retouches…) coûtent cher et sont invisibles tant qu'on ne les nomme pas.",
      firstStep: "Repérer une attente récurrente dans la journée et chronométrer ce qu'elle coûte.",
      example:
        'Un garage découvre que les mécaniciens marchent 2 km/jour pour chercher des outils mal rangés.',
      commonMistake:
        "Vouloir tout éliminer d'un coup au lieu de cibler le gaspillage le plus coûteux.",
    },
    relevance: { impact: 'high', effort: 'medium' },
    pmeStarter: true,
    practitioner: {
      deeper:
        '7 (ou 8) Muda ; Mura et Muri sont souvent les causes des Muda. Cartographiés via VSM.',
      prerequisites: ['Notion de valeur (Va)'],
      successIndicators: ['Temps de traversée réduit', 'Moins de stocks / retouches'],
    },
    related: ['valeur', 'vsm', 'heijunka'],
  },
  {
    number: 11,
    slug: 'ctq',
    symbol: 'Ct',
    name: 'CTQ',
    fullName: 'Critique pour la qualité (Critical To Quality)',
    family: 'client-valeur',
    level: 3,
    definition: "Traduction d'un besoin client en caractéristiques mesurables et tolérancées.",
    purpose: 'Rendre les attentes clients objectives et pilotables.',
    limits: {
      notFor:
        'Un CTQ ne crée pas la valeur, il la mesure : mal relié à la VOC, on mesure le mauvais critère.',
      whenNot: 'Surdimensionné pour une TPE dont les attentes clients sont simples et connues.',
      pitfalls: "Empiler des CTQ jusqu'à mesurer ce qui est facile plutôt que ce qui compte.",
    },
    pme: {
      why: "Utile dès qu'on veut tenir une promesse précise (délai, fraîcheur, finition) sans 'au feeling'.",
      firstStep:
        "Transformer une promesse client floue en un nombre vérifiable (ex. 'livré sous 48 h').",
      example:
        "Un traiteur fixe 'plats servis à plus de 63 °C' comme CTQ vérifié à chaque service.",
      commonMistake: 'Mesurer des indicateurs internes sans lien avec ce que le client perçoit.',
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Maillon VOC → CTQ → spécifications ; central dans Six Sigma (phase Define).',
      prerequisites: ['VOC structurée'],
      successIndicators: ['Spécifications alignées sur le client', 'Capabilité mesurable'],
    },
    related: ['voix-client', 'six-sigma', 'spc'],
  },

  // ───────────────────── Flux & système de production ─────────────────────
  {
    number: 12,
    slug: 'vsm',
    symbol: 'Vs',
    name: 'VSM',
    fullName: 'Value Stream Mapping (cartographie de la chaîne de valeur)',
    family: 'flux',
    level: 2,
    definition:
      "Cartographie de bout en bout d'un flux (matière + information) avec ses temps et ses stocks.",
    purpose: 'Voir où le temps se perd et concevoir un flux cible plus fluide.',
    limits: {
      notFor:
        "Ce n'est pas un plan d'action : une belle carte sans chantier qui suit ne change rien.",
      whenNot: 'Disproportionné pour un processus simple à une seule étape.',
      pitfalls:
        "Cartographier dans le détail au lieu de viser le flux global ; carte jamais suivie d'effet.",
    },
    pme: {
      why: "Même sur un tableau blanc, voir tout le parcours d'une commande révèle des attentes énormes entre étapes.",
      firstStep:
        "Dessiner sur une feuille les étapes d'une commande type avec, pour chacune, le temps de travail et le temps d'attente.",
      example: 'Une PME découvre que sur 6 jours de délai, seules 4 heures sont du travail réel.',
      commonMistake: "Faire la carte une fois et ne jamais l'utiliser pour prioriser des actions.",
    },
    relevance: { impact: 'high', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Distingue carte actuelle / future ; ratio temps VA / temps total ; base du plan kaizen.',
      prerequisites: ['Notion de valeur et de gaspillage'],
      successIndicators: ['Lead time réduit', "Plan d'actions issu de la carte cible"],
    },
    related: ['gaspillages', 'takt-time', 'kanban'],
  },
  {
    number: 13,
    slug: 'kanban',
    symbol: 'Kb',
    name: 'Kanban',
    fullName: 'Kanban / flux tiré',
    family: 'flux',
    level: 2,
    definition:
      "Signal visuel qui déclenche la production ou le réapprovisionnement uniquement quand c'est consommé.",
    purpose: 'Produire au rythme de la demande réelle et limiter les stocks.',
    limits: {
      notFor: 'Mal adapté aux demandes très erratiques ou aux articles à très faible rotation.',
      whenNot: 'Inutile sur un flux déjà piloté à la commande unitaire.',
      pitfalls: 'Fixer des tailles de lot/seuils au hasard et accumuler ou manquer de stock.',
    },
    pme: {
      why: 'Un simple système de cartes ou de bacs évite à la fois les ruptures et le sur-stock qui plombe la trésorerie.',
      firstStep: 'Mettre en place un système à 2 bacs : quand le premier est vide, on recommande.',
      example: "Un café gère ses consommables avec un repère 'point de commande' sur l'étagère.",
      commonMistake: 'Garder un Kanban figé alors que la consommation a changé.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Flux tiré vs poussé ; tableau Kanban en services/projets (limites de WIP).',
      prerequisites: ['Demande relativement régulière'],
      successIndicators: ['Stocks réduits', 'Moins de ruptures'],
    },
    related: ['jit', 'vsm', 'takt-time'],
  },
  {
    number: 14,
    slug: 'takt-time',
    symbol: 'Tk',
    name: 'Takt Time',
    fullName: 'Takt Time — rythme de la demande',
    family: 'flux',
    level: 3,
    definition: 'Le rythme auquel il faut produire pour suivre exactement la demande client.',
    purpose: 'Caler la cadence de production sur la demande, ni plus ni moins.',
    limits: {
      notFor: 'Peu pertinent pour des productions très unitaires ou sur-mesure non répétitives.',
      whenNot: "Sur une demande très instable, le takt 'moyen' peut induire en erreur.",
      pitfalls:
        'Pousser les équipes au takt sur un processus instable : on génère du stress et des défauts.',
    },
    pme: {
      why: "Donne un repère simple : 'à quelle cadence dois-je avancer pour tenir mes délais ?'.",
      firstStep:
        "Calculer : temps de travail disponible ÷ nombre d'unités demandées sur la période.",
      example: 'Un atelier qui doit livrer 40 pièces en 8 h vise une pièce toutes les 12 minutes.',
      commonMistake: 'Confondre takt time (demande) et temps de cycle (capacité réelle).',
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Comparaison takt / temps de cycle pour équilibrer les postes (ligne, Yamazumi).',
      prerequisites: ['Demande quantifiée', 'Temps disponible connu'],
      successIndicators: ['Cadence alignée sur la demande', 'Postes équilibrés'],
    },
    related: ['kanban', 'heijunka', 'vsm'],
  },
  {
    number: 15,
    slug: 'jit',
    symbol: 'Jt',
    name: 'Juste-à-temps',
    fullName: 'Juste-à-temps (JIT)',
    family: 'flux',
    level: 3,
    definition:
      'Produire/livrer la bonne quantité, au bon moment, au bon endroit, sans stock superflu.',
    purpose:
      'Réduire drastiquement les stocks et les délais en synchronisant le flux sur la demande.',
    limits: {
      notFor:
        'Fragile sans stabilité et sans fournisseurs fiables : une rupture amont arrête tout.',
      whenNot:
        "À tempérer quand l'approvisionnement est incertain (un stock de sécurité reste prudent).",
      pitfalls:
        "Viser le 'zéro stock' avant d'avoir fiabilisé qualité et délais : on casse le service client.",
    },
    pme: {
      why: "Moins de stock = trésorerie libérée et moins d'invendus, vital pour une petite structure.",
      firstStep:
        "Identifier l'article le plus cher en stock dormant et tester un réapprovisionnement plus fréquent.",
      example: 'Un restaurant passe à des commandes quotidiennes de frais et réduit ses pertes.',
      commonMistake: "Copier le JIT d'un grand groupe sans la stabilité qui le rend possible.",
    },
    relevance: { impact: 'medium', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Un des deux piliers du TPS (avec Jidoka) ; repose sur Kanban, takt, heijunka.',
      prerequisites: ['Processus stable', 'Fournisseurs fiables'],
      successIndicators: ['Rotation des stocks', 'Lead time'],
    },
    related: ['kanban', 'heijunka', 'jidoka'],
  },
  {
    number: 16,
    slug: 'smed',
    symbol: 'Sm',
    name: 'SMED',
    fullName: 'SMED — changement d’outil en moins de 10 minutes',
    family: 'flux',
    level: 3,
    definition: 'Méthode pour réduire fortement le temps de changement de série/de réglage.',
    purpose: 'Permettre des petits lots fréquents sans pénaliser la productivité.',
    limits: {
      notFor: 'Sans intérêt si les changements de série sont rares ou déjà très rapides.',
      whenNot: "À ne pas prioriser tant que le goulot n'est pas le changement de série.",
      pitfalls:
        "Optimiser un changement sur un poste qui n'est pas le goulot : gain nul sur le flux.",
    },
    pme: {
      why: 'Réduire le temps de réglage permet de répondre à des petites commandes variées sans surcoût.',
      firstStep:
        "Filmer un changement de série et séparer ce qui peut se préparer machine en marche (externe) de ce qui exige l'arrêt (interne).",
      example:
        "Un imprimeur prépare encres et plaques à l'avance et divise par deux son temps de calage.",
      commonMistake:
        "Tout traiter en 'interne' (machine arrêtée) faute d'avoir trié les opérations.",
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Conversion interne→externe, standardisation, fixations rapides (Shingo).',
      prerequisites: ['Goulot identifié', 'Travail standardisé'],
      successIndicators: ['Temps de changement', 'Taille de lot réduite'],
    },
    related: ['travail-standardise', 'heijunka', 'theorie-contraintes'],
  },
  {
    number: 17,
    slug: 'heijunka',
    symbol: 'Hj',
    name: 'Heijunka',
    fullName: 'Heijunka — lissage de la production',
    family: 'flux',
    level: 4,
    definition: 'Lisser le volume et le mix de production pour éviter les à-coups (Mura).',
    purpose: 'Stabiliser la charge afin de réduire surcharges, stocks et défauts.',
    limits: {
      notFor: 'Difficile sur des activités totalement événementielles ou saisonnières extrêmes.',
      whenNot: 'Prématuré tant que le flux de base et le travail standardisé ne sont pas en place.',
      pitfalls: 'Lisser de façon trop théorique au point de ne plus coller à la demande réelle.',
    },
    pme: {
      why: "Étaler la charge (rendez-vous, productions) évite l'alternance épuisante coup de feu / temps mort.",
      firstStep: 'Répartir les tâches lourdes sur la semaine plutôt que de les concentrer un jour.',
      example:
        'Un cabinet lisse ses rendez-vous pour éviter le rush du lundi et le creux du jeudi.',
      commonMistake: 'Confondre lissage et simple planning : oublier de lisser aussi le mix.',
    },
    relevance: { impact: 'low', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper: "Boîte de lissage, intervalle EPEI ; condition d'un JIT robuste.",
      prerequisites: ['Flux stable', 'SMED (petits lots)'],
      successIndicators: ['Variabilité de charge réduite', 'Stocks lissés'],
    },
    related: ['jit', 'smed', 'gaspillages'],
  },

  // ───────────────────────── Stabilité & qualité ─────────────────────────
  {
    number: 18,
    slug: 'cinq-s',
    symbol: '5S',
    name: '5S',
    fullName: '5S — organisation de l’espace de travail',
    family: 'stabilite-qualite',
    level: 1,
    definition:
      'Méthode en 5 étapes (Trier, Ranger, Nettoyer, Standardiser, Suivre) pour un espace de travail ordonné.',
    purpose:
      "Créer un environnement où l'anormal se voit immédiatement et où l'on ne perd plus de temps à chercher.",
    limits: {
      notFor:
        "Ce n'est pas du simple ménage : un 5S qui s'arrête au nettoyage retombe en quelques semaines.",
      whenNot: 'Ne résout pas à lui seul un problème de flux ou de qualité de fond.',
      pitfalls:
        "Faire les 3 premiers S et négliger Standardiser + Suivre : retour à l'état initial garanti.",
    },
    pme: {
      why: 'Premier pas idéal : visible, peu coûteux, fédérateur, et il libère du temps dès la première semaine.',
      firstStep: 'Choisir une seule zone et faire le tri : garder, jeter, déplacer.',
      example: 'Un atelier dégage un établi encombré et gagne 10 minutes par intervention.',
      commonMistake: 'Lancer le 5S partout à la fois et ne rien tenir dans la durée.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Socle de la stabilité ; prérequis au travail standardisé et au management visuel.',
      prerequisites: ["Engagement de l'équipe"],
      successIndicators: ['Temps de recherche', 'Audits 5S tenus dans le temps'],
    },
    related: ['management-visuel', 'travail-standardise', 'gaspillages'],
  },
  {
    number: 19,
    slug: 'travail-standardise',
    symbol: 'Sw',
    name: 'Travail standardisé',
    fullName: 'Travail standardisé (Standard Work)',
    family: 'stabilite-qualite',
    level: 2,
    definition:
      "La meilleure manière connue, aujourd'hui, de réaliser une tâche, écrite et partagée.",
    purpose: "Réduire la variabilité et créer une base stable pour s'améliorer.",
    limits: {
      notFor:
        "Ce n'est pas une bureaucratie figée : un standard qu'on n'améliore jamais devient un frein.",
      whenNot: 'Peu utile sur des tâches purement créatives et non répétitives.',
      pitfalls:
        "Rédiger des procédures que personne ne lit, au lieu d'un standard visuel et vivant.",
    },
    pme: {
      why: "Permet de déléguer, de former vite un nouveau et d'éviter que la qualité dépende d'une seule personne.",
      firstStep:
        "Filmer ou décrire en photos la 'bonne façon' d'une tâche clé et l'afficher au poste.",
      example:
        "Une boulangerie standardise la recette et le dressage : qualité constante quel que soit l'employé.",
      commonMistake: "Imposer un standard d'en haut sans impliquer ceux qui font le travail.",
    },
    relevance: { impact: 'high', effort: 'medium' },
    pmeStarter: true,
    practitioner: {
      deeper:
        "Temps de cycle + séquence + en-cours standard ; base du kaizen ('pas de standard, pas de kaizen').",
      prerequisites: ['Processus stabilisé (5S)'],
      successIndicators: ['Variabilité réduite', 'Temps de formation'],
    },
    related: ['cinq-s', 'kaizen', 'leader-standard-work'],
  },
  {
    number: 20,
    slug: 'andon',
    symbol: 'An',
    name: 'Andon',
    fullName: 'Andon — signal d’alerte',
    family: 'stabilite-qualite',
    level: 2,
    definition:
      "Dispositif qui permet de signaler immédiatement une anomalie et d'appeler de l'aide.",
    purpose: 'Faire remonter les problèmes en temps réel pour les traiter à la source.',
    limits: {
      notFor:
        "Sans réaction rapide derrière, l'alerte ne sert à rien : l'andon n'est pas qu'un voyant.",
      whenNot: "Surdimensionné si personne n'est en mesure d'intervenir dans la foulée.",
      pitfalls:
        "Installer le signal mais punir ou ignorer ceux qui l'actionnent : il tombe en désuétude.",
    },
    pme: {
      why: "Pas besoin de technologie : un simple signal convenu permet de stopper une erreur avant qu'elle ne se propage.",
      firstStep:
        "Convenir d'un signal clair pour dire 'j'ai un problème, j'ai besoin d'aide maintenant'.",
      example:
        "En cuisine, un emplacement 'bac rouge' signale un plat non conforme à refaire avant envoi.",
      commonMistake:
        "Décourager les alertes pour 'ne pas ralentir', donc laisser passer les défauts.",
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Composante du Jidoka ; couplé à une réaction standardisée et à la résolution de cause racine.',
      prerequisites: ['Culture sans blâme'],
      successIndicators: ['Temps de réaction aux anomalies', 'Défauts arrêtés à la source'],
    },
    related: ['jidoka', 'poka-yoke', 'management-visuel'],
  },
  {
    number: 21,
    slug: 'poka-yoke',
    symbol: 'Py',
    name: 'Poka-Yoke',
    fullName: 'Poka-Yoke — détrompeur anti-erreur',
    family: 'stabilite-qualite',
    level: 3,
    definition: 'Dispositif qui rend une erreur impossible ou immédiatement visible.',
    purpose: 'Empêcher le défaut à la source plutôt que de le détecter après coup.',
    limits: {
      notFor: "Ne traite pas les causes organisationnelles profondes : c'est une parade locale.",
      whenNot: "Inutile de blinder une erreur qui n'arrive jamais ou sans conséquence.",
      pitfalls:
        "Empiler des contrôles a posteriori et croire que c'est du poka-yoke (qui, lui, prévient).",
    },
    pme: {
      why: 'Souvent quasi gratuit (un gabarit, un code couleur) et supprime durablement une erreur récurrente.',
      firstStep:
        "Prendre l'erreur la plus fréquente et imaginer un moyen de la rendre physiquement impossible.",
      example:
        "Un atelier code par couleur les connecteurs pour qu'un mauvais branchement soit impossible.",
      commonMistake:
        "Compter sur la vigilance des gens plutôt que de concevoir l'erreur hors du process.",
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Prévention vs détection ; brique du Jidoka et de la qualité à la source (Shingo).',
      prerequisites: ['Défauts identifiés (Pareto)'],
      successIndicators: ["Taux de défaut sur l'erreur ciblée", 'Contrôles aval supprimés'],
    },
    related: ['jidoka', 'andon', 'pareto'],
  },
  {
    number: 22,
    slug: 'jidoka',
    symbol: 'Jd',
    name: 'Jidoka',
    fullName: 'Jidoka — autonomation (qualité intégrée)',
    family: 'stabilite-qualite',
    level: 4,
    definition:
      "Donner aux machines et aux personnes la capacité d'arrêter dès qu'une anomalie survient.",
    purpose: "Ne jamais laisser passer un défaut et libérer l'humain de la simple surveillance.",
    limits: {
      notFor:
        'Arrêter au moindre souci suppose une capacité à réagir vite : sinon on bloque la production.',
      whenNot: 'Difficile à généraliser sans stabilité et sans résolution de problèmes mûre.',
      pitfalls: "Mettre en place l'arrêt sans le 'traiter la cause' qui doit suivre.",
    },
    pme: {
      why: "Principe transposable : 'on ne transmet pas un défaut à l'étape suivante', clé pour la réputation.",
      firstStep:
        "Définir une règle simple : tout produit non conforme s'arrête et est traité, pas transmis.",
      example:
        "Un atelier de couture refuse de passer à l'emballage une pièce avec défaut visible.",
      commonMistake:
        "Privilégier le débit au point de laisser filer les défauts 'pour rattraper après'.",
    },
    relevance: { impact: 'medium', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper:
        "Deuxième pilier du TPS ; séparation homme/machine ; s'appuie sur andon et poka-yoke.",
      prerequisites: ['Stabilité', 'Résolution de problèmes en place'],
      successIndicators: ['Défauts non propagés', 'Première qualité (FTQ)'],
    },
    related: ['andon', 'poka-yoke', 'jit'],
  },
  {
    number: 23,
    slug: 'tpm',
    symbol: 'Tp',
    name: 'TPM',
    fullName: 'TPM — Maintenance Productive Totale',
    family: 'stabilite-qualite',
    level: 4,
    definition:
      'Approche où les opérateurs entretiennent eux-mêmes leurs équipements pour éviter les pannes.',
    purpose: 'Maximiser la disponibilité et la performance des équipements dans la durée.',
    limits: {
      notFor: 'Lourde à déployer pleinement ; sans 5S et sans implication, elle ne prend pas.',
      whenNot: 'Surdimensionnée pour une activité peu équipée ou peu dépendante des machines.',
      pitfalls:
        "La réduire à un planning de maintenance préventive sans la part 'autonome' des opérateurs.",
    },
    pme: {
      why: "Quelques gestes d'entretien autonome évitent des pannes coûteuses qui paralysent une petite structure.",
      firstStep:
        "Mettre en place un nettoyage/contrôle quotidien de l'équipement critique avec check-list.",
      example:
        'Un pressing instaure un contrôle quotidien de la machine et évite les arrêts en pleine journée.',
      commonMistake: "Attendre la panne (curatif) au lieu d'un entretien régulier minimal.",
    },
    relevance: { impact: 'medium', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper:
        "8 piliers TPM ; mesurée par l'OEE/TRS ; maintenance autonome + préventive + amélioration.",
      prerequisites: ['5S', 'Équipements identifiés comme critiques'],
      successIndicators: ['TRS / OEE', 'Pannes évitées'],
    },
    related: ['cinq-s', 'oee', 'travail-standardise'],
  },

  // ─────────────────────── Résolution de problèmes ───────────────────────
  {
    number: 24,
    slug: 'pdca',
    symbol: 'PD',
    name: 'PDCA',
    fullName: 'PDCA — Planifier, Faire, Vérifier, Agir (roue de Deming)',
    family: 'resolution',
    level: 1,
    definition: "Cycle d'amélioration en 4 temps : Plan, Do, Check, Act.",
    purpose: 'Améliorer de façon méthodique en testant puis en ancrant ce qui marche.',
    limits: {
      notFor: "Ce n'est pas un outil d'analyse de cause : il cadre la démarche, pas le diagnostic.",
      whenNot: 'Trop léger seul pour des problèmes complexes multi-causes (passer à A3/DMAIC).',
      pitfalls:
        "Sauter le 'Check' et le 'Act' : on enchaîne les 'Do' sans jamais vérifier ni standardiser.",
    },
    pme: {
      why: 'Cadre mental universel et gratuit pour ne plus improviser : tester petit, vérifier, généraliser.',
      firstStep:
        'Choisir une amélioration, la tester 1 semaine, mesurer le résultat, décider de la garder ou non.',
      example:
        'Un commerce teste un nouvel agencement de caisse une semaine avant de le pérenniser.',
      commonMistake: "Déployer une idée partout sans l'avoir testée à petite échelle.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper:
        "Base de tout système d'amélioration ; le A3 et le DMAIC en sont des déclinaisons structurées.",
      prerequisites: ['Objectif et mesure définis'],
      successIndicators: ['Améliorations vérifiées par des données', 'Standards mis à jour'],
    },
    related: ['amelioration-continue', 'a3', 'cinq-pourquoi'],
  },
  {
    number: 25,
    slug: 'cinq-pourquoi',
    symbol: '5P',
    name: '5 Pourquoi',
    fullName: 'Les 5 Pourquoi',
    family: 'resolution',
    level: 1,
    definition: "Remonter à la cause racine en demandant 'pourquoi ?' plusieurs fois de suite.",
    purpose: 'Traiter la cause profonde au lieu de colmater le symptôme.',
    limits: {
      notFor:
        'Inadapté aux problèmes à causes multiples ou statistiques : une seule chaîne de cause simplifie trop.',
      whenNot: "À éviter quand on n'a pas observé les faits : on enchaîne alors des suppositions.",
      pitfalls:
        "S'arrêter trop tôt, ou dériver vers 'qui ?' (chercher un coupable) au lieu de 'pourquoi ?'.",
    },
    pme: {
      why: "Aucun outil requis : 10 minutes pour éviter qu'un même problème ne revienne sans cesse.",
      firstStep:
        "Sur le dernier incident, écrire le problème et enchaîner 5 'pourquoi' jusqu'à une cause actionnable.",
      example:
        'Retard de livraison → … → cause racine : pas de point de réapprovisionnement défini.',
      commonMistake: "S'arrêter au premier 'pourquoi' (le symptôme) et traiter l'écume.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Souvent combiné à Ishikawa ; vérifier la chaîne logique (remonter ET redescendre).',
      prerequisites: ['Faits observés (Gemba)'],
      successIndicators: ['Problèmes non récurrents', 'Causes racines documentées'],
    },
    related: ['ishikawa', 'pdca', 'a3'],
  },
  {
    number: 26,
    slug: 'ishikawa',
    symbol: 'Ik',
    name: 'Ishikawa',
    fullName: 'Diagramme d’Ishikawa (causes-effet, 5M)',
    family: 'resolution',
    level: 2,
    definition:
      "Diagramme en arête de poisson qui classe les causes possibles d'un problème (Matière, Méthode, Main-d'œuvre, Matériel, Milieu).",
    purpose: 'Explorer largement les causes avant de conclure.',
    limits: {
      notFor:
        'Liste des causes possibles, pas la cause réelle : il faut ensuite vérifier par les faits.',
      whenNot: 'Surdimensionné pour un problème simple où les 5 Pourquoi suffisent.',
      pitfalls: "Confondre 'causes listées' et 'cause prouvée' ; brainstorming sans vérification.",
    },
    pme: {
      why: "Idéal en petit groupe pour ne pas foncer sur la première cause venue et impliquer l'équipe.",
      firstStep:
        'Au tableau, écrire le problème à droite et brainstormer les causes par catégorie (5M).',
      example:
        "Un atelier liste les causes de retouches et concentre l'enquête sur 'Méthode' et 'Matière'.",
      commonMistake: 'Traiter toutes les causes listées au lieu de tester les plus probables.',
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper: '5M/6M/7M ; à coupler avec Pareto pour prioriser et 5 Pourquoi pour creuser.',
      prerequisites: ['Problème bien défini'],
      successIndicators: ['Causes hiérarchisées', 'Enquête ciblée'],
    },
    related: ['cinq-pourquoi', 'pareto', 'a3'],
  },
  {
    number: 27,
    slug: 'a3',
    symbol: 'A3',
    name: 'Rapport A3',
    fullName: 'A3 — résolution de problème sur une page',
    family: 'resolution',
    level: 3,
    definition:
      "Format d'une page structurant un problème : contexte, analyse, cause, contre-mesures, suivi.",
    purpose: 'Forcer une réflexion rigoureuse et partageable, et développer ceux qui la mènent.',
    limits: {
      notFor:
        "Ce n'est pas un formulaire à remplir : le A3 est un outil de pensée, pas un livrable administratif.",
      whenNot: 'Trop lourd pour un problème trivial réglable en 5 Pourquoi.',
      pitfalls: 'Remplir les cases pour la forme sans aller réellement sur le terrain.',
    },
    pme: {
      why: "Discipline une réflexion sur les sujets qui comptent et sert d'outil de coaching du dirigeant.",
      firstStep:
        'Sur un problème récurrent, remplir une feuille A3 en suivant la trame contexte → cible → analyse → actions.',
      example:
        'Un gérant structure en A3 le problème des litiges de facturation et en réduit le volume.',
      commonMistake: "Sauter l'analyse de cause pour aller directement aux solutions.",
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Incarne le PDCA ; outil de développement (mentor/mentoré) au cœur du Lean management.',
      prerequisites: ['PDCA', '5 Pourquoi'],
      successIndicators: ["Qualité de l'analyse", 'Contre-mesures efficaces et suivies'],
    },
    related: ['pdca', 'cinq-pourquoi', 'hansei'],
  },
  {
    number: 28,
    slug: 'dmaic',
    symbol: 'Dm',
    name: 'DMAIC',
    fullName: 'DMAIC — Définir, Mesurer, Analyser, Innover, Contrôler',
    family: 'resolution',
    level: 3,
    definition:
      'Démarche en 5 phases pour résoudre un problème de manière mesurée et fondée sur les données.',
    purpose: 'Réduire la variation et atteindre une cible de performance de façon rigoureuse.',
    limits: {
      notFor: "Disproportionné pour un problème simple ou évident : c'est une démarche projet.",
      whenNot: "À éviter quand la cause est déjà connue : on peut passer directement à l'action.",
      pitfalls: "Lancer un DMAIC 'usine à gaz' là où un PDCA d'une semaine aurait suffi.",
    },
    pme: {
      why: 'Utile surtout sur un problème chiffrable et coûteux qui résiste aux solutions simples.',
      firstStep:
        "Pour un problème mesurable, commencer par bien le 'Définir' et 'Mesurer' avant toute solution.",
      example: 'Une PME réduit son taux de retours produits via un DMAIC mené sur 6 semaines.',
      commonMistake: "Sauter la mesure et 'analyser' à partir d'impressions.",
    },
    relevance: { impact: 'medium', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Colonne vertébrale de Six Sigma ; chaque phase a ses outils (SIPOC, capabilité, plans, MSP).',
      prerequisites: ['Données disponibles', 'Problème mesurable'],
      successIndicators: ['Capabilité améliorée', 'Gain pérennisé (Contrôler)'],
    },
    related: ['six-sigma', 'spc', 'pareto'],
  },
  {
    number: 29,
    slug: 'huit-d',
    symbol: '8D',
    name: '8D',
    fullName: '8D — résolution de problème en 8 disciplines',
    family: 'resolution',
    level: 3,
    definition:
      'Démarche en 8 étapes pour traiter une non-conformité, du confinement immédiat à la prévention.',
    purpose: 'Réagir vite à un problème client tout en éliminant durablement la cause.',
    limits: {
      notFor:
        'Lourd pour des problèmes mineurs ; pensé pour les non-conformités sérieuses (souvent client).',
      whenNot: "Inutile si aucune action de confinement immédiat n'est nécessaire.",
      pitfalls:
        "S'arrêter au confinement (D3) et oublier la cause racine et la prévention (D5-D7).",
    },
    pme: {
      why: 'Donne un cadre carré pour répondre à une réclamation client importante sans rien oublier.',
      firstStep:
        "Face à une réclamation, d'abord protéger le client (confiner), puis remonter à la cause.",
      example:
        'Un fournisseur PME répond à un client grand compte via un 8D et conserve le marché.',
      commonMistake:
        "Promettre que 'ça ne se reproduira plus' sans action de prévention vérifiable.",
    },
    relevance: { impact: 'low', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Origine automobile/qualité fournisseur ; D0-D8, équipe + actions préventives.',
      prerequisites: ['Non-conformité avérée', 'Équipe pluridisciplinaire'],
      successIndicators: ['Récurrence nulle', 'Satisfaction du client réclamant'],
    },
    related: ['cinq-pourquoi', 'ishikawa', 'pdca'],
  },

  // ─────────────────── Mesure & maîtrise statistique ────────────────────
  {
    number: 30,
    slug: 'pareto',
    symbol: 'Pa',
    name: 'Pareto',
    fullName: 'Loi de Pareto (80/20)',
    family: 'mesure',
    level: 1,
    definition: 'Une minorité de causes (≈20 %) produit la majorité des effets (≈80 %).',
    purpose: "Concentrer l'effort sur le petit nombre de causes qui pèsent le plus.",
    limits: {
      notFor: "Ne dit pas pourquoi : il priorise, il n'explique pas la cause.",
      whenNot: 'Trompeur sur trop peu de données ou quand les effets sont uniformément répartis.',
      pitfalls:
        "Prendre le 80/20 au pied de la lettre comme une loi exacte plutôt qu'un principe de priorisation.",
    },
    pme: {
      why: 'Avec un temps limité, savoir où concentrer ses efforts est le levier n°1 de productivité.',
      firstStep:
        'Lister les problèmes/clients/produits et classer par fréquence ou par chiffre : attaquer le top.',
      example:
        'Un commerce voit que 3 références sur 50 font 70 % du CA et réorganise son réassort.',
      commonMistake: 'Traiter tous les problèmes à égalité au lieu de prioriser les plus lourds.',
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper:
        'Diagramme de Pareto ; outil de priorisation en analyse et en phase Analyse du DMAIC.',
      prerequisites: ['Données catégorisées'],
      successIndicators: ['Effort concentré sur le vital few', 'Impact mesuré'],
    },
    related: ['kpi', 'ishikawa', 'dmaic'],
  },
  {
    number: 31,
    slug: 'kpi',
    symbol: 'Kp',
    name: 'KPI',
    fullName: 'Indicateurs clés de performance (KPI)',
    family: 'mesure',
    level: 2,
    definition: "Petit nombre de mesures qui reflètent la santé et la performance de l'activité.",
    purpose: 'Piloter sur des faits et voir vite quand quelque chose dérive.',
    limits: {
      notFor:
        'Un KPI ne corrige rien par lui-même ; mal choisi, il oriente vers le mauvais comportement.',
      whenNot:
        'Multiplier les indicateurs sur une petite structure crée du reporting sans pilotage.',
      pitfalls: 'Mesurer ce qui est facile plutôt que ce qui compte ; gaming des chiffres.',
    },
    pme: {
      why: "3-4 chiffres suivis régulièrement valent mieux que l'intuition pour piloter une petite entreprise.",
      firstStep:
        'Choisir 3 indicateurs vitaux (ex. CA, délai, satisfaction) et les suivre chaque semaine.',
      example: 'Un artisan suit délai moyen, taux de reprise et trésorerie sur un tableau simple.',
      commonMistake: "Empiler 20 indicateurs qu'on ne regarde jamais.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper:
        'Lier KPI aux objectifs (Hoshin) ; indicateurs de résultat vs de processus ; management visuel.',
      prerequisites: ['Objectifs clairs'],
      successIndicators: ['Décisions appuyées sur les KPI', 'Dérives détectées tôt'],
    },
    related: ['management-visuel', 'pareto', 'hoshin-kanri'],
  },
  {
    number: 32,
    slug: 'oee',
    symbol: 'Oe',
    name: 'OEE / TRS',
    fullName: 'OEE / TRS — Taux de Rendement Synthétique',
    family: 'mesure',
    level: 3,
    definition: "Indicateur combinant disponibilité, performance et qualité d'un équipement.",
    purpose: "Quantifier les pertes d'un équipement pour cibler les gains.",
    limits: {
      notFor:
        'Pertinent surtout sur des activités capacitaires/équipées ; peu utile en service pur.',
      whenNot: "Sans valeur si l'équipement n'est pas le goulot de l'activité.",
      pitfalls: 'Viser un OEE élevé sur une machine non goulot : on produit du stock inutile.',
    },
    pme: {
      why: "Révèle les pertes cachées (micro-arrêts, ralentissements, rebuts) d'une machine clé.",
      firstStep:
        "Sur l'équipement critique, noter pendant une semaine les arrêts, ralentissements et rebuts.",
      example: 'Un imprimeur découvre que ses micro-arrêts, pas les pannes, plombent sa capacité.',
      commonMistake: "Optimiser le TRS d'une machine qui n'est pas le facteur limitant.",
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'OEE = Disponibilité × Performance × Qualité ; pilote la TPM ; lié au goulot (TOC).',
      prerequisites: ['Relevé des temps', 'Équipement critique identifié'],
      successIndicators: ['OEE du goulot', 'Pertes réduites par catégorie'],
    },
    related: ['tpm', 'theorie-contraintes', 'kpi'],
  },
  {
    number: 33,
    slug: 'spc',
    symbol: 'Sp',
    name: 'SPC / MSP',
    fullName: 'Maîtrise statistique des procédés (SPC / MSP)',
    family: 'mesure',
    level: 4,
    definition:
      "Suivi d'un processus par cartes de contrôle pour distinguer variation normale et anomalie.",
    purpose: 'Réagir aux vraies dérives sans sur-réagir au bruit normal du processus.',
    limits: {
      notFor: 'Inutile sur des volumes très faibles ou des processus non répétitifs.',
      whenNot: "Prématuré tant que le processus n'est pas stabilisé (5S, standard).",
      pitfalls:
        'Régler le processus à chaque point (sur-réglage / tampering) au lieu de suivre les limites de contrôle.',
    },
    pme: {
      why: "Évite la sur-réaction : comprendre qu'une variation banale ne justifie pas de tout dérégler.",
      firstStep:
        "Tracer une mesure clé dans le temps et distinguer les fluctuations normales d'une vraie dérive.",
      example:
        "Un atelier agroalimentaire suit le poids des portions et n'intervient que hors limites.",
      commonMistake: 'Corriger à chaque écart minime et augmenter ainsi la variabilité.',
    },
    relevance: { impact: 'low', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Cartes de contrôle, causes communes vs spéciales (Deming/Shewhart) ; précède la capabilité (Cp/Cpk).',
      prerequisites: ['Processus stable', 'Mesure fiable'],
      successIndicators: ['Processus sous contrôle statistique', 'Capabilité'],
    },
    related: ['ctq', 'dmaic', 'six-sigma'],
  },

  // ───────────────────────── Management & culture ─────────────────────────
  {
    number: 34,
    slug: 'management-visuel',
    symbol: 'Mv',
    name: 'Management visuel',
    fullName: 'Management visuel',
    family: 'management',
    level: 1,
    definition: "Rendre l'état du travail, des objectifs et des écarts visibles d'un coup d'œil.",
    purpose: 'Permettre à chacun de voir la situation et de réagir sans rapport ni réunion.',
    limits: {
      notFor:
        "Afficher ne pilote pas : un tableau qu'on ne fait pas vivre devient de la décoration.",
      whenNot: "Inutile d'afficher des indicateurs sur lesquels personne ne peut agir.",
      pitfalls: "Surcharger les murs d'affichages que plus personne ne regarde.",
    },
    pme: {
      why: 'Un simple tableau partagé aligne une petite équipe mieux que des e-mails dispersés.',
      firstStep: "Installer un tableau visible avec les 3 priorités de la semaine et l'avancement.",
      example:
        "Un atelier affiche un planning mural simple : chacun voit la charge et s'auto-organise.",
      commonMistake: "Créer un beau tableau puis ne jamais l'animer ni le mettre à jour.",
    },
    relevance: { impact: 'high', effort: 'low' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Couplé au point quotidien (stand-up) et aux KPI ; support du leader standard work.',
      prerequisites: ['KPI ou priorités définis'],
      successIndicators: ['Écarts vus et traités vite', "Autonomie de l'équipe"],
    },
    related: ['kpi', 'gemba', 'leader-standard-work'],
  },
  {
    number: 35,
    slug: 'kaizen',
    symbol: 'Kz',
    name: 'Kaizen',
    fullName: 'Kaizen — chantier d’amélioration',
    family: 'management',
    level: 2,
    definition: "Action d'amélioration ciblée, menée en équipe sur un temps court et borné.",
    purpose: 'Obtenir une amélioration concrète et visible rapidement, en impliquant le terrain.',
    limits: {
      notFor:
        "Ne remplace pas l'amélioration continue quotidienne : un chantier ponctuel sans suite retombe.",
      whenNot: 'Mal adapté à un problème complexe qui exige une démarche projet (DMAIC).',
      pitfalls: "Multiplier les 'événements' kaizen sans ancrer les gains dans des standards.",
    },
    pme: {
      why: "Mobiliser l'équipe une demi-journée sur un irritant précis donne un résultat tangible et motive.",
      firstStep:
        "Bloquer 2 heures avec l'équipe pour améliorer concrètement un point précis (rangement, circuit).",
      example:
        "Une équipe réorganise la zone d'expédition en une matinée et gagne 20 min par jour.",
      commonMistake: 'Faire le chantier puis ne pas standardiser ni vérifier que le gain tient.',
    },
    relevance: { impact: 'high', effort: 'medium' },
    pmeStarter: true,
    practitioner: {
      deeper: 'Chantier/kaizen blitz vs kaizen quotidien ; clôture par standardisation (PDCA).',
      prerequisites: ['Périmètre clair', 'Équipe disponible'],
      successIndicators: ['Gain mesuré', 'Standard mis à jour et tenu'],
    },
    related: ['amelioration-continue', 'travail-standardise', 'pdca'],
  },
  {
    number: 36,
    slug: 'leader-standard-work',
    symbol: 'Ls',
    name: 'Leader Standard Work',
    fullName: 'Leader Standard Work — travail standardisé du manager',
    family: 'management',
    level: 3,
    definition:
      'Routines régulières du manager (tournées terrain, points, vérifications) qui soutiennent le système.',
    purpose: "Faire vivre durablement les standards et l'amélioration au lieu de tout réinventer.",
    limits: {
      notFor: "Ce n'est pas du contrôle policier : l'objectif est de soutenir, pas de surveiller.",
      whenNot: "Rigidifié à l'excès, il empêche le manager de réagir aux imprévus.",
      pitfalls: 'Cocher des cases de routine sans réelle écoute ni coaching.',
    },
    pme: {
      why: "Évite que le dirigeant ne soit happé par l'urgence : quelques routines protègent le temps d'amélioration.",
      firstStep:
        "Bloquer dans l'agenda une tournée terrain quotidienne de 15 minutes, non négociable.",
      example:
        "Un gérant fait chaque matin le tour de son tableau visuel avec l'équipe avant l'ouverture.",
      commonMistake:
        "Laisser l'opérationnel dévorer les routines de pilotage dès la première urgence.",
    },
    relevance: { impact: 'medium', effort: 'low' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Pilier du Lean management quotidien (avec management visuel et responsabilisation).',
      prerequisites: ['Standards existants', 'Management visuel'],
      successIndicators: ['Standards tenus dans le temps', 'Coaching régulier'],
    },
    related: ['management-visuel', 'travail-standardise', 'gemba'],
  },
  {
    number: 37,
    slug: 'hoshin-kanri',
    symbol: 'Hk',
    name: 'Hoshin Kanri',
    fullName: 'Hoshin Kanri — déploiement des objectifs',
    family: 'management',
    level: 4,
    definition:
      'Méthode pour traduire quelques objectifs stratégiques en actions alignées à tous les niveaux.',
    purpose: "Concentrer l'organisation sur l'essentiel et aligner les efforts.",
    limits: {
      notFor:
        "Inutile s'il n'y a pas de vrai cap à décliner ; ce n'est pas un simple plan d'actions.",
      whenNot: 'Trop formel pour une TPE de quelques personnes (une version allégée suffit).',
      pitfalls: "Empiler trop d'objectifs : l'Hoshin perd son pouvoir de focalisation.",
    },
    pme: {
      why: 'Même en version simple, choisir 1 à 3 priorités annuelles et les décliner évite la dispersion.',
      firstStep:
        "Définir 1 à 3 objectifs majeurs pour l'année et, pour chacun, les 2-3 actions clés.",
      example:
        "Une PME choisit 'réduire les délais' comme priorité annuelle et y rattache chaque chantier.",
      commonMistake: "Fixer 15 priorités, c'est-à-dire aucune.",
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper:
        'Matrice X, catchball (négociation des objectifs), revue régulière ; lié au nemawashi.',
      prerequisites: ['Vision', 'KPI'],
      successIndicators: ['Alignement des actions sur la stratégie', 'Objectifs atteints'],
    },
    related: ['kpi', 'nemawashi', 'pensee-long-terme'],
  },

  // ─────────────────── Amélioration avancée / Six Sigma ───────────────────
  {
    number: 38,
    slug: 'kata',
    symbol: 'Ka',
    name: 'Kata',
    fullName: 'Kata d’amélioration',
    family: 'avance',
    level: 3,
    definition:
      "Routine d'apprentissage en petits pas vers un état cible, par expérimentations successives.",
    purpose: "Développer chez chacun le réflexe scientifique d'amélioration.",
    limits: {
      notFor:
        "Ce n'est pas une boîte à outils : sans coaching régulier, la routine ne s'installe pas.",
      whenNot: "Difficile à ancrer si le management n'est pas prêt à coacher dans la durée.",
      pitfalls: "Faire le kata 'pour le faire' sans condition cible claire ni obstacle à lever.",
    },
    pme: {
      why: "Transforme l'amélioration en habitude apprise plutôt qu'en dépendance au dirigeant.",
      firstStep:
        'Définir un état cible mesurable à 4 semaines et avancer par petits tests hebdomadaires.',
      example:
        "Une équipe vise 'préparer une commande en 10 min' et progresse par essais successifs.",
      commonMistake:
        "Sauter directement aux solutions sans définir l'état cible ni l'obstacle actuel.",
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: 'Improvement Kata + Coaching Kata (Rother) ; opérationnalise le PDCA en routine.',
      prerequisites: ["Culture d'expérimentation", 'Coach disponible'],
      successIndicators: ["Capacité d'amélioration autonome", 'États cibles atteints'],
    },
    related: ['pdca', 'amelioration-continue', 'hansei'],
  },
  {
    number: 39,
    slug: 'theorie-contraintes',
    symbol: 'Tc',
    name: 'Théorie des contraintes',
    fullName: 'Théorie des contraintes (TOC)',
    family: 'avance',
    level: 4,
    definition:
      "Tout système est limité par un goulot ; améliorer le reste ne sert qu'une fois le goulot exploité.",
    purpose: "Maximiser le débit global en concentrant l'effort sur la contrainte.",
    limits: {
      notFor:
        'Ne se substitue pas au Lean : elle priorise, elle ne supprime pas le gaspillage partout.',
      whenNot: "Moins parlante quand la contrainte est externe (marché) plutôt qu'interne.",
      pitfalls: 'Optimiser des postes non goulots et croire améliorer la performance globale.',
    },
    pme: {
      why: "Recentre les efforts limités d'une petite structure sur le seul maillon qui bride le débit.",
      firstStep:
        "Identifier l'étape devant laquelle le travail s'accumule : c'est probablement le goulot.",
      example:
        "Un atelier découvre que tout dépend d'une seule machine et organise son planning autour d'elle.",
      commonMistake: 'Investir dans des postes non goulots sans gain sur le débit total.',
    },
    relevance: { impact: 'medium', effort: 'medium' },
    pmeStarter: false,
    practitioner: {
      deeper: '5 étapes de focalisation (Goldratt) ; Drum-Buffer-Rope ; complémentaire au Lean.',
      prerequisites: ['Vision du flux global'],
      successIndicators: ['Débit (throughput)', 'Goulot piloté en priorité'],
    },
    related: ['oee', 'vsm', 'smed'],
  },
  {
    number: 40,
    slug: 'six-sigma',
    symbol: '6σ',
    name: 'Six Sigma',
    fullName: 'Six Sigma — réduction de la variation',
    family: 'avance',
    level: 4,
    definition:
      "Démarche fondée sur les données visant à réduire la variation et les défauts d'un processus.",
    purpose: 'Atteindre une qualité très élevée et stable sur des processus critiques.',
    limits: {
      notFor:
        'Lourd, gourmand en données et en formation ; surdimensionné pour la plupart des problèmes courants.',
      whenNot:
        'À éviter quand un PDCA/kaizen simple suffirait : risque de bureaucratie statistique.',
      pitfalls:
        'Déployer ceintures et projets là où le bon sens lean réglerait le sujet plus vite.',
    },
    pme: {
      why: 'Rarement prioritaire en TPE/PME : à réserver à un problème de variation chiffré, coûteux et persistant.',
      firstStep:
        "Avant de penser Six Sigma, vérifier qu'un PDCA/kaizen ne résout pas déjà le problème.",
      example:
        "Une PME industrielle l'emploie ponctuellement pour fiabiliser une cote critique exigée par un client.",
      commonMistake: "Adopter l'arsenal Six Sigma par effet de mode sur des sujets simples.",
    },
    relevance: { impact: 'low', effort: 'high' },
    pmeStarter: false,
    practitioner: {
      deeper:
        "DMAIC + outils statistiques (capabilité, MSP, plans d'expériences) ; ceintures ; complément du Lean (Lean Six Sigma).",
      prerequisites: ['Données fiables', 'Compétences statistiques'],
      successIndicators: ['Capabilité (Cpk)', 'Réduction durable des défauts'],
    },
    related: ['dmaic', 'spc', 'ctq'],
  },
];

export const conceptBySlug = Object.fromEntries(concepts.map((c) => [c.slug, c]));

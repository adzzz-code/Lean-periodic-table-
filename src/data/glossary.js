// Glossaire — termes japonais, acronymes et jargon lean, expliqués en une phrase.
// `slug` (optionnel) : fiche concept correspondante (doit exister — vérifié par validate).
// Trié alphabétiquement à l'affichage : l'ordre ici n'a pas d'importance.

export const glossary = [
  {
    term: '3M (Muda, Mura, Muri)',
    def: 'Les trois familles de pertes : le gaspillage (Muda), l’irrégularité (Mura) et la surcharge (Muri).',
    slug: 'gaspillages',
  },
  {
    term: '5M',
    def: 'Les cinq catégories de causes du diagramme d’Ishikawa : Matière, Matériel, Méthode, Main-d’œuvre, Milieu.',
    slug: 'ishikawa',
  },
  {
    term: '5 Pourquoi',
    def: 'Technique de questionnement : demander « pourquoi ? » plusieurs fois de suite pour remonter à la cause racine.',
    slug: 'cinq-pourquoi',
  },
  {
    term: '5S',
    def: 'Méthode d’organisation de l’espace de travail en cinq étapes : trier, ranger, nettoyer, standardiser, suivre.',
    slug: 'cinq-s',
  },
  {
    term: '8D',
    def: 'Démarche de résolution de problème en huit disciplines, du confinement immédiat à la prévention.',
    slug: 'huit-d',
  },
  {
    term: 'A3',
    def: 'Résolution de problème structurée qui tient sur une seule page (du format papier A3).',
    slug: 'a3',
  },
  {
    term: 'Andon',
    def: 'Signal — lumineux ou simplement convenu — qui alerte immédiatement quand une anomalie survient.',
    slug: 'andon',
  },
  {
    term: 'Catchball',
    def: 'Aller-retour de négociation des objectifs entre direction et terrain, au cœur du Hoshin Kanri.',
    slug: 'hoshin-kanri',
  },
  {
    term: 'CTQ (Critical To Quality)',
    def: 'Caractéristique mesurable qui traduit une exigence client en critère vérifiable.',
    slug: 'ctq',
  },
  {
    term: 'DMAIC',
    def: 'Les cinq phases d’un projet Six Sigma : Définir, Mesurer, Analyser, Innover (améliorer), Contrôler.',
    slug: 'dmaic',
  },
  {
    term: 'Flux tiré',
    def: 'Mode de fonctionnement où l’aval déclenche le travail de l’amont : on ne produit que ce qui est consommé (inverse du flux poussé).',
    slug: 'kanban',
  },
  {
    term: 'FTQ (First Time Quality)',
    def: 'Part du travail bon du premier coup, sans retouche ni reprise.',
    slug: 'jidoka',
  },
  {
    term: 'Gemba',
    def: '« Le lieu réel » : le terrain, là où la valeur se crée et où les problèmes se voient.',
    slug: 'gemba',
  },
  {
    term: 'Gemba walk',
    def: 'Tournée régulière du dirigeant sur le terrain pour observer et écouter — pas pour contrôler.',
    slug: 'gemba',
  },
  {
    term: 'Genchi Genbutsu',
    def: '« Va voir par toi-même » : décider à partir de faits constatés sur place, pas de rapports.',
    slug: 'genchi-genbutsu',
  },
  {
    term: 'Hansei',
    def: 'Réflexion critique honnête après une action — réussie ou non — pour en tirer des leçons.',
    slug: 'hansei',
  },
  {
    term: 'Heijunka',
    def: 'Lissage du volume et de la variété de production pour éviter les à-coups.',
    slug: 'heijunka',
  },
  {
    term: 'Hoshin Kanri',
    def: 'Déploiement de quelques objectifs stratégiques en actions alignées à tous les niveaux.',
    slug: 'hoshin-kanri',
  },
  {
    term: 'Jidoka',
    def: '« Autonomation » : s’arrêter dès qu’une anomalie survient, pour ne jamais laisser passer un défaut.',
    slug: 'jidoka',
  },
  {
    term: 'JIT (Juste-à-temps)',
    def: 'Produire ou livrer la bonne quantité au bon moment, sans stock superflu.',
    slug: 'jit',
  },
  {
    term: 'Kaikaku',
    def: 'Changement radical, par rupture — le complément du kaizen (petits pas) quand le modèle entier est à revoir.',
  },
  {
    term: 'Kaizen',
    def: 'Amélioration continue par petits pas ; désigne aussi un chantier d’amélioration court et ciblé.',
    slug: 'kaizen',
  },
  {
    term: 'Kanban',
    def: 'Carte ou signal visuel qui déclenche la production ou le réapprovisionnement.',
    slug: 'kanban',
  },
  {
    term: 'Kata',
    def: 'Routine d’amélioration et de coaching qui ancre la démarche scientifique dans le quotidien.',
    slug: 'kata',
  },
  {
    term: 'KPI',
    def: 'Indicateur clé de performance : un petit nombre de chiffres vitaux pour piloter.',
    slug: 'kpi',
  },
  {
    term: 'Lead time (temps de traversée)',
    def: 'Temps total entre la demande et la livraison, attentes comprises — souvent dominé par les attentes.',
    slug: 'vsm',
  },
  {
    term: 'Lean',
    def: 'Démarche issue du système de production Toyota : maximiser la valeur pour le client en éliminant les gaspillages, avec les équipes.',
  },
  {
    term: 'Muda',
    def: 'Gaspillage : toute activité qui consomme des ressources sans créer de valeur pour le client.',
    slug: 'gaspillages',
  },
  {
    term: 'Mura',
    def: 'Irrégularité, à-coups de charge — souvent la cause cachée des gaspillages.',
    slug: 'gaspillages',
  },
  {
    term: 'Muri',
    def: 'Surcharge ou contrainte excessive imposée aux personnes ou aux équipements.',
    slug: 'gaspillages',
  },
  {
    term: 'Nemawashi',
    def: 'Préparation d’une décision en consultant les parties prenantes avant de l’annoncer.',
    slug: 'nemawashi',
  },
  {
    term: 'Obeya',
    def: '« Grande salle » : pièce ou mur où l’on rend visible l’avancement d’un projet pour décider vite, ensemble.',
    slug: 'management-visuel',
  },
  {
    term: 'OEE / TRS',
    def: 'Taux de rendement synthétique d’un équipement : disponibilité × performance × qualité.',
    slug: 'oee',
  },
  {
    term: 'PDCA',
    def: 'Cycle Plan-Do-Check-Act : planifier un essai, le faire, vérifier le résultat, ancrer ce qui marche.',
    slug: 'pdca',
  },
  {
    term: 'Poka-Yoke',
    def: 'Détrompeur : dispositif qui rend une erreur impossible ou immédiatement visible.',
    slug: 'poka-yoke',
  },
  {
    term: 'Sensei',
    def: 'Maître ou mentor lean, qui développe les personnes par le questionnement plutôt que par les réponses.',
  },
  {
    term: 'SMED',
    def: 'Méthode pour réduire les temps de changement de série (Single-Minute Exchange of Die : viser moins de 10 minutes).',
    slug: 'smed',
  },
  {
    term: 'SPC / MSP',
    def: 'Maîtrise statistique des procédés : cartes de contrôle pour distinguer le bruit normal d’une vraie dérive.',
    slug: 'spc',
  },
  {
    term: 'Takt time',
    def: 'Rythme de production imposé par la demande client : temps disponible ÷ quantité demandée.',
    slug: 'takt-time',
  },
  {
    term: 'TOC (Théorie des contraintes)',
    def: 'Le débit d’un système est limité par son goulot : c’est lui qu’il faut identifier et traiter en priorité.',
    slug: 'theorie-contraintes',
  },
  {
    term: 'TPM',
    def: 'Maintenance productive totale : les utilisateurs entretiennent eux-mêmes leurs équipements au quotidien.',
    slug: 'tpm',
  },
  {
    term: 'TPS (Toyota Production System)',
    def: 'Le système de production Toyota, dont le Lean est issu ; ses deux piliers : juste-à-temps et jidoka.',
  },
  {
    term: 'VOC (Voix du client)',
    def: 'Recueil structuré des besoins et attentes réels des clients.',
    slug: 'voix-client',
  },
  {
    term: 'VSM (Value Stream Mapping)',
    def: 'Cartographie d’un flux de bout en bout — matière et information — avec ses temps et ses stocks.',
    slug: 'vsm',
  },
  {
    term: 'WIP / En-cours',
    def: 'Travail commencé mais pas terminé ; trop d’en-cours allonge mécaniquement les délais.',
    slug: 'kanban',
  },
  {
    term: 'Yokoten',
    def: 'Déploiement horizontal : répliquer ailleurs une amélioration qui a fait ses preuves quelque part.',
    slug: 'kaizen',
  },
];

// Entrée "par le problème" (V2) — pensée pour des TPE/PME qui ne connaissent pas le Lean.
// On part de la douleur exprimée en langage courant, et on renvoie vers les concepts qui aident,
// avec un "pourquoi" taillé pour CE problème. `concepts` est ordonné : commencer par le 1er.
// Tous les slugs de `concepts` doivent exister dans concepts.js (vérifié par `npm run validate`).
//
// Champs : slug, problem (les mots du dirigeant), lead (mise en contexte),
//          featured (mis en avant sur l'accueil),
//          context: [paragraphes] (le fond du problème, en langage courant — SEO long-tail),
//          faq: [{ q, a }] (objections réelles, réponses honnêtes — rendu en FAQPage JSON-LD),
//          solutions: [{ slug, why }]

export const problems = [
  {
    slug: 'par-ou-commencer',
    problem: 'Je veux m’améliorer mais je ne sais pas par où commencer',
    lead: 'Commencez simple, visible et gratuit. Ces fondamentaux ne demandent aucun budget, juste un peu de régularité.',
    featured: true,
    context: [
      'L’amélioration n’est pas réservée aux grands groupes dotés d’un service qualité. Dans une petite structure, elle commence presque toujours par la même chose : rendre le travail visible, supprimer une irritation concrète, et prendre l’habitude de progresser un peu chaque semaine. Pas besoin de budget ni de formation longue — il faut un premier succès visible, qui donne envie de continuer.',
      'L’erreur classique est de vouloir « faire du Lean » d’un coup : grand plan, grands mots, équipe sceptique. La voie qui marche est inverse : choisir une zone ou un problème qui agace tout le monde, le régler en équipe, montrer le résultat. La méthode suit la pratique, pas l’inverse.',
    ],
    faq: [
      {
        q: 'Combien de temps faut-il y consacrer ?',
        a: 'Une à deux heures par semaine suffisent pour démarrer : un premier tri 5S sur une zone, ou un point d’équipe de 15 minutes. L’enjeu n’est pas la quantité mais la régularité.',
      },
      {
        q: 'Faut-il un consultant ou une formation ?',
        a: 'Pas pour commencer. Les fondamentaux (5S, PDCA, aller voir sur le terrain) s’apprennent en pratiquant. Un regard extérieur devient utile plus tard, quand on attaque le flux ou la stratégie.',
      },
      {
        q: 'Par quoi commencer si mon équipe est réticente ?',
        a: 'Par un irritant qu’elle subit : demandez à chacun ce qui lui fait perdre du temps, et réglez un point ensemble. L’adhésion vient du résultat, pas du discours.',
      },
    ],
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
    context: [
      'Chercher un outil, un dossier, un e-mail : chaque recherche ne coûte que quelques secondes ou minutes, mais elle se répète des dizaines de fois par jour, pour chaque personne. Mis bout à bout, c’est souvent l’équivalent de plusieurs heures par semaine — invisibles parce que diluées.',
      'Le désordre n’est ni une fatalité ni une question de discipline individuelle : c’est un système de rangement qui n’existe pas. La logique lean : une place évidente pour chaque chose, et un signal visuel quand quelque chose manque. Quand c’est bien fait, ranger devient plus facile que ne pas ranger.',
    ],
    faq: [
      {
        q: 'Le 5S, ça marche aussi pour le numérique (fichiers, boîte mail) ?',
        a: 'Oui — trier, ranger, standardiser s’appliquent à une arborescence de fichiers ou une boîte partagée exactement comme à un atelier. Commencez par le dossier où tout le monde cherche.',
      },
      {
        q: 'On a déjà rangé plusieurs fois, ça ne tient jamais. Pourquoi ?',
        a: 'Parce que les deux dernières étapes (standardiser, suivre) ont été sautées. Sans règle visible ni mini-rituel de contrôle, l’espace retombe naturellement. Ce sont les étapes 4 et 5 qui font tenir, pas le grand nettoyage.',
      },
    ],
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
      {
        slug: 'diagramme-spaghetti',
        why: 'Tracer les déplacements réels pour réorganiser l’espace en connaissance de cause.',
      },
    ],
  },
  {
    slug: 'erreurs-recurrentes',
    problem: 'Les mêmes erreurs ou problèmes reviennent sans arrêt',
    lead: 'Tant qu’on traite le symptôme, le problème revient. On remonte à la cause racine.',
    featured: true,
    context: [
      'Quand un problème revient, ce n’est presque jamais une question de personnes : c’est que la correction a traité le symptôme (refaire, s’excuser, rattraper) sans toucher la cause. Tant que la cause reste en place, le problème reviendra — avec son coût en temps, en matière et en crédibilité.',
      'La bonne nouvelle : remonter à la cause racine prend souvent dix minutes de questionnement honnête, et la traiter coûte généralement moins cher que de re-subir le problème chaque mois. Le réflexe à installer : à chaque incident notable, demander « pourquoi ? » plutôt que « qui ? ».',
    ],
    faq: [
      {
        q: 'Comment savoir si on a trouvé la vraie cause ?',
        a: 'Testez la logique à l’envers : si je corrige cette cause, le problème devient-il impossible (ou nettement plus rare) ? Si la réponse est « pas vraiment », continuez à creuser.',
      },
      {
        q: 'Et si la cause est une erreur humaine ?',
        a: '« Erreur humaine » est rarement une cause racine — c’est le symptôme d’un poste qui rend l’erreur possible. La question utile : qu’est-ce qui permettrait à n’importe qui de se tromper ici ? Puis on rend l’erreur difficile (détrompeur, check-list).',
      },
    ],
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
      {
        slug: 'huit-d',
        why: 'Pour une réclamation client sérieuse : protéger le client d’abord, éradiquer ensuite.',
      },
    ],
  },
  {
    slug: 'delais-trop-longs',
    problem: 'Mes délais sont trop longs, je livre en retard',
    lead: 'Souvent, le travail passe plus de temps à attendre qu’à être réalisé. On fait circuler le flux.',
    featured: true,
    context: [
      'Dans la plupart des activités, une commande passe l’essentiel de son délai à attendre : entre deux étapes, dans une pile, dans une boîte mail. Le travail effectif ne représente souvent que quelques heures sur des jours de délai. Accélérer le travail ne sert donc à rien tant qu’on n’a pas réduit les attentes.',
      'C’est contre-intuitif : on cherche spontanément à faire travailler plus vite, alors que le gisement est dans le « entre ». Cartographier le parcours réel d’une commande — même grossièrement, sur une feuille — révèle où le temps dort, et le goulot qui rythme tout le reste.',
    ],
    faq: [
      {
        q: 'Mes délais dépendent de mes fournisseurs, je n’y peux rien.',
        a: 'En partie — mais vérifiez d’abord votre part : entre la réception et votre livraison, combien de temps la commande attend-elle chez vous ? On découvre souvent que la moitié du délai est interne, donc actionnable.',
      },
      {
        q: 'Faut-il embaucher pour aller plus vite ?',
        a: 'Pas avant d’avoir regardé le flux. Si le travail attend, ajouter des bras n’y change rien — parfois ça aggrave (plus d’en-cours). Traitez d’abord le goulot et les attentes ; l’embauche se décide après.',
      },
    ],
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
      {
        slug: 'sipoc',
        why: 'Poser le processus à plat en 30 minutes avant de cartographier les temps.',
      },
    ],
  },
  {
    slug: 'trop-de-stock',
    problem: 'J’ai trop de stock, ma trésorerie est bloquée',
    lead: 'Le stock dormant, c’est de l’argent immobilisé et un risque d’invendus.',
    featured: false,
    context: [
      'Le stock rassure, mais il coûte trois fois : l’argent immobilisé (trésorerie), la place occupée, et le risque (péremption, démodage, casse). Et il cache les problèmes : avec beaucoup de stock, on ne voit ni les erreurs de commande, ni les vraies rotations.',
      'L’objectif n’est pas le « zéro stock » — dangereux pour une petite structure — mais le stock piloté : réapprovisionner en fonction de la consommation réelle plutôt que par habitude ou par peur de manquer.',
    ],
    faq: [
      {
        q: 'Réduire le stock, n’est-ce pas risquer la rupture ?',
        a: 'Pas si on pilote : un système à deux bacs ou un point de commande visuel déclenche le réassort au bon moment. On réduit d’abord sur les articles à rotation régulière, en gardant une sécurité sur les critiques.',
      },
      {
        q: 'Par où commencer concrètement ?',
        a: 'Par votre stock dormant le plus cher : identifiez les dix articles qui dorment depuis des mois et décidez (écouler, retourner, arrêter de commander). Puis mettez un point de commande sur vos dix articles les plus consommés.',
      },
    ],
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
    context: [
      'Si la qualité dépend de qui fait le travail, l’entreprise repose sur des personnes, pas sur un système : un départ, une absence ou un coup de bourre, et le client le sent. Ce n’est pas un problème de compétence, mais d’absence de référence commune : chacun fait « à sa façon » — toutes défendables, toutes différentes.',
      'Le standard n’est pas de la paperasse : c’est la meilleure façon connue aujourd’hui, rendue visible (photos, check-list affichée) et construite avec ceux qui font le travail. Il stabilise la qualité et accélère la formation des nouveaux.',
    ],
    faq: [
      {
        q: 'Standardiser ne va pas tuer le savoir-faire ou la créativité ?',
        a: 'Le standard couvre ce qui doit être constant (sécurité, points de contrôle, recette de base) et libère du temps pour ce qui mérite du sur-mesure. Et il s’améliore en continu : c’est un plancher, pas un plafond.',
      },
      {
        q: 'Mes salariés n’aiment pas les procédures.',
        a: 'Personne n’aime les procédures écrites par d’autres. Un standard construit avec l’équipe, en photos plutôt qu’en texte, affiché au poste, est perçu comme une aide — surtout par les nouveaux.',
      },
    ],
    solutions: [
      {
        slug: 'travail-standardise',
        why: 'Écrire ou afficher la meilleure façon connue pour que tous l’appliquent.',
      },
      { slug: 'poka-yoke', why: 'Empêcher l’erreur à la source grâce à un détrompeur.' },
      { slug: 'cinq-s', why: 'Un poste organisé est la base d’un travail régulier.' },
      {
        slug: 'matrice-competences',
        why: 'Voir qui maîtrise quoi, et organiser la polyvalence par la formation.',
      },
    ],
  },
  {
    slug: 'journees-yoyo',
    problem: 'Mes journées sont du yo-yo : coups de feu puis temps morts',
    lead: 'L’irrégularité épuise et génère des erreurs. On lisse la charge.',
    featured: false,
    context: [
      'L’alternance coup de feu / temps mort épuise plus que la charge elle-même : pendant les pics on bâcle et on stresse, pendant les creux on paie des heures peu utiles. Une partie de cette irrégularité vient de la demande — mais une partie surprenante vient de l’organisation : tout concentrer le même jour, accepter tous les rendez-vous au même créneau, lancer les grosses tâches en même temps.',
      'Lisser, c’est répartir ce qui peut l’être (rendez-vous, production interne, tâches lourdes) pour absorber ce qui ne peut pas l’être (la vraie pointe client). Même un lissage partiel réduit le stress, les erreurs et les heures creuses.',
    ],
    faq: [
      {
        q: 'Ma demande est imprévisible, comment lisser ?',
        a: 'On ne lisse pas la demande, on lisse ce qu’on contrôle : préparation, réassort, administratif, rendez-vous déplaçables. En sortant ces tâches des pics, vous libérez de la capacité pour absorber l’imprévu.',
      },
      {
        q: 'Proposer d’autres créneaux ne va pas faire fuir les clients ?',
        a: 'Testez : beaucoup de clients sont flexibles si on le leur propose (créneau creux = service plus calme, parfois petit avantage). Quelques rendez-vous déplacés suffisent souvent à casser la pointe.',
      },
    ],
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
    context: [
      'Quand une équipe « n’adhère pas », le réflexe est de mieux expliquer, de répéter. Mais l’adhésion ne se décrète pas : elle se construit en amont (consulter avant de décider) et par la preuve (un premier changement qui améliore leur quotidien, pas seulement le vôtre).',
      'Une amélioration imposée tient le temps de la surveillance ; une amélioration co-construite s’entretient toute seule. Ceux qui font le travail voient des choses que le dirigeant ne voit pas — c’est une ressource, pas une résistance.',
    ],
    faq: [
      {
        q: 'Si je consulte tout le monde, on ne décide plus rien.',
        a: 'Consulter n’est pas voter : vous gardez la décision. Mais parler aux deux ou trois personnes les plus concernées avant d’annoncer évite le rejet silencieux — et améliore souvent la décision elle-même.',
      },
      {
        q: 'Comment relancer une équipe échaudée par des changements ratés ?',
        a: 'Par petit et par concret : demandez les trois irritants de chacun, réglez-en un sous quinze jours, et dites qui l’a proposé. La crédibilité se reconstruit par des actes rapides, pas par des annonces.',
      },
    ],
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
    context: [
      'L’intuition d’un dirigeant proche du terrain est précieuse, mais elle a deux failles : elle confirme ce qu’on croit déjà, et elle voit mal les dérives lentes (les marges qui s’effritent, les délais qui glissent). Quelques chiffres bien choisis corrigent ces deux failles sans bureaucratie.',
      'L’enjeu n’est pas d’avoir un reporting, mais trois ou quatre chiffres vitaux regardés chaque semaine, idéalement affichés. La régularité du regard compte plus que la sophistication de l’outil — un tableau blanc bat un logiciel qu’on n’ouvre pas.',
    ],
    faq: [
      {
        q: 'Quels indicateurs choisir pour commencer ?',
        a: 'Un sur l’argent (trésorerie ou marge), un sur le client (délai tenu, réclamations), un sur l’interne (heures de reprise, retards). Trois suffisent : ce sont ceux qui doivent vous faire réagir quand ils tournent mal.',
      },
      {
        q: 'Je n’ai pas le temps de tenir des tableaux de bord.',
        a: 'Si la collecte prend plus de dix minutes par semaine, c’est le mauvais indicateur. Choisissez des chiffres déjà disponibles (caisse, factures, agenda) — l’objectif est un regard hebdomadaire, pas une compta analytique.',
      },
    ],
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
    context: [
      'On gaspille beaucoup d’énergie sur ce que le client ne remarque pas — et on néglige parfois ce qu’il valorise vraiment. Le plus frustrant : la plupart des dirigeants de petites structures parlent à leurs clients tous les jours, mais sans jamais leur poser les questions qui comptent.',
      'Pas besoin d’étude de marché : trois questions ouvertes posées systématiquement (« qu’est-ce qui vous a décidé ? », « qu’est-ce qui vous a manqué ? », « qu’amélioreriez-vous ? ») et des réponses notées telles quelles. Au bout de vingt clients, les motifs se répètent — et ils surprennent presque toujours.',
    ],
    faq: [
      {
        q: 'Mes clients ne répondent pas aux enquêtes.',
        a: 'N’envoyez pas d’enquête : posez une question en direct, au moment naturel (livraison, encaissement, fin de chantier). Le taux de réponse en face-à-face est proche de 100 % et les réponses sont plus honnêtes.',
      },
      {
        q: 'Et si les clients demandent des choses contradictoires ?',
        a: 'C’est le signe qu’il existe plusieurs profils de clients. Notez qui dit quoi : vous découvrirez peut-être deux attentes distinctes — et un choix à faire sur qui vous servez le mieux.',
      },
    ],
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
      {
        slug: 'kano',
        why: 'Distinguer le dû, le proportionnel et ce qui enchante vraiment.',
      },
    ],
  },
  {
    slug: 'pannes-machine',
    problem: 'Une machine ou un équipement clé tombe souvent en panne',
    lead: 'Attendre la panne coûte cher. Un entretien minimal régulier évite l’arrêt en pleine journée.',
    featured: false,
    context: [
      'Une panne ne prévient pas, mais elle s’annonce : bruit inhabituel, encrassement, petite fuite, réglage qui dérive. Dans une petite structure où une seule machine porte souvent toute l’activité, attendre la panne, c’est accepter de perdre des journées entières au pire moment.',
      'L’entretien autonome ne demande ni contrat coûteux ni compétence pointue : nettoyer, inspecter, resserrer — quelques minutes par jour, par ceux qui utilisent la machine. Le nettoyage est une inspection : une machine propre montre ses anomalies.',
    ],
    faq: [
      {
        q: 'J’ai déjà un contrat de maintenance, ça ne suffit pas ?',
        a: 'Le contrat couvre les grosses révisions, pas les dérives quotidiennes — qui causent la majorité des arrêts. Les deux se complètent : l’œil quotidien de l’utilisateur détecte ce que la visite annuelle ne verra jamais.',
      },
      {
        q: 'Combien de temps y consacrer ?',
        a: 'Cinq à dix minutes par jour sur l’équipement critique : une check-list de cinq points (propreté, niveaux, bruits, fuites, réglages). L’enjeu est le rituel, pas la durée.',
      },
    ],
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
      {
        slug: 'amdec',
        why: 'Anticiper les défaillances graves pour sécuriser d’abord le pire.',
      },
    ],
  },
  {
    slug: 'exigence-client-precise',
    problem: 'Un client ou une norme exige une qualité précise et constante',
    lead: 'Tenir une promesse chiffrée demande de la maîtrise, pas du « au feeling ».',
    featured: false,
    context: [
      'Quand un client ou une norme exige une qualité chiffrée et constante, le « on fait attention » ne suffit plus : il faut traduire l’exigence en critères mesurables, sécuriser les points critiques, et savoir distinguer une variation normale d’une vraie dérive.',
      'C’est le domaine où les méthodes plus formelles (CTQ, cartes de contrôle, voire démarche Six Sigma) se justifient — et seulement là. L’erreur serait de déployer cet arsenal partout : réservez-le aux caractéristiques que le client mesure vraiment.',
    ],
    faq: [
      {
        q: 'Mon client demande des « preuves » de ma maîtrise qualité. Par quoi commencer ?',
        a: 'Par formaliser le critère (CTQ) et l’enregistrement du contrôle : quoi, qui, quand, avec quoi. Un relevé simple mais tenu vaut mieux qu’un classeur qualité théorique.',
      },
      {
        q: 'Six Sigma, ce n’est pas réservé aux grandes industries ?',
        a: 'La démarche complète, oui. Mais une PME peut en utiliser des briques (CTQ, capabilité, carte de contrôle) sur une caractéristique critique, ponctuellement — sans ceintures ni grand programme.',
      },
    ],
    solutions: [
      { slug: 'ctq', why: 'Traduire l’exigence en un critère mesurable et vérifiable.' },
      { slug: 'spc', why: 'Suivre le procédé pour réagir aux vraies dérives sans sur-réagir.' },
      { slug: 'poka-yoke', why: 'Sécuriser le point critique contre l’erreur.' },
      {
        slug: 'dmaic',
        why: 'Le cadre pas-à-pas pour réduire une variation chiffrée, mesures à l’appui.',
      },
      {
        slug: 'six-sigma',
        why: 'En dernier recours, pour un problème de variation chiffré, coûteux et persistant.',
      },
    ],
  },
  {
    slug: 'incendies-quotidien',
    problem: 'Je passe mes journées à éteindre des incendies',
    lead: 'L’urgence permanente cache des problèmes jamais traités à la racine. On les fait remonter tôt, et on traite à froid.',
    featured: true,
    context: [
      'Éteindre des incendies toute la journée donne le sentiment d’être utile — et empêche précisément de faire ce qui les éviterait. Chaque urgence traitée « à chaud », sans analyse, reviendra : sa cause est intacte. C’est un cercle : pas de temps pour prévenir, donc toujours plus d’urgences.',
      'On en sort par deux mouvements : faire remonter les problèmes plus tôt (un petit signal traité immédiatement coûte dix fois moins qu’une crise), et sanctuariser un temps court mais régulier pour traiter les causes à froid. Pas « quand on aura le temps » : un créneau fixe, non négociable.',
    ],
    faq: [
      {
        q: 'Je n’ai littéralement pas le temps de prendre du recul.',
        a: 'Commencez par 30 minutes par semaine, créneau bloqué, pour traiter une seule cause d’incendie récurrent. Chaque cause éliminée rend du temps — c’est le seul investissement qui s’auto-finance en quelques semaines.',
      },
      {
        q: 'Mon équipe ne me remonte les problèmes que quand c’est grave.',
        a: 'Parce que remonter un petit problème a déjà été ignoré ou mal reçu. Convenez d’un signal simple, réagissez vite et sans blâme aux premiers signalements : le flux de remontées se rouvre en quelques semaines.',
      },
    ],
    solutions: [
      {
        slug: 'andon',
        why: 'Faire signaler le problème dès qu’il apparaît, quand il est encore petit.',
      },
      {
        slug: 'genchi-genbutsu',
        why: 'Aller voir le problème réel avant de réagir : on traite la bonne urgence.',
      },
      {
        slug: 'jidoka',
        why: 'Arrêter au premier défaut plutôt que laisser l’erreur se propager.',
      },
      {
        slug: 'leader-standard-work',
        why: 'Des rituels courts et réguliers qui traitent les problèmes avant qu’ils ne flambent.',
      },
    ],
  },
  {
    slug: 'preparations-trop-longues',
    problem: 'Mes changements de série ou mes préparations me prennent des heures',
    lead: 'Une grande partie du temps de changement peut se faire sans arrêter l’activité. On sépare, on prépare, on raccourcit.',
    featured: false,
    context: [
      'Dans un changement de série ou une préparation, une grande partie des opérations peut se faire avant d’arrêter : chercher l’outillage, sortir les matières, préparer les documents. C’est l’idée centrale du SMED : séparer ce qui exige l’arrêt de ce qui peut se préparer pendant que l’activité tourne — puis raccourcir ce qui reste.',
      'Les gains sont rapides et souvent spectaculaires (la moitié du temps dès le premier passage), parce que personne n’avait jamais regardé le changement comme un processus à part entière. Filmer un changement réel est le déclencheur : on voit les allers-retours, les recherches, les attentes.',
    ],
    faq: [
      {
        q: 'Je ne suis pas industriel, le SMED me concerne ?',
        a: 'Oui : la « série » peut être un chantier, un service du midi, une salle entre deux réunions, un fauteuil entre deux clients. Partout où l’on bascule d’une activité à l’autre, la préparation externe s’applique.',
      },
      {
        q: 'Filmer mes salariés, ça va mal passer ?',
        a: 'Filmez le processus, pas les personnes, et analysez le film avec elles : ce sont elles qui repèrent le mieux les pertes. Le film sert à voir, jamais à juger — dites-le, et tenez-le.',
      },
    ],
    solutions: [
      {
        slug: 'smed',
        why: 'Séparer ce qui peut se préparer à l’avance de ce qui exige vraiment l’arrêt.',
      },
      {
        slug: 'cinq-s',
        why: 'Un poste prêt et rangé élimine la moitié du temps de préparation.',
      },
      {
        slug: 'travail-standardise',
        why: 'Une check-list de changement stabilise la procédure et la raccourcit.',
      },
    ],
  },
  {
    slug: 'strategie-natterrit-pas',
    problem: 'J’ai des objectifs en tête, mais rien n’atterrit sur le terrain',
    lead: 'Une stratégie qui reste dans la tête du dirigeant n’existe pas. On la traduit en quelques priorités visibles et suivies.',
    featured: false,
    context: [
      'Entre la vision du dirigeant et le quotidien de l’équipe, il manque souvent un seul maillon : la traduction. « Développer le haut de gamme » ne dit à personne quoi faire lundi. Une stratégie qui n’est pas déclinée en deux ou trois priorités concrètes, affichées et suivies, perd contre l’urgence du jour — toujours.',
      'La discipline qui marche : choisir peu d’objectifs (un à trois), les traduire avec l’équipe en actions trimestrielles, les rendre visibles, et faire un point d’avancement court mais régulier. La focalisation bat l’exhaustivité.',
    ],
    faq: [
      {
        q: 'Comment choisir, si tout semble prioritaire ?',
        a: 'Demandez-vous : si nous ne réussissons qu’une seule chose cette année, laquelle change le plus notre situation ? C’est votre priorité n°1. Les autres deviennent des sujets « si le temps le permet » — et c’est très bien ainsi.',
      },
      {
        q: 'Mon équipe est trop petite pour parler de « stratégie ».',
        a: 'Justement : à trois ou cinq personnes, un objectif annuel partagé, affiché et revu chaque mois suffit. C’est le Hoshin Kanri sans la matrice — l’esprit (focalisation + déclinaison) tient sur une feuille A4.',
      },
    ],
    solutions: [
      {
        slug: 'hoshin-kanri',
        why: 'Déployer 1 à 3 priorités annuelles en actions concrètes, partagées par tous.',
      },
      {
        slug: 'a3',
        why: 'Formaliser un objectif en une page : problème, cible, plan — lisible par l’équipe.',
      },
      {
        slug: 'pensee-long-terme',
        why: 'Arbitrer le quotidien à l’aune du cap, pas de l’urgence du jour.',
      },
      {
        slug: 'kpi',
        why: 'Suivre l’avancement avec 3-4 chiffres, pas avec des impressions.',
      },
      {
        slug: 'obeya',
        why: 'Un mur de pilotage rend l’avancement visible et les blocages criants.',
      },
    ],
  },
  {
    slug: 'ameliorations-retombent',
    problem: 'On améliore, puis tout retombe comme avant',
    lead: 'Une amélioration sans ancrage retombe en quelques semaines. On installe la routine qui la fait tenir.',
    featured: false,
    context: [
      'Le soufflé qui retombe est le destin naturel de toute amélioration non ancrée : l’urgence revient, les vieilles habitudes aussi, et trois mois plus tard tout est comme avant — avec, en prime, une équipe vaccinée contre le prochain changement.',
      'Ce qui fait tenir une amélioration, ce n’est pas la motivation : c’est l’ancrage. Un standard visible qui décrit la nouvelle façon, un suivi régulier (même cinq minutes) qui montre que ça compte, et un bilan honnête quand ça retombe — pour comprendre pourquoi, sans coupable.',
    ],
    faq: [
      {
        q: 'Faut-il sanctionner ceux qui reviennent aux vieilles habitudes ?',
        a: 'Non : si plusieurs personnes retombent, c’est que la nouvelle façon est plus difficile que l’ancienne, ou que son intérêt n’est pas visible. Corrigez le système (simplifier, rendre visible) plutôt que les personnes.',
      },
      {
        q: 'Combien de temps avant qu’une nouvelle habitude tienne toute seule ?',
        a: 'Comptez plusieurs semaines de suivi régulier — c’est le prix de l’ancrage. La routine du dirigeant (passer, regarder, encourager) est ce qui transforme un changement en habitude.',
      },
    ],
    solutions: [
      {
        slug: 'travail-standardise',
        why: 'Ancrer la nouvelle façon de faire pour qu’elle survive au retour de l’urgence.',
      },
      {
        slug: 'kata',
        why: 'Transformer l’amélioration en routine d’entraînement, pas en coup d’éclat.',
      },
      {
        slug: 'leader-standard-work',
        why: 'Le suivi régulier du dirigeant est ce qui maintient le standard en vie.',
      },
      {
        slug: 'hansei',
        why: 'Tirer les leçons de ce qui n’a pas tenu, sans chercher de coupable.',
      },
    ],
  },
];

export const problemBySlug = Object.fromEntries(problems.map((p) => [p.slug, p]));

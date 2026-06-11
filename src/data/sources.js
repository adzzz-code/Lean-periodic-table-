// Sources & références par concept (slug → liste de références).
// Séparé de concepts.js pour garder la donnée de contenu lisible.
// Attribution canonique : auteur(s) / ouvrage(s) de référence du concept.
// Toute fiche doit avoir ≥ 1 source (vérifié par `npm run validate`).

export const sources = {
  // Mindset & principes
  'genchi-genbutsu': [
    'Jeffrey Liker — The Toyota Way (2004)',
    'Taiichi Ohno — Toyota Production System (1978)',
  ],
  'respect-personnes': [
    'Toyota — The Toyota Way 2001 (les deux piliers)',
    'Jeffrey Liker — The Toyota Way (2004)',
  ],
  'amelioration-continue': ['Masaaki Imai — Kaizen: The Key to Japan’s Competitive Success (1986)'],
  hansei: ['Jeffrey Liker — The Toyota Way (2004)'],
  nemawashi: ['Jeffrey Liker — The Toyota Way (2004, principe 13)'],
  'pensee-long-terme': ['Jeffrey Liker — The Toyota Way (2004, principe 1)'],

  // Voix du client & valeur
  valeur: ['James Womack & Daniel Jones — Lean Thinking (1996)'],
  'voix-client': [
    'Méthodologie Six Sigma (phase Define)',
    'Yoji Akao — QFD / Déploiement de la fonction qualité',
  ],
  gemba: ['Masaaki Imai — Gemba Kaizen (1997)'],
  gaspillages: ['Taiichi Ohno — Toyota Production System (1978, les 7 muda)'],
  ctq: ['Méthodologie Six Sigma (CTQ tree, phase Define)'],
  sipoc: [
    'Méthodologie Six Sigma (phase Define)',
    'Geary Rummler & Alan Brache — Improving Performance (1990)',
  ],
  kano: ['Noriaki Kano — Attractive Quality and Must-Be Quality (1984)'],
  qfd: [
    'Yoji Akao — Quality Function Deployment (1990)',
    'Shigeru Mizuno & Yoji Akao — origine (Mitsubishi, chantier naval de Kobe, 1972)',
  ],
  'cinq-g': ['Toyota — pratique du Genchi Genbutsu (3G étendu à 5G)', 'Littérature Toyota Way'],
  yamazumi: [
    'Toyota Production System — équilibrage de ligne',
    'Mike Rother & John Shook — Learning to See (1999)',
  ],
  'milk-run': [
    'Toyota Production System — logistique interne (flux cadencé)',
    'Littérature lean logistics',
  ],
  kamishibai: ['Toyota — kamishibai boards', 'David Mann — Creating a Lean Culture (2005)'],
  jishuken: ['Toyota — jishuken (groupes d’étude autonomes)', 'Littérature Toyota Way'],

  // Flux & système de production
  vsm: ['Mike Rother & John Shook — Learning to See (1999)'],
  kanban: ['Taiichi Ohno — Toyota Production System (1978)'],
  'takt-time': [
    'Origine : Taktzeit, industrie aéronautique allemande (années 1930), adopté par Toyota',
    'Mike Rother & John Shook — Learning to See (1999)',
  ],
  jit: ['Taiichi Ohno — Toyota Production System (1978)'],
  smed: ['Shigeo Shingo — A Revolution in Manufacturing: The SMED System (1985)'],
  heijunka: ['Jeffrey Liker — The Toyota Way (2004)', 'Toyota Production System'],
  'diagramme-spaghetti': [
    'Origine : études des mouvements de Frank & Lillian Gilbreth (début XXᵉ siècle)',
    'Littérature lean — analyse d’implantation et chantiers 5S',
  ],

  // Stabilité & qualité
  'cinq-s': [
    'Hiroyuki Hirano — 5 Pillars of the Visual Workplace (1990)',
    'Takashi Osada — The 5S’s (1991)',
  ],
  'travail-standardise': [
    'Taiichi Ohno — Toyota Production System',
    'Training Within Industry (TWI), Job Instruction',
  ],
  andon: ['Taiichi Ohno — Toyota Production System (1978)'],
  'poka-yoke': ['Shigeo Shingo — Zero Quality Control (1986)'],
  jidoka: ['Toyota (Sakichi Toyoda) ; Taiichi Ohno — Toyota Production System'],
  tpm: ['Seiichi Nakajima — Introduction to TPM (1988)'],
  amdec: ['US Military — MIL-P-1629 (1949, origine de la FMEA)', 'AIAG & VDA — FMEA Handbook'],

  // Résolution de problèmes
  pdca: ['W. Edwards Deming — Out of the Crisis (1986)', 'Walter A. Shewhart (cycle de Shewhart)'],
  'cinq-pourquoi': ['Taiichi Ohno — Toyota Production System (1978) ; Sakichi Toyoda'],
  ishikawa: ['Kaoru Ishikawa — Guide to Quality Control (1968)'],
  a3: ['John Shook — Managing to Learn (2008)', 'Toyota (méthode A3)'],
  dmaic: ['Méthodologie Six Sigma (Motorola, puis General Electric)'],
  'huit-d': ['Ford Motor Company — Team Oriented Problem Solving, TOPS-8D (1987)'],

  // Mesure & maîtrise statistique
  pareto: [
    'Vilfredo Pareto (principe 80/20)',
    'Joseph Juran — Quality Control Handbook (diagramme de Pareto)',
  ],
  kpi: ['Robert Kaplan & David Norton — The Balanced Scorecard (1996)'],
  oee: ['Seiichi Nakajima — Introduction to TPM (1988)'],
  spc: [
    'Walter A. Shewhart — Economic Control of Quality of Manufactured Product (1931)',
    'W. Edwards Deming',
  ],

  // Management & culture
  'management-visuel': [
    'Michel Greif — L’Usine s’affiche (1989)',
    'Gwendolyn Galsworth — Visual Workplace, Visual Thinking (2005)',
  ],
  kaizen: ['Masaaki Imai — Kaizen (1986)'],
  'leader-standard-work': ['David Mann — Creating a Lean Culture (2005)'],
  'hoshin-kanri': ['Yoji Akao — Hoshin Kanri: Policy Deployment for Successful TQM (1991)'],
  obeya: [
    'Toyota — développement de la Prius (projet G21, années 1990)',
    'Jeffrey Liker — The Toyota Way (2004)',
  ],
  'matrice-competences': [
    'Training Within Industry (TWI) — Job Instruction',
    'Pratique standard du management lean (échelle ILUO)',
  ],

  // Amélioration avancée / Six Sigma
  kata: ['Mike Rother — Toyota Kata (2009)'],
  'theorie-contraintes': ['Eliyahu M. Goldratt — The Goal / Le But (1984)'],
  'six-sigma': ['Mikel Harry & Richard Schroeder — Six Sigma (2000)', 'Motorola (origine, 1986)'],
};

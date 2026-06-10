// Calcul du gain des pépites, extrait pour être testable (cf. tests/).
// Un gain de temps hebdomadaire est récurrent → on le mensualise / annualise.

export const WEEKS_PER_MONTH = 4.33;
export const WEEKS_PER_YEAR = 52;

export function monthlyGain(hoursPerWeek, hourlyRate) {
  return hoursPerWeek * hourlyRate * WEEKS_PER_MONTH;
}

export function yearlyGain(hoursPerWeek, hourlyRate) {
  return hoursPerWeek * hourlyRate * WEEKS_PER_YEAR;
}

// Arrondi à la dizaine : affiche un ordre de grandeur, pas une fausse précision.
export function round10(n) {
  return Math.round(n / 10) * 10;
}

export function euro(n) {
  return `${Math.round(n).toLocaleString('fr-FR')} €`;
}

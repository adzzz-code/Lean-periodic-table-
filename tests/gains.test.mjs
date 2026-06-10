// Tests du calcul de gain des pépites (node --test).
import test from 'node:test';
import assert from 'node:assert/strict';
import { monthlyGain, yearlyGain, round10, euro } from '../src/lib/gains.js';

test('monthlyGain / yearlyGain : gain récurrent mensualisé et annualisé', () => {
  // 1,5 h/sem à 35 €/h → 52,5 €/sem.
  assert.equal(Math.round(monthlyGain(1.5, 35)), 227); // 52,5 × 4,33
  assert.equal(yearlyGain(1.5, 35), 2730); // 52,5 × 52
  assert.equal(monthlyGain(0, 35), 0);
  assert.equal(yearlyGain(2, 0), 0);
});

test('round10 : arrondit à la dizaine (ordre de grandeur honnête)', () => {
  assert.equal(round10(227), 230);
  assert.equal(round10(224), 220);
  assert.equal(round10(0), 0);
});

test('euro : format français', () => {
  // Le séparateur de milliers fr-FR est une espace (fine) insécable.
  assert.match(euro(2730), /^2\s730 €$/);
  assert.equal(euro(35), '35 €');
});

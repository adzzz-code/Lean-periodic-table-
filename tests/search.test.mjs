// Tests de la logique de recherche (node --test).
import test from 'node:test';
import assert from 'node:assert/strict';
import { norm, parseTerms, matchesAll } from '../src/lib/search.js';

test('norm : insensible à la casse et aux accents', () => {
  assert.equal(norm('Élémentaire'), 'elementaire');
  assert.equal(norm('THÉORIE des contraintes'), 'theorie des contraintes');
  assert.equal(norm(''), '');
  assert.equal(norm(null), '');
});

test('parseTerms : découpe multi-mots, ignore les espaces superflus', () => {
  assert.deepEqual(parseTerms('  cause   racine '), ['cause', 'racine']);
  assert.deepEqual(parseTerms(''), []);
});

test('matchesAll : tous les termes doivent matcher, accents ignorés', () => {
  const hay = '5S rangement ordre tri organisation propreté désordre chercher';
  assert.ok(matchesAll(hay, parseTerms('rangement')));
  assert.ok(matchesAll(hay, parseTerms('PROPRETE tri')));
  assert.ok(!matchesAll(hay, parseTerms('rangement goulot')));
  assert.ok(matchesAll(hay, [])); // pas de terme = tout matche
});

test('les mots-clés couvrent le langage courant de la cible', async () => {
  const { concepts } = await import('../src/data/concepts.js');
  const { keywords } = await import('../src/data/keywords.js');
  const index = concepts.map((c) =>
    `${c.name} ${c.symbol} ${c.fullName} ${(keywords[c.slug] || []).join(' ')}`.toLowerCase(),
  );
  for (const q of ['rangement', 'goulot', 'stock', 'panne', 'muda', '80/20']) {
    assert.ok(
      index.some((hay) => matchesAll(hay, parseTerms(q))),
      `« ${q} » ne renvoie aucun concept`,
    );
  }
});

// Logique de la recherche du tableau, extraite pour être testable (cf. tests/).
// Insensible à la casse et aux accents ; multi-mots : tous les termes doivent matcher.

export function norm(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function parseTerms(query) {
  return norm(query).split(/\s+/).filter(Boolean);
}

export function matchesAll(haystack, terms) {
  const h = norm(haystack);
  return terms.every((t) => h.includes(t));
}

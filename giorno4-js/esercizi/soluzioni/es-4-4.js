// Esercizio 4.4 - Le funzioni del catalogo

function libroPerId(id) {
  return libri.find((l) => l.id === id);
}

function libriDiGenere(genere) {
  return libri.filter((l) => l.genere === genere);
}

function titoliDisponibili() {
  return libri.filter((l) => l.disponibile).map((l) => l.titolo);
}

function descrivi({ titolo, autore, anno, disponibile }) {
  return `${titolo}, ${autore}, ${anno} - ${disponibile ? "disponibile" : "in prestito"}`;
}

console.log(libroPerId(8));
console.log(libroPerId(99)); // undefined
console.log(libriDiGenere("Saggio"));
console.log(titoliDisponibili());
console.log(descrivi(libri[0]));
console.log(libriDiGenere("Giallo").map(descrivi));
// map(descrivi) funziona perché map chiama la funzione passandole ogni libro:
// descrivi è già una funzione che riceve un libro, non serve avvolgerla in (l) => descrivi(l).

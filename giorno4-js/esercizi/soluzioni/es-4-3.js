// Esercizio 4.3 - map, filter, find

// 1
console.log(libri.map((l) => l.titolo));

// 2
console.log(libri.map((l) => `${l.titolo} - ${l.autore}`));

// 3
console.log(libri.filter((l) => l.autore === "Italo Calvino"));

// 4
console.log(libri.find((l) => l.id === 8));

// 5
console.log(libri.filter((l) => l.disponibile && l.pagine > 200).map((l) => l.titolo));

// 6
console.log(`Gialli: ${libri.filter((l) => l.genere === "Giallo").length}`); // 4

// 7
function cerca(testo) {
  const t = testo.toLowerCase();
  return libri.filter(
    (l) => l.titolo.toLowerCase().includes(t) || l.autore.toLowerCase().includes(t),
  );
}
console.log(cerca("levi").map((l) => l.titolo));
console.log(cerca("IL").map((l) => l.titolo));

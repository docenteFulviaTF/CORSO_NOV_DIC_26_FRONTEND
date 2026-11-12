// Esercizio 4.2 - Oggetti

// 1
const libro = {
  titolo: "Il nome della rosa",
  autore: "Umberto Eco",
  anno: 1980,
  pagine: 503,
  generi: ["Giallo", "Storico"],
};
console.log(`${libro.titolo} (${libro.anno}) - ${libro.generi.join(", ")}`);

// 2
libro.letto = false;
libro.anno = 1981;
console.log(libro);

// 3
const { titolo, pagine } = libro;
console.log(`${titolo}: ${Math.ceil(pagine / 30)} giorni a 30 pagine al giorno`);

// 4
function etichetta({ titolo, anno }) {
  return `${titolo} (${anno})`;
}
console.log(etichetta(libro));
console.log(etichetta(libri[3])); // "La storia (1974)"

// 5
const copia = { ...libro, letto: true };
console.log(libro.letto, copia.letto); // false true

// 6
const testo = JSON.stringify(libro);
console.log(testo);
console.log(JSON.parse(testo).autore);

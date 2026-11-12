// ============================================================
// 05 - ARRAY: un elenco di valori
// ============================================================

const titoli = ['Il barone rampante', 'Il nome della rosa', 'Lessico famigliare'];

// L'INDICE (la posizione) parte da 0
console.log(titoli[0]); // "Il barone rampante"
console.log(titoli[2]); // "Lessico famigliare"
console.log(titoli[23]);
console.log(titoli.length); // 3: quanti elementi
titoli[0] = 'titolo nuovo'; //sovrascrivo il primo elemento
titoli.push('Marcovaldo'); // aggiunge in fondo
console.log(titoli);
titoli.pop(); // toglie l'ultimo
console.log(titoli);

console.log(titoli.includes('Lessico famigliare')); // true: c'è?
console.log(titoli.join(', ')); // un'unica stringa con i titoli separati da virgola

// ---------------- FOR...OF: scorrere un array ----------------
for (const titolo of titoli) {
  console.log(titolo);
}

// con for e indice, quando serve anche la posizione
for (let i = 0; i < titoli.length; i++) {
  console.log(`${i + 1}. ${titoli[i]}`);
}

// ---------------- TOTALE E MASSIMO ----------------
const pagine = [270, 503, 230, 130, 220];

let totale = 0; //somma delle pagine
let massimo = pagine[0]; //numero più alto di pagine
for (const p of pagine) {
  totale += p;
  if (p > massimo) {
    massimo = p;
  }
}
console.log(`Totale: ${totale}, massimo: ${massimo}`);

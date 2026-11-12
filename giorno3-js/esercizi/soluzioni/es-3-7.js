// Esercizio 3.7 - Statistiche sulle pagine
const pagine = [270, 503, 220, 230, 130, 168, 160, 509];

let totale = 0;
let massimo = pagine[0];
let oltre300 = 0;

for (const p of pagine) {
  totale += p;
  if (p > massimo) {
    massimo = p;
  }
  if (p > 300) {
    oltre300++;
  }
}

console.log(`Totale: ${totale}`);
console.log(`Media: ${(totale / pagine.length).toFixed(1)}`);
console.log(`Massimo: ${massimo}`);
console.log(`Libri oltre le 300 pagine: ${oltre300}`);

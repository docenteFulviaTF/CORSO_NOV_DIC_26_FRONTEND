// Esercizio 3.2 - Conversioni
const pagineLette = "120";
const pagineTotali = "503";

const lette = Number(pagineLette);
const totali = Number(pagineTotali);

console.log(`Mancano ${totali - lette} pagine`);
console.log(`Hai letto il ${((lette / totali) * 100).toFixed(1)}%`);

console.log(pagineLette + pagineTotali);
// Stampa "120503": sono due stringhe, e con le stringhe + le unisce invece di sommarle.

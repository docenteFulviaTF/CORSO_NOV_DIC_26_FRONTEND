// Esercizio 3.1 - Le variabili di un libro
const titolo = 'Il barone rampante';
const autore = 'Italo Calvino';
const anno = 1957;
const pagine = 104;

console.log(`${titolo} di ${autore} (${anno}), ${pagine} pagine`);
console.log(`Il libro ha ${2026 - anno} anni`);
console.log(`A 25 pagine al giorno servono ${Math.ceil(pagine / 25)} giorni`);
console.log(titolo.toUpperCase());
console.log(`Il titolo ha ${titolo.length} caratteri`);

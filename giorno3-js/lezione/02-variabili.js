// ============================================================
// 02 - VARIABILI, TIPI, OPERATORI
// ============================================================

// Una VARIABILE è un nome che contiene un valore.
// let: il valore può cambiare.   const: il valore non cambia.
let num1; //dichiarazione
console.log(num1);
num1 = 33; //inizializzazione (prima assegnazione)
console.log(num1);
let copieDisponibili = 3;
const titolo = 'Il barone rampante';

copieDisponibili = 2; // ok
//titolo = "Altro";  // errore: Assignment to constant variable

// Regola pratica: const, e let solo se il valore deve cambiare.
// Nomi in camelCase: annoPubblicazione, copieDisponibili.

// ---------------- TIPI ----------------
const autore = 'Italo Calvino'; // string: testo tra virgolette
const anno = 1957; // number: interi e decimali (con il PUNTO: 12.5)
const disponibile = true; // boolean: true o false

console.log(typeof autore, typeof anno, typeof disponibile);

// ---------------- OPERATORI ----------------
console.log(10 + 3, 10 - 3, 10 * 3, 10 / 3);
console.log(10 % 3); // resto della divisione: 1. Un numero è pari se n % 2 === 0

let prestiti = 0;
prestiti = prestiti + 1;
console.log(prestiti);
// console.log(prestiti +1);
// console.log(prestiti);
prestiti += 1; // come sopra
prestiti++; // aggiunge 1
console.log('prestiti:', prestiti); // 3

// ---------------- STRINGHE ----------------
console.log(titolo + ' di ' + autore + '.'); // + unisce le stringhe

// TEMPLATE LITERAL: tra backtick ` (Alt+96 su Windows) e ${...} per inserire valori
console.log(`${titolo} di ${autore} (${anno})`);
console.log(`Il libro ha ${2026 - anno} anni`); // dentro ${} si può calcolare
console.log(titolo.length); // numero di caratteri
console.log(titolo.toUpperCase()); // MAIUSCOLO
console.log(titolo.includes('ramp')); // true: contiene il testo?
let stringa = '   valore     ';
console.log(stringa.length);
console.log(stringa.trim()); //elimina eventuali spazi a destra e a sinistra
stringa = stringa.trim();
console.log(stringa.length);

// ---------------- CONVERSIONI ----------------
// I valori letti da un form sono SEMPRE stringhe
const letto = '70';
console.log(letto + 30); // "7030": con una stringa, + unisce
console.log(Number(letto) + 30); // 300: prima si converte in numero

// ---------------- MATH ----------------
console.log(Math.round(12.5), Math.ceil(12.01)); // 13 13: arrotonda, arrotonda per eccesso
console.log(Math.floor(Math.random() * 6) + 1); // dado: intero casuale da 1 a 6
console.log((10 / 3).toFixed(2)); // "3.33": due decimali

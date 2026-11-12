// ============================================================
// 03 - CONDIZIONI
// ============================================================

// CONFRONTI: restituiscono true o false
console.log(5 > 3, 5 >= 5, 5 < 3);
console.log(5 === 5); // confronta valore e tipo di dato
console.log(5 === '5'); // false: numero e stringa sono diversi
console.log(5 == '5'); // true: confronta solo il valore
console.log(5 !== 3); // diverso per tipo o per valore
console.log(5 != '5'); // diverso per valore
// Esiste anche == (due uguali), che converte i tipi: 5 == "5" è true.

// ---------------- IF / ELSE ----------------
const giorniDiRitardo = 0;

if (giorniDiRitardo === 0) {
  console.log('Restituito in tempo.');
} else {
  console.log('Ritardo!!!!!');
}

if (giorniDiRitardo === 0) {
  console.log('Restituito in tempo.');
} else if (giorniDiRitardo <= 7) {
  console.log(`Multa di ${giorniDiRitardo * 0.5} euro.`);
} else if (giorniDiRitardo <= 14) {
  console.log(`Multa di ${giorniDiRitardo * 1} euro.`);
} else {
  console.log('Tessera sospesa.');
}
// Si controlla dall'alto: la prima condizione vera vince, le altre si saltano.

// ---------------- OPERATORI LOGICI ----------------
const tesseraValida = true;
const copie = 1;

// && (E): devono essere vere tutte e due
if (tesseraValida && copie > 0) {
  console.log('Puoi prendere il libro.');
} else {
  console.log('Prestito non possibile.');
}

// || (O): basta che una sia vera
const eta = 17;
const studente = false;
if (eta < 18 || studente) {
  console.log('Tessera ridotta.');
}

// ! (NON): inverte true e false
if (!tesseraValida) {
  console.log('Rinnova la tessera.');
}

// ---------------- OPERATORE TERNARIO ----------------
// condizione ? valoreSeVero : valoreSeFalso
const stato = copie > 0 ? 'disponibile' : 'in prestito';
console.log(`Il libro è ${stato}.`);

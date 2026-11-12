// Esercizio 3.3 - La multa
const giorniRitardo = 10;
const studente = false;

let multa = 0;
if (giorniRitardo <= 7) {
  multa = giorniRitardo * 0.5;
} else {
  multa = giorniRitardo * 1;
}

if (multa > 20) {
  multa = 20;
}

if (studente) {
  multa = multa / 2;
}

if (multa === 0) {
  console.log('Nessuna multa');
} else {
  console.log(`Ritardo: ${giorniRitardo} giorni - multa: ${multa.toFixed(2)} €`);
}
// Prove: 0 -> nessuna multa; 3 -> 1.50; 10 -> 10.00; 40 -> 20.00 (studente: 10.00)

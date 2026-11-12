// Esercizio 4.1 - Funzioni

function calcolaMulta(giorniRitardo, studente) {
  let multa = giorniRitardo <= 7 ? giorniRitardo * 0.5 : giorniRitardo;
  if (multa > 20) {
    multa = 20;
  }
  if (studente) {
    multa = multa / 2;
  }
  return multa;
}

console.log(calcolaMulta(3, false)); // 1.5
console.log(calcolaMulta(10, false)); // 10
console.log(calcolaMulta(40, true)); // 10

function formattaPrezzo(numero) {
  return `${numero.toFixed(2)} €`;
}
console.log(formattaPrezzo(6.5)); // "6.50 €"

console.log(formattaPrezzo(calcolaMulta(12, false))); // "12.00 €"

function giorniDiLettura(pagine, alGiorno = 25) {
  return Math.ceil(pagine / alGiorno);
}
console.log(giorniDiLettura(503), giorniDiLettura(503, 50)); // 21 11

const formattaPrezzoBreve = (n) => `${n.toFixed(2)} €`;
console.log(formattaPrezzoBreve(3)); // "3.00 €"

// ============================================================
// 01 - FUNZIONI: un blocco di codice con un nome, da riusare
// ============================================================

// DICHIARAZIONE: function nome(parametri) { ... }
function salutaNoParams() {
  console.log(`Ciao a tutti`);
}

function saluta(nome, cognome) {
  console.log(`Ciao ${nome} ${cognome}!`);
}

// CHIAMATA: il valore tra parentesi (argomento) entra nel parametro
salutaNoParams();
saluta('Anna', 'Cavaliere');
saluta('Marco', 'Gastaldi');
console.log(saluta('Marco', 'Gastaldi')); //undefined perchè la funzione non ha output

// RETURN: la funzione restituisce un valore a chi la chiama
function giorniDiLettura(pagine, pagineAlGiorno) {
  return Math.ceil(pagine / pagineAlGiorno);
}

const giorni = giorniDiLettura(503, 25);
console.log(`Servono ${giorni} giorni`);
console.log(giorniDiLettura(270, 35)); // il risultato si può usare subito
let giorniNecessari = giorniDiLettura(270, 35);
console.log(giorniNecessari);

// PARAMETRO CON VALORE DI DEFAULT: si usa se l'argomento manca
function multa(giorniRitardo, tariffa = 0.5) {
  return giorniRitardo * tariffa;
}
console.log(multa(4)); // 2
console.log(multa(4, 1)); // 4

// ---------------- ARROW FUNCTION ----------------
// La forma breve, molto usata: React la usa ovunque.
const doppio = n => {
  return n * 2;
};

const doppio2 = n => n * 2; //una sola espressione return implicito e niente graffe
console.log(doppio(5));

// se il corpo è una sola espressione: niente graffe e niente return
const quadrato = n => n ** 2;
const somma = (a, b) => a + b;
const congeda = () => 'arrivederci!';

console.log(congeda());
console.log(doppio(5), quadrato(5), somma(2, 3));

// ---------------- CALLBACK ----------------
// Una funzione si può passare a un'altra funzione, che la chiamerà.
// È il meccanismo di map, filter (in questa lezione) e degli eventi (giorno 5).
function ripeti(volte, azione) {
  //azione è una funzione passata come parametro
  for (let i = 1; i <= volte; i++) {
    azione(i);
  }
}
ripeti(3, n => console.log(`Giro ${n}`));
ripeti(4, function (n) {
  console.log(`${n + 4}`);
});

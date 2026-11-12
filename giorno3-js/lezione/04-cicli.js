// ============================================================
// 04 - CICLI: ripetere istruzioni
// ============================================================

// ---------------- FOR ----------------
// for (partenza; condizione per continuare; passo)
for (let i = 1; i <= 5; i++) {
  console.log(`Giro numero ${i}`);
}

for (let k = 5; k <= 20; k++) {
  console.log(k);
}

// ACCUMULARE: una variabile fuori dal ciclo raccoglie il risultato
let somma = 0;
for (let i = 1; i <= 100; i++) {
  somma += i;
  console.log(somma);
}
console.log(`Somma da 1 a 100: ${somma}`); // 5050

// ---------------- WHILE ----------------
// Ripete finché la condizione è vera. Si usa quando non si sa quante volte.
let copie = 5;
let giorno = 0;
while (copie > 0) {
  giorno++;
  copie -= 2; // ogni giorno ne prestiamo 2
  console.log(`Giorno ${giorno}: restano ${copie} copie`);
}
// ATTENZIONE: se la condizione non diventa mai falsa il ciclo non finisce
// e la pagina si blocca. Si chiude la scheda e si corregge il codice.

// ---------------- BREAK ----------------
// break: esce subito dal ciclo
for (let i = 1; i <= 10; i++) {
  if (i > 3) {
    break;
  }
  console.log(i); // 1 2 3
}

//continue interrompe l'iterazione corrente e riprende con la successiva
for (let i = 1; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); // 1 2 4 5
}

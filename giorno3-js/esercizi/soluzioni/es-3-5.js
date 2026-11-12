// Esercizio 3.5 - Lettura a tappe
let restanti = 86;
let giorno = 0;

while (restanti > 0) {
  giorno++;
  if (restanti >= 40) {
    restanti -= 40;
  } else {
    restanti = 0;
  }

  console.log(`Giorno ${giorno}: restano ${restanti} pagine`);
}

console.log(`Finito in ${giorno} giorni`);

// Esercizio 3.6 - Array di titoli
const titoli = [
  "Il barone rampante",
  "Il nome della rosa",
  "Se questo è un uomo",
  "Lessico famigliare",
  "Il giorno della civetta",
  "Le città invisibili",
];

// 1
for (let i = 0; i < titoli.length; i++) {
  console.log(`${i + 1}. ${titoli[i]}`);
}

// 2
let conIl = 0;
for (const titolo of titoli) {
  if (titolo.includes("Il")) {
    conIl++;
  }
}
console.log(`Titoli con "Il": ${conIl}`); // 3

// 3
let piuLungo = titoli[0];
for (const titolo of titoli) {
  if (titolo.length > piuLungo.length) {
    piuLungo = titolo;
  }
}
console.log(`Il titolo più lungo: ${piuLungo}`);

// 4
titoli.push("Marcovaldo");
console.log(`Adesso i titoli sono ${titoli.length}`);

// 5
if (titoli.includes("Lessico famigliare")) {
  console.log("Presente");
} else {
  console.log("Assente");
}

// Esercizio 3.4 - Cicli con i numeri

// 1
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} pari`);
  } else {
    console.log(`${i} dispari`);
  }
}

// 2
let somma = 0;
for (let i = 1; i <= 1000; i++) {
  somma += i;
}
console.log(`Somma da 1 a 1000: ${somma}`); // 500500

// 3
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

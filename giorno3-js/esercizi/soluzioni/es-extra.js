// Extra - Indovina l'anno
const segreto = Math.floor(Math.random() * 101) + 1900; // da 1900 a 2000
let tentativi = 0;
let indovinato = false;

while (!indovinato) {
  const anno = Number(prompt("Indovina l'anno (tra 1900 e 2000):"));
  tentativi++;
  if (anno < segreto) {
    alert("Più alto");
  } else if (anno > segreto) {
    alert("Più basso");
  } else {
    indovinato = true;
  }
}

console.log(`Indovinato in ${tentativi} tentativi!`);
alert(`Indovinato in ${tentativi} tentativi!`);
// Nota: se l'utente preme Annulla, prompt restituisce null e Number(null) è 0:
// il gioco continua. Per uscire servirebbe controllare il null (non richiesto).

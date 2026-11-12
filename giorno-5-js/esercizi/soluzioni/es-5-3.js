// Esercizio 5.3 - Primi eventi

// ---------- Pagine lette ----------
const TOTALE = 503;
let lette = 0;

const numero = document.querySelector("#lette");
const barra = document.querySelector("#barra");

function mostraPagine() {
  numero.textContent = lette;
  barra.value = lette;
}

function cambia(quante) {
  lette = Math.min(TOTALE, Math.max(0, lette + quante)); // tra 0 e TOTALE
  mostraPagine();
}

document.querySelector("#piu").addEventListener("click", () => cambia(10));
document.querySelector("#meno").addEventListener("click", () => cambia(-10));
document.querySelector("#azzera").addEventListener("click", () => {
  lette = 0;
  mostraPagine();
});

// ---------- Recensione ----------
const MASSIMO = 200;
const recensione = document.querySelector("#recensione");
const caratteri = document.querySelector("#caratteri");
const invia = document.querySelector("#invia");

recensione.addEventListener("input", () => {
  const n = recensione.value.length;
  caratteri.textContent = `${n}/${MASSIMO} caratteri`;
  if (n > MASSIMO) {
    caratteri.classList.add("troppo");
  } else {
    caratteri.classList.remove("troppo");
  }
  invia.disabled = n > MASSIMO;
});

// ---------- Tema scuro ----------
const tema = document.querySelector("#tema");
tema.addEventListener("click", () => {
  document.body.classList.toggle("scuro");
  tema.textContent = document.body.classList.contains("scuro") ? "Tema chiaro" : "Tema scuro";
});

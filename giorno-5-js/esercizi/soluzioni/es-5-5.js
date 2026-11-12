// Esercizio 5.5 - Il catalogo da libri.json

const catalogo = document.querySelector("#catalogo");
const messaggio = document.querySelector("#messaggio");
const ricerca = document.querySelector("#ricerca");
const selectGenere = document.querySelector("#genere");

let libri = []; // riempito da fetch

function creaCard(libro) {
  const card = document.createElement("article");
  card.className = libro.disponibile ? "card" : "card esaurito";

  const img = document.createElement("img");
  img.src = libro.copertina ?? "img/logo-libro.svg";
  img.alt = `Copertina de ${libro.titolo}`;

  const h2 = document.createElement("h2");
  h2.textContent = libro.titolo;

  const p = document.createElement("p");
  p.textContent = `${libro.autore}, ${libro.anno}`;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = libro.genere;

  card.append(img, h2, p, badge);
  return card;
}

function mostra() {
  const testo = ricerca.value.trim().toLowerCase();
  const filtrati = libri.filter(
    (l) =>
      (selectGenere.value === "" || l.genere === selectGenere.value) &&
      (l.titolo.toLowerCase().includes(testo) || l.autore.toLowerCase().includes(testo)),
  );

  catalogo.textContent = "";
  filtrati.forEach((l) => catalogo.append(creaCard(l)));
  messaggio.textContent = filtrati.length ? `Libri mostrati: ${filtrati.length}` : "Nessun libro trovato";
}

async function carica() {
  messaggio.textContent = "Caricamento...";
  try {
    const risposta = await fetch("libri.json");
    if (!risposta.ok) throw new Error(`errore HTTP ${risposta.status}`);
    libri = await risposta.json();
    mostra();
  } catch (errore) {
    messaggio.className = "messaggio errore";
    messaggio.textContent = `Impossibile caricare il catalogo: ${errore.message}`;
  }
}

ricerca.addEventListener("input", mostra);
selectGenere.addEventListener("change", mostra);

carica();

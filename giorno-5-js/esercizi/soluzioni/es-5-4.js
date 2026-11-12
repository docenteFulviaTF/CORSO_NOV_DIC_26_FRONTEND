// Esercizio 5.4 - Catalogo con filtri

function creaCard(libro) {
  const card = document.createElement("article");
  card.className = "card";

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

  if (!libro.disponibile) {
    card.classList.add("esaurito");
    const prestito = document.createElement("span");
    prestito.className = "badge badge-rosso";
    prestito.textContent = "In prestito";
    card.append(prestito);
  }
  return card;
}

const ricerca = document.querySelector("#ricerca");
const genere = document.querySelector("#genere");
const soloDisponibili = document.querySelector("#solo-disponibili");
const catalogo = document.querySelector("#catalogo");
const riepilogo = document.querySelector("#riepilogo");

function aggiorna() {
  const testo = ricerca.value.trim().toLowerCase();

  const filtrati = libri.filter((l) => {
    const corrispondeTesto =
      l.titolo.toLowerCase().includes(testo) || l.autore.toLowerCase().includes(testo);
    const corrispondeGenere = genere.value === "" || l.genere === genere.value;
    const corrispondeDisponibile = !soloDisponibili.checked || l.disponibile;
    return corrispondeTesto && corrispondeGenere && corrispondeDisponibile;
  });

  catalogo.textContent = "";
  filtrati.forEach((l) => catalogo.append(creaCard(l)));

  riepilogo.textContent =
    filtrati.length === 0 ? "Nessun libro trovato" : `${filtrati.length} ${filtrati.length === 1 ? "libro mostrato" : "libri mostrati"}`;
}

ricerca.addEventListener("input", aggiorna);
genere.addEventListener("change", aggiorna);
soloDisponibili.addEventListener("change", aggiorna);

document.querySelector("#azzera").addEventListener("click", () => {
  ricerca.value = "";
  genere.value = "";
  soloDisponibili.checked = false;
  aggiorna();
});

aggiorna();

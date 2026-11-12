// Esercizio 5.2 - Le card del catalogo

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

  card.append(img, h2, p, badge); // append accetta più elementi

  if (!libro.disponibile) {
    card.classList.add("esaurito");
    const prestito = document.createElement("span");
    prestito.className = "badge badge-rosso";
    prestito.textContent = "In prestito";
    card.append(prestito);
  }

  return card;
}

const catalogo = document.querySelector("#catalogo");
for (const libro of libri) {
  catalogo.append(creaCard(libro));
}

const disponibili = libri.filter((l) => l.disponibile).length;
document.querySelector("#riepilogo").textContent =
  `${libri.length} libri, ${disponibili} disponibili, ${libri.length - disponibili} in prestito`;

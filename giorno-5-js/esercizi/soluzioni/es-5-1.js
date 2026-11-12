// Esercizio 5.1 - La lista dei libri nella pagina
const lista = document.querySelector("#lista");

for (const libro of libri) {
  const li = document.createElement("li");
  li.textContent = `${libro.titolo} – ${libro.autore} (${libro.anno})`;
  if (!libro.disponibile) {
    li.classList.add("non-disponibile");
  }
  lista.append(li);
}

document.querySelector("#totale").textContent = libri.length;

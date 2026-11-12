// ============================================================
// 01 - DOM: leggere e modificare la pagina
// Lo script ha defer: parte quando l'HTML è stato letto tutto,
// quindi gli elementi esistono già.
// ============================================================

// ---------------- SELEZIONARE ----------------
//getElementById: metodo tradizionale ma ancora utilizzato e leggermente più performante
const elemProva = document.getElementById('elementoDiProva');
console.log('elemProva', elemProva);

// querySelector: il PRIMO elemento che corrisponde al selettore CSS
const titolo = document.querySelector('#titolo');
// console.dir(titolo);
const descrizione = document.querySelector('#descrizione');
// querySelectorAll: TUTTI gli elementi, da scorrere con for...of
const note = document.querySelectorAll('.note li');

console.log(titolo, note.length);
// Se il selettore non trova niente, querySelector restituisce null.
// Errore tipico: "Cannot read properties of null" = selettore sbagliato o script senza defer.

// ---------------- TESTO ----------------
console.log(titolo.textContent); // leggere
titolo.textContent = 'Bookshelf - catalogo'; // scrivere
console.log(titolo.textContent);
console.log('descrizione prima di cambio', descrizione.textContent);
descrizione.textContent = 'Cosimo sale su un albero e non ne scende più.';
console.log('descrizione dopo cambio', descrizione.textContent);
// Per inserire testo si usa textContent. Esiste anche innerHTML, che interpreta
// il testo come HTML: con dati scritti dagli utenti è pericoloso (attacco XSS).

// ---------------- ATTRIBUTI ----------------
const copertina = document.querySelector('#copertina');
copertina.src = 'img/nome-della-rosa.svg';
copertina.alt = 'Copertina de Il nome della rosa';

// ---------------- CLASSI ----------------
// Lo stile sta nel CSS; JavaScript aggiunge e toglie le classi
note[0].classList.add('evidenziato');
console.log('note[1].classList', note[1].classList);
note[1].classList.toggle('evidenziato'); // la aggiunge se manca, la toglie se c'è

// ---------------- TOGLIERE ----------------
document.querySelector('.da-togliere').remove();

// ---------------- CREARE ELEMENTI ----------------
// 1. createElement  2. si riempie  3. si aggiunge alla pagina con append
const nuovaNota = document.createElement('li');
nuovaNota.textContent = 'Nota aggiunta da JavaScript';
document.querySelector('.note').append(nuovaNota);

// ---------------- DAGLI ARRAY ALLA PAGINA ----------------
// Il caso più importante: i dati stanno in un array (tra poco arriveranno da un file JSON)
// e la pagina si costruisce a partire dai dati.
const catalogo = document.querySelector('#catalogo');

for (const libro of libri) {
  const li = document.createElement('li');
  li.textContent = `${libro.titolo} - ${libro.autore} (${libro.anno})`;
  if (!libro.disponibile) {
    li.classList.add('non-disponibile');
  }
  catalogo.append(li);
}

document.querySelector('#conteggio').textContent = libri.length;

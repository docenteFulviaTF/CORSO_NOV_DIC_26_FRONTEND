// ============================================================
// 02 - EVENTI: eseguire codice quando succede qualcosa
// elemento.addEventListener("tipo di evento", funzione)
// Il browser chiama la funzione ogni volta che l'evento accade.
// ============================================================

// ---------------- 1. CLICK ----------------
const pulsante = document.querySelector('#aggiungi');
const contatore = document.querySelector('#contatore');
let pagine = 0; // il dato che cambia

pulsante.addEventListener('click', () => {
  console.log('click pulsante intercettato');
  pagine++;
  contatore.textContent = pagine;
});
//ERRORE TIPICO: addEventListener("click", aggiorna()) con le parentesi:
// la funzione viene eseguita subito, una volta, e al click non succede niente.
pulsante.addEventListener('mouseenter', decrementa);

function decrementa() {
  console.log('mouseEnter intercettato');
  pagine--;
  contatore.textContent = pagine;
}

// ---------------- 2. INPUT: a ogni tasto ----------------
const campoTitolo = document.querySelector('#titolo');
const anteprima = document.querySelector('#anteprima');
const caratteri = document.querySelector('#caratteri');

campoTitolo.addEventListener('input', () => {
  // .value: il testo scritto nel campo (sempre una stringa)
  console.log('evento input intercettato su titolo');
  anteprima.textContent = campoTitolo.value;
  caratteri.textContent = campoTitolo.value.length;
});

// ---------------- 3. CHANGE: una scelta ----------------
const genere = document.querySelector('#genere');
genere.addEventListener('change', () => {
  console.log('evento change intercettato su menu a tendina');
  document.querySelector('#scelta').textContent = `Hai scelto: ${genere.value}`;
});

// ---------------- 4. SUBMIT: un form ----------------
const form = document.querySelector('#nuovo-libro');
const lista = document.querySelector('#lista');
const errore = document.querySelector('#errore');

// Si ascolta il SUBMIT del form (non il click del pulsante):
// così funziona anche premendo Invio in un campo.
form.addEventListener('submit', evento => {
  console.log('submit intercettato');
  evento.preventDefault(); // blocca l'invio normale, che ricaricherebbe la pagina
  console.log('evento', evento);

  const titolo = form.titolo.value.trim(); // trim: toglie gli spazi ai lati
  const autore = form.elements.autore.value.trim();

  if (titolo === '' || autore === '') {
    errore.textContent = 'Titolo e autore sono obbligatori.';
    return;
  }
  errore.textContent = '';

  const li = document.createElement('li');
  li.textContent = `${titolo} - ${autore}`;
  lista.append(li);

  form.reset(); // svuota i campi
  form.titolo.focus(); //mette il cursore sul campo titolo
});

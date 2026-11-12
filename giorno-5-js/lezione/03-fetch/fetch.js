// ============================================================
// 03 - FETCH: chiedere dati con una richiesta HTTP, senza ricaricare la pagina
// Qui chiediamo il file libri.json che sta accanto alla pagina.
// Nel modulo IV lo stesso codice chiederà i libri all'API di Laravel:
// cambierà solo l'indirizzo.
// ============================================================

const URL_LIBRI = 'libri.json';

// ---------------- JSON ----------------
// Apri libri.json: sembra un array di oggetti JavaScript, ma è TESTO.
// Regole del JSON: chiavi tra virgolette doppie, stringhe tra virgolette doppie,
// niente commenti, niente virgola dopo l'ultimo elemento, niente funzioni.

// ---------------- async / await ----------------
// fetch NON restituisce subito i dati: la risposta arriva dopo (millisecondi o secondi).
// await = "aspetta la risposta, poi continua". Si può usare solo dentro una funzione async.
async function caricaLibri() {
  const messaggio = document.querySelector('#messaggio');
  const lista = document.querySelector('#lista');

  messaggio.className = 'messaggio';
  messaggio.textContent = 'Caricamento...';

  try {
    const risposta = await fetch(URL_LIBRI);
    console.log(risposta);
    // fetch va in errore SOLO se la rete non risponde.
    // Un 404 (file inesistente) o un 500 arrivano come risposta "normale":
    // il controllo lo facciamo noi con risposta.ok (vero per i codici 200-299).
    if (!risposta.ok) {
      throw new Error(`errore HTTP ${risposta.status} (${risposta.statusText})`);
    }

    const libri = await risposta.json();
    console.log(libri); // da testo JSON ad array di oggetti

    messaggio.textContent = `Libri caricati: ${libri.length}`;
    for (const libro of libri) {
      const li = document.createElement('li');
      li.textContent = `${libro.titolo} - ${libro.autore} (${libro.anno})`;
      lista.append(li);
    }
  } catch (errore) {
    // try / catch: se qualcosa nel blocco try va in errore, si salta qui
    messaggio.className = 'messaggio errore';
    messaggio.textContent = `Impossibile caricare i libri: ${errore.message}`;
  }
}

caricaLibri();

// Prove da fare in aula:
// 1. Cambia URL_LIBRI in "libri-sbagliato.json": compare l'errore 404.
// 2. F12 > scheda Rete (Network): ogni fetch è una riga, con indirizzo, stato e risposta.

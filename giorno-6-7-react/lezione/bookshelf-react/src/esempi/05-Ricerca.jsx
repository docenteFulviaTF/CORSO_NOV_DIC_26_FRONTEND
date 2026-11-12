// ============================================================
// 05 - CAMPO CONTROLLATO: il valore di un input sta nello stato
// ============================================================
import {useState} from 'react';
import {libri} from '../dati/libri.js';

export default function Ricerca() {
  const [testo, setTesto] = useState('');

  // La lista mostrata si CALCOLA dallo stato a ogni disegno
  const cercato = testo.trim().toLowerCase();
  const trovati = libri.filter(
    l => l.titolo.toLowerCase().includes(cercato) || l.autore.toLowerCase().includes(cercato)
  );

  return (
    <section className="riquadro">
      <h2>Cerca un libro</h2>
      {/* CAMPO CONTROLLATO:
          value={testo}: il campo mostra sempre quello che c'è nello stato;
          onChange: a ogni tasto si aggiorna lo stato con il testo scritto (e.target.value).
          Stato aggiornato -> React ridisegna -> il campo e l'elenco mostrano il nuovo valore.
          Con value senza onChange il campo resta bloccato: non si riesce a scrivere. */}
      <input type="search" placeholder="Titolo o autore" value={testo} onChange={e => setTesto(e.target.value)} />{' '}
      <button className="secondario" onClick={() => setTesto('')}>
        Cancella
      </button>
      {/* Siccome il valore è nello stato, si può usare ovunque nel componente */}
      <p>{testo === '' ? 'Scrivi per cercare' : `Risultati per "${testo}": ${trovati.length}`}</p>
      <ul>
        {trovati.map(l => (
          <li key={l.id}>
            {l.titolo} - {l.autore}
          </li>
        ))}
      </ul>
    </section>
  );
}

// ============================================================
// 04 - LISTE: da un array di dati a un elenco di componenti
// ============================================================
import {useState} from 'react';
import {libri} from '../dati/libri.js';

function SchedaLibro({libro}) {
  return (
    <article className={libro.disponibile ? 'card' : 'card esaurito'}>
      <img src={libro.copertina ?? '/img/logo-libro.svg'} alt={`Copertina de ${libro.titolo}`} />
      <div className="card-corpo">
        <h3>{libro.titolo}</h3>
        <p>
          {libro.autore}, {libro.anno}
        </p>
        <span className="badge">{libro.genere}</span>
      </div>
    </article>
  );
}

const generi = ['Tutti', 'Romanzo', 'Racconti', 'Giallo', 'Saggio'];

export default function Liste() {
  const [genere, setGenere] = useState('Tutti');

  // Non si salva la lista filtrata nello stato: si CALCOLA a ogni disegno
  // a partire dallo stato (il genere scelto) e dai dati.
  const mostrati = genere === 'Tutti' ? libri : libri.filter(l => l.genere === genere);

  return (
    <>
      <h2>
        Catalogo: {mostrati.length} {mostrati.length === 1 ? 'libro' : 'libri'}
      </h2>
      <div className="filtri">
        {generi.map(g => (
          <button key={g} className={g === genere ? '' : 'secondario'} onClick={() => setGenere(g)}>
            {g}
          </button>
        ))}
      </div>

      <div className="griglia">
        {/* map trasforma ogni libro in un componente.
            key: un valore UNICO per ogni elemento (l'id). React lo usa per capire
            quale elemento è cambiato. Senza key, in console compare un avviso. */}
        {mostrati.map(libro => (
          <SchedaLibro key={libro.id} libro={libro} />
        ))}
      </div>
    </>
  );
}

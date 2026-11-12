// ============================================================
// 07 - UN'APPLICAZIONE DIVISA IN COMPONENTI: il catalogo Bookshelf
// Catalogo tiene lo stato (dati, ricerca, genere) e decide cosa mostrare.
// I componenti figli ricevono tutto quello che serve con le props e si limitano a mostrarlo.
// ============================================================
import {useEffect, useState} from 'react';

// ---------- componenti che mostrano e basta ----------

function SchedaLibro({libro}) {
  // stato LOCALE della scheda: ogni scheda apre e chiude i suoi dettagli
  const [aperta, setAperta] = useState(false);

  return (
    <article className={libro.disponibile ? 'card' : 'card esaurito'}>
      <img src={libro.copertina ?? '/img/logo-libro.svg'} alt={`Copertina de ${libro.titolo}`} />
      <div className="card-corpo">
        <h3>{libro.titolo}</h3>
        <p>{libro.autore}</p>
        <span className="badge">{libro.genere}</span>
        <button className="secondario" onClick={() => setAperta(!aperta)}>
          {aperta ? 'Meno dettagli' : 'Dettagli'}
        </button>
        {aperta && (
          <p>
            {libro.anno} - {libro.pagine} pagine - {libro.disponibile ? 'disponibile' : 'in prestito'}
          </p>
        )}
      </div>
    </article>
  );
}

function Griglia({libri}) {
  if (libri.length === 0) return <p>Nessun libro trovato.</p>;
  return (
    <div className="griglia">
      {libri.map(l => (
        <SchedaLibro key={l.id} libro={l} />
      ))}
    </div>
  );
}

function Riepilogo({mostrati, totale}) {
  return (
    <p>
      Mostrati {mostrati} libri su {totale}
    </p>
  );
}

// ---------- il componente che tiene lo stato ----------

const generi = ['Tutti', 'Romanzo', 'Racconti', 'Giallo', 'Saggio'];

export default function Catalogo() {
  const [libri, setLibri] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);
  const [testo, setTesto] = useState('');
  const [genere, setGenere] = useState('Tutti');

  useEffect(() => {
    async function carica() {
      try {
        const risposta = await fetch('/libri.json');
        if (!risposta.ok) throw new Error(`errore HTTP ${risposta.status}`);
        setLibri(await risposta.json());
      } catch (e) {
        setErrore(e.message);
      } finally {
        setCaricamento(false);
      }
    }
    carica();
  }, []);

  if (caricamento) return <p>Caricamento...</p>;
  if (errore) return <p className="errore">Impossibile caricare il catalogo: {errore}</p>;

  // valori calcolati dallo stato
  const cercato = testo.trim().toLowerCase();
  const mostrati = libri.filter(
    l =>
      (genere === 'Tutti' || l.genere === genere) &&
      (l.titolo.toLowerCase().includes(cercato) || l.autore.toLowerCase().includes(cercato))
  );

  return (
    <>
      <h2>Catalogo</h2>
      <div className="filtri">
        <input type="search" placeholder="Titolo o autore" value={testo} onChange={e => setTesto(e.target.value)} />
        {generi.map(g => (
          <button key={g} className={g === genere ? '' : 'secondario'} onClick={() => setGenere(g)}>
            {g}
          </button>
        ))}
      </div>
      <Riepilogo mostrati={mostrati.length} totale={libri.length} />
      <Griglia libri={mostrati} />
    </>
  );
}

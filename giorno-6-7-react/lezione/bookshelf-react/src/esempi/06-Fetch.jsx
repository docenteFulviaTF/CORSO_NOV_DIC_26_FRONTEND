// ============================================================
// 06 - useEffect e fetch: caricare i dati da un file JSON
// libri.json sta nella cartella public: nel browser è all'indirizzo /libri.json.
// Nel modulo IV lo stesso codice chiederà i libri all'API di Laravel.
// ============================================================
import {useEffect, useState} from 'react';

export default function Fetch() {
  // Tre stati da gestire sempre: dati, caricamento in corso, errore
  const [libri, setLibri] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  // useEffect(funzione, dipendenze): esegue la funzione DOPO che il componente
  // è stato disegnato. Con [] come dipendenze: una volta sola, alla prima apparizione.
  // Perché non mettere fetch direttamente nel corpo del componente?
  // Perché il corpo viene eseguito a ogni disegno: fetch -> setLibri -> nuovo disegno
  // -> fetch -> setLibri -> ... all'infinito.
  useEffect(() => {
    async function carica() {
      try {
        const risposta = await fetch('/libri.json');
        if (!risposta.ok) throw new Error(`errore HTTP ${risposta.status}`);
        const rispostaJson = await risposta.json();
        setLibri(rispostaJson);
      } catch (e) {
        setErrore(e.message);
      } finally {
        setCaricamento(false); // finally: sia in caso di successo sia di errore
      }
    }
    carica();
  }, []);

  // return anticipati: un disegno diverso per ogni situazione
  if (caricamento) return <p>Caricamento...</p>;
  if (errore) return <p className="errore">Impossibile caricare i libri: {errore}</p>;

  return (
    <section className="riquadro">
      <h2>Da libri.json: {libri.length} libri</h2>
      <ul>
        {/* la key del map non serve per ordina ma serve internamente a react per capire se qualcosa è cambiato nell'array */}
        {libri.map(l => (
          <li key={l.id}>
            {l.titolo} ({l.anno})
          </li>
        ))}
      </ul>
    </section>
  );
}
// Prova: cambia "/libri.json" in "/libri-sbagliato.json" e guarda cosa compare.
// In sviluppo (StrictMode) useEffect parte due volte: nella scheda Rete di F12 si vedono
// due richieste. Nella versione pubblicata ne parte una.

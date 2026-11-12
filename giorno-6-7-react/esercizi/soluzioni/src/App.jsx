import { useState } from "react";
import { libri } from "./dati/libri.js";
import Intestazione from "./componenti/Intestazione.jsx";
import SchedaLibro from "./componenti/SchedaLibro.jsx";

const generi = ["Tutti", "Romanzo", "Racconti", "Giallo", "Saggio"];

export default function App() {
  const [genere, setGenere] = useState("Tutti");
  const [soloDisponibili, setSoloDisponibili] = useState(false);
  const [ordine, setOrdine] = useState("titolo");

  const disponibili = libri.filter((l) => l.disponibile).length;

  // calcolata a ogni disegno dagli stati: non è uno stato
  const filtrati = libri.filter(
    (l) => (genere === "Tutti" || l.genere === genere) && (!soloDisponibili || l.disponibile),
  );
  const mostrati = [...filtrati].sort((a, b) =>
    ordine === "titolo" ? a.titolo.localeCompare(b.titolo) : a.anno - b.anno,
  );

  return (
    <main>
      <Intestazione titolo="Bookshelf" sottotitolo="Il catalogo del corso, in React" />
      <p>
        {libri.length} libri, {disponibili} disponibili
      </p>

      <div className="filtri">
        {generi.map((g) => (
          <button key={g} className={g === genere ? "" : "secondario"} onClick={() => setGenere(g)}>
            {g}
          </button>
        ))}
        <button
          className={soloDisponibili ? "" : "secondario"}
          onClick={() => setSoloDisponibili(!soloDisponibili)}
        >
          Solo disponibili: {soloDisponibili ? "sì" : "no"}
        </button>
      </div>

      <div className="filtri">
        Ordina per:
        <button className={ordine === "titolo" ? "" : "secondario"} onClick={() => setOrdine("titolo")}>
          Titolo
        </button>
        <button className={ordine === "anno" ? "" : "secondario"} onClick={() => setOrdine("anno")}>
          Anno
        </button>
      </div>

      {mostrati.length === 0 ? (
        <p>Nessun libro trovato</p>
      ) : (
        <>
          <p>Mostrati {mostrati.length} libri</p>
          <div className="griglia">
            {mostrati.map((l) => (
              <SchedaLibro key={l.id} libro={l} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

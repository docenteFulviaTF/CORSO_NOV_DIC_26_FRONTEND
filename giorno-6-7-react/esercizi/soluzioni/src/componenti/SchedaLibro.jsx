import { useState } from "react";

export default function SchedaLibro({ libro }) {
  const [miPiace, setMiPiace] = useState(0);
  const [dettagli, setDettagli] = useState(false);

  return (
    <article className={libro.disponibile ? "card" : "card esaurito"}>
      <img src={libro.copertina ?? "/img/logo-libro.svg"} alt={`Copertina de ${libro.titolo}`} />
      <div className="card-corpo">
        <h3>{libro.titolo}</h3>
        <p>
          {libro.autore}, {libro.anno}
        </p>
        <span className="badge">{libro.genere}</span>
        {!libro.disponibile && <span className="badge badge-rosso">In prestito</span>}

        {dettagli && <p>{libro.pagine} pagine</p>}

        <button className="secondario" onClick={() => setMiPiace(miPiace + 1)}>
          {miPiace > 0 ? "♥" : "♡"} Mi piace ({miPiace})
        </button>
        <button className="secondario" onClick={() => setDettagli(!dettagli)}>
          {dettagli ? "Nascondi" : "Dettagli"}
        </button>
      </div>
    </article>
  );
}

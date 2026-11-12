// ============================================================
// 03 - STATO con useState: dati che cambiano e fanno ridisegnare il componente
// ============================================================
import { useState } from "react";

function Contatore() {
  // useState(valoreIniziale) restituisce [valore attuale, funzione per cambiarlo]
  const [pagine, setPagine] = useState(0);

  // Una variabile normale NON funziona: cambia, ma React non lo sa e non ridisegna.
  // let pagine = 0;  pagine++  -> la pagina resta ferma a 0

  return (
    <div className="riquadro">
      <h3>Pagine lette: {pagine}</h3>
      {/* onClick riceve una FUNZIONE: () => ... . Non onClick={setPagine(pagine + 10)} */}
      <button onClick={() => setPagine(pagine + 10)}>+10</button>{" "}
      <button className="secondario" onClick={() => setPagine(Math.max(0, pagine - 10))}>
        -10
      </button>{" "}
      <button className="secondario" onClick={() => setPagine(0)}>
        Azzera
      </button>
    </div>
  );
}

function Dettagli() {
  const [aperto, setAperto] = useState(false);
  return (
    <div className="riquadro">
      <button className="secondario" onClick={() => setAperto(!aperto)}>
        {aperto ? "Nascondi trama" : "Mostra trama"}
      </button>
      {aperto && <p>Cosimo sale su un albero a dodici anni e non ne scende più.</p>}
    </div>
  );
}

export default function Stato() {
  // Ogni componente ha il SUO stato: due Contatori contano separatamente.
  return (
    <>
      <h2>Stato</h2>
      <Contatore />
      <Contatore />
      <Dettagli />
    </>
  );
}

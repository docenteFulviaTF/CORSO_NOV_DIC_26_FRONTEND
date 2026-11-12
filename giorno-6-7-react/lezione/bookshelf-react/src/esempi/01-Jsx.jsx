// ============================================================
// 01 - JSX: HTML dentro JavaScript
// Un COMPONENTE è una funzione che restituisce JSX.
// Il nome inizia con la MAIUSCOLA: <Jsx /> è un componente, <div> un tag HTML.
// ============================================================

export default function Jsx() {
  const titolo = 'Il barone rampante';
  const anno = 1957;
  const disponibile = false;
  const generi = ['Romanzo', 'Avventura'];

  // return di UN solo elemento. Se ne servono più affiancati si usa <> ... </> (Fragment)
  return (
    <section className="riquadro">
      {/* commento in JSX: dentro le graffe */}

      {/* {} inserisce un'espressione JavaScript */}
      <h2>{titolo}</h2>
      <p>
        Pubblicato nel {anno}, {2026 - anno} anni fa.
      </p>
      <p>Titolo in maiuscolo: {titolo.toUpperCase()}</p>

      {/* attributi: className invece di class (class è una parola di JavaScript) */}
      <p className="errore">Un paragrafo con una classe</p>

      {/* condizioni: ternario per scegliere tra due cose... */}
      <p>{disponibile ? 'Disponibile' : 'In prestito'}</p>

      {/* ... e && per mostrare qualcosa solo se la condizione è vera */}
      {!disponibile && <p className="errore">Prenotalo per essere avvisato.</p>}

      <p>{generi.join(' / ')}</p>

      {/* i tag senza contenuto vanno chiusi: <img />, <br />, <input /> */}
      <img src="/img/barone-rampante.svg" alt="Copertina" width="100" />
    </section>
  );
}

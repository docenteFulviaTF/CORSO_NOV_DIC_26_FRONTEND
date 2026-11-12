// ============================================================
// 02 - PROPS: i dati che un componente riceve da chi lo usa
// Sono gli "attributi" del componente: <SchedaLibro titolo="..." anno={1957} />
// Un componente non modifica le sue props: le riceve e le mostra.
// ============================================================

// Le props arrivano come UN oggetto. Con il destructuring si estraggono subito.
// copertina ha un valore di default se non viene passata.
function SchedaLibro({titolo, autore, anno, copertina = '/img/logo-libro.svg'}) {
  return (
    <article className="card">
      <img src={copertina} alt={`Copertina de ${titolo}`} />
      <div className="card-corpo">
        <h3>{titolo}</h3>
        <p>
          {autore}, {anno}
        </p>
      </div>
    </article>
  );
}

// children: il contenuto scritto TRA i tag del componente
function Riquadro({titolo, children}) {
  return (
    <section className="riquadro">
      <h2>{titolo}</h2>
      {children}
    </section>
  );
}

export default function Props() {
  return (
    <>
      <Riquadro titolo="Tre libri, un solo componente">
        <div className="griglia">
          {/* stringhe tra virgolette, tutto il resto tra graffe */}
          <SchedaLibro
            titolo="Il barone rampante"
            autore="Italo Calvino"
            anno={1957}
            copertina="/img/barone-rampante.svg"
          />
          <SchedaLibro
            titolo="Il nome della rosa"
            autore="Umberto Eco"
            anno={1980}
            copertina="/img/nome-della-rosa.svg"
          />
          {/* senza copertina: usa il valore di default */}
          <SchedaLibro titolo="Marcovaldo" autore="Italo Calvino" anno={1963} />
        </div>
      </Riquadro>
      <Riquadro titolo="giusto per provare">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus veritatis porro provident incidunt
          quidem reiciendis! Et quaerat alias deleniti ex nesciunt ipsam, aliquam eius molestias enim similique facere
          sequi!
        </p>
      </Riquadro>
    </>
  );
}

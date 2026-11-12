// Esercizi del giorno 6: leggi ESERCIZI.md.
// I dati sono in src/dati/libri.js, lo stile delle card è in src/index.css
// (classi: griglia, card, card-corpo, badge, esaurito, filtri, riquadro, errore).
import { libri } from "./dati/libri.js";

export default function App() {
  return (
    <main>
      <h1>Bookshelf</h1>
      <p>Libri nei dati: {libri.length}</p>
    </main>
  );
}

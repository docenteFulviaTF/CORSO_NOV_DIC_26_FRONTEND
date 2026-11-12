// App: il componente principale. Qui serve solo a scegliere quale esempio mostrare.
// Giorno 6: esempi 1-4. Giorno 7: esempi 5-7.
import {useState} from 'react';
import Jsx from './esempi/01-Jsx.jsx';
import Props from './esempi/02-Props.jsx';
import Stato from './esempi/03-Stato.jsx';
import Liste from './esempi/04-Liste.jsx';
import Ricerca from './esempi/05-Ricerca.jsx';
import Fetch from './esempi/06-Fetch.jsx';
import Catalogo from './esempi/07-Catalogo.jsx';

const esempi = [
  {nome: '1. JSX', Componente: Jsx},
  {nome: '2. Props', Componente: Props},
  {nome: '3. Stato', Componente: Stato},
  {nome: '4. Liste', Componente: Liste},
  {nome: '5. Ricerca', Componente: Ricerca},
  {nome: '6. Fetch', Componente: Fetch},
  {nome: '7. Catalogo', Componente: Catalogo}
];

export default function App() {
  const [scelto, setScelto] = useState(0);
  const {Componente} = esempi[scelto];

  return (
    <>
      <header className="app-testata">
        <h1>Bookshelf React</h1>
        {esempi.map((es, i) => (
          <button key={es.nome} className={i === scelto ? 'attivo' : ''} onClick={() => setScelto(i)}>
            {es.nome}
          </button>
        ))}
      </header>
      <main>
        <Componente />
      </main>
    </>
  );
}

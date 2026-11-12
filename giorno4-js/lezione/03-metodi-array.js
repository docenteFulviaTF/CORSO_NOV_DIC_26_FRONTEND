// ============================================================
// 03 - METODI DEGLI ARRAY: map, filter, find
// L'array libri arriva da libri.js: apri il file per vedere com'è fatto.
// Ognuno di questi metodi riceve una funzione (callback) e la chiama per ogni libro.
// ============================================================
// Dati di esempio: gli stessi libri del database "biblioteca" e di Bookshelf in Laravel.
// Si carica PRIMA dello script che lo usa: <script src="libri.js" defer></script>
const libri = [
  {
    id: 1,
    titolo: 'Il barone rampante',
    autore: 'Italo Calvino',
    anno: 1957,
    pagine: 270,
    genere: 'Romanzo',
    disponibile: true,
    copertina: 'img/barone-rampante.svg'
  },
  {
    id: 2,
    titolo: 'Le città invisibili',
    autore: 'Italo Calvino',
    anno: 1972,
    pagine: 168,
    genere: 'Romanzo',
    disponibile: false,
    copertina: 'img/citta-invisibili.svg'
  },
  {
    id: 3,
    titolo: 'Marcovaldo',
    autore: 'Italo Calvino',
    anno: 1963,
    pagine: 160,
    genere: 'Racconti',
    disponibile: true,
    copertina: null
  },
  {
    id: 4,
    titolo: 'La storia',
    autore: 'Elsa Morante',
    anno: 1974,
    pagine: 660,
    genere: 'Romanzo',
    disponibile: true,
    copertina: null
  },
  {
    id: 5,
    titolo: "L'isola di Arturo",
    autore: 'Elsa Morante',
    anno: 1957,
    pagine: 400,
    genere: 'Romanzo',
    disponibile: false,
    copertina: null
  },
  {
    id: 6,
    titolo: 'Il sistema periodico',
    autore: 'Primo Levi',
    anno: 1975,
    pagine: 240,
    genere: 'Racconti',
    disponibile: true,
    copertina: null
  },
  {
    id: 7,
    titolo: 'Se questo è un uomo',
    autore: 'Primo Levi',
    anno: 1947,
    pagine: 220,
    genere: 'Saggio',
    disponibile: true,
    copertina: 'img/se-questo-e-un-uomo.svg'
  },
  {
    id: 8,
    titolo: 'Il nome della rosa',
    autore: 'Umberto Eco',
    anno: 1980,
    pagine: 503,
    genere: 'Giallo',
    disponibile: true,
    copertina: 'img/nome-della-rosa.svg'
  },
  {
    id: 9,
    titolo: 'Il pendolo di Foucault',
    autore: 'Umberto Eco',
    anno: 1988,
    pagine: 509,
    genere: 'Romanzo',
    disponibile: false,
    copertina: null
  },
  {
    id: 10,
    titolo: 'Lessico famigliare',
    autore: 'Natalia Ginzburg',
    anno: 1963,
    pagine: 230,
    genere: 'Romanzo',
    disponibile: true,
    copertina: 'img/lessico-famigliare.svg'
  },
  {
    id: 11,
    titolo: 'Il giorno della civetta',
    autore: 'Leonardo Sciascia',
    anno: 1961,
    pagine: 130,
    genere: 'Giallo',
    disponibile: true,
    copertina: 'img/giorno-della-civetta.svg'
  },
  {
    id: 12,
    titolo: 'A ciascuno il suo',
    autore: 'Leonardo Sciascia',
    anno: 1966,
    pagine: 160,
    genere: 'Giallo',
    disponibile: false,
    copertina: null
  },
  {
    id: 13,
    titolo: 'La donna della domenica',
    autore: 'Fruttero e Lucentini',
    anno: 1972,
    pagine: 450,
    genere: 'Giallo',
    disponibile: true,
    copertina: null
  },
  {
    id: 14,
    titolo: 'Gita al faro',
    autore: 'Virginia Woolf',
    anno: 1927,
    pagine: 230,
    genere: 'Romanzo',
    disponibile: true,
    copertina: null
  },
  {
    id: 15,
    titolo: 'Una stanza tutta per sé',
    autore: 'Virginia Woolf',
    anno: 1929,
    pagine: 160,
    genere: 'Saggio',
    disponibile: true,
    copertina: null
  }
];

// forEach: fa qualcosa per ogni elemento (come for...of)
libri.forEach(libro => console.log(libro.titolo));

// map: restituisce un NUOVO array popolato con gli elementi dell'array originario su cui è stata applicata l'azione (n*3, estrazione del titolo)
const numeri = [1, 2, 3, 4];
console.log(numeri.map(n => n * 3));

const titoli = libri.map(libro => libro.titolo);
console.log(titoli);

const etichette = libri.map(l => `${l.titolo} (${l.anno})`);
console.log(etichette);

// filter: TIENE solo gli elementi per cui la funzione restituisce true
const gialli = libri.filter(libro => libro.genere === 'Giallo');
console.log(`Gialli: ${gialli.length}`);

const disponibili = libri.filter(l => l.disponibile);
console.log(`Disponibili: ${disponibili.length}`);

// find: il PRIMO elemento che soddisfa la condizione (o undefined)
const libro8 = libri.find(l => l.id === 8);
console.log(libro8);

// I metodi si CONCATENANO: ogni metodo lavora sul risultato del precedente
const titoliGialli = libri.filter(l => l.genere === 'Giallo').map(l => l.titolo);
console.log(titoliGialli);

// Ricerca senza distinguere maiuscole e minuscole
const cerca = 'calvino';
const trovati = libri.filter(l => l.autore.toLowerCase().includes(cerca));
console.log(trovati.map(l => l.titolo));

// map, filter e find NON modificano l'array originale: ne creano uno nuovo.
// Domani e in React li useremo per costruire la pagina partendo dai dati.

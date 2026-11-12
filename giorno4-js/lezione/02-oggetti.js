// ============================================================
// 02 - OGGETTI: un insieme di proprietà chiave: valore
// ============================================================

let libro = {
  titolo: 'Il nome della rosa',
  autore: 'Umberto Eco',
  anno: 1980,
  generi: ['Giallo', 'Storico'] // una proprietà può essere un array
};

// LEGGERE con il punto (dot notation)
console.log(libro.titolo);
console.log(libro.generi[0]);
let generi = 'Generi: ';
for (const genere of libro.generi) {
  generi += genere + ' ';
}
console.log(generi);
console.log('Generi: ', libro.generi.join(', '), '.');
console.log(libro.pagine); // undefined: non esiste

// Leggere con le parentesi quadre (bracket notation): unico modo quando il nome della proprietà è contenuto in una variabile/costante
console.log(libro['titolo']);
const proprieta = 'titolo';
console.log(libro[proprieta]);

// MODIFICARE e AGGIUNGERE
libro.anno = 1981; //modifica
libro.pagine = 503;
console.log(libro.pagine);
console.log(libro);

// ---------------- UN ARRAY DI OGGETTI ----------------
// È la forma in cui arrivano quasi sempre i dati da un server
const libri = [
  {titolo: 'Il barone rampante', anno: 1957},
  {titolo: 'Lessico famigliare', anno: 1963}
];
for (const l of libri) {
  console.log(`${l.titolo} (${l.anno})`);
}

//ciclo FOR in (solo per gli oggetti valorizza prop con tutte le proprietà)
for (const l of libri) {
  let result = '';
  for (const prop in l) {
    result += l[prop] + ' ';
  }
  console.log(result);
}

// ---------------- DESTRUCTURING ----------------
// Estrarre proprietà in variabili con lo stesso nome. React lo usa per le props.
let {titolo, autore} = libro;
console.log(titolo, autore);

function scheda({titolo, anno}) {
  return `${titolo} - ${anno}`;
}
console.log(scheda(libro));

// ---------------- SPREAD ... ----------------
// Una COPIA dell'oggetto con alcune proprietà cambiate. L'originale non cambia.

const copia = {...libro, generi: ['thriller', 'Romance']}; //generi cambia solo su copia
console.log(libro.generi, copia.generi);
const prova = libro; //prova e libro puntano alla stessa area di memoria
prova.anno = 2030;
console.log(prova.anno, libro.anno);
console.log(libro.generi, prova.generi);
prova.generi[0] = 'fantasy'; //generi cambia sia su copia che su libro
console.log(libro.generi, prova.generi);

// Con gli array: copiare e aggiungere
const numeri = [1, 2];
const altri = [...numeri, 3];
console.log(altri); // [1, 2, 3]
numeri[0] = 5;
console.log(altri[0], numeri[0]);

// ---------------- JSON ----------------
// JSON è il formato di TESTO con cui i dati viaggiano tra browser e server (giorno 5).
// Sembra un oggetto, ma è una stringa, con le chiavi tra virgolette doppie.
const testo = JSON.stringify(libro); // variabile di tipo oggetto -> stringa JSON
console.log(JSON.stringify(libro));
console.log(testo);
console.log(JSON.parse(testo)); // stringa JSON -> oggetto
console.log(libro);
console.log(libro.titolo);

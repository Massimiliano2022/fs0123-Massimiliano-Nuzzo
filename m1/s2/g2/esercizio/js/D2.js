/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let luogo='Roma'; //questa è una stringa (una variabile che contiene un insieme di caratteri alfa-numerifici)
console.log('il tipo di dato contenuto nella variabile luogo è ' + typeof luogo);
let numero = 3; // questo è un numero
console.log('il tipo di dato contenuto nella variabile numero è ' + typeof numero);
let condizione = true; // questo è un boolean
console.log('il tipo di dato contenuto nella variabile condizione è ' + typeof condizione);

let persona = {
  nome: 'Mario',
  cognome: 'Rossi'
}
console.log(persona);
console.log('il tipo di dato contenuto nella variabile persona è ' + typeof persona);

let giorniDellaSettimana = [
  'Lunedi',
  'Martedi',
  'Mercoledi',
  'Giovedi',
  'Venerdi',
  'Sabato',
  'Domenica'
];

console.log(giorniDellaSettimana);
console.log('il tipo di dato contenuto nella variabile giorniDellaSettimana è ' + typeof giorniDellaSettimana);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = 'Massimiliano';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 20;
let c = a + b;
console.log(c);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//name='Nuzzo';

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let d = 4;
let result = d -x;
console.log(result);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'jhon';
let name2 = 'Jhon';

console.log(name1 != name2);

console.log(name1 == name2.toLowerCase());

/* SCRIVI QUI LA TUA RISPOSTA */

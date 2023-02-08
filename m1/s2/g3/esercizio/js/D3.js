/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a=20;
let b = 40;

if(a>b){
  console.log('a è maggiore di b');
}else if(b > a){
  console.log('b è maggiore di a');
}else{
  console.log('a e b sono uguali');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let c = 3;

if(c != 5){
  console.log('Not Equal');
}else{
  console.log('Equal');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let d = 5;
function divisibile(d) {
  let message;
  if(d%5==0){
    message='divisibile';
    return message;
  }else{
    message='non è divisibile per 5';
    return message;
  } 
}
 console.log(divisibile(d));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let e = 2;
let f = 6;

function confronto(e,f) {
  let message;
  if(e == 8 && f == 8){
    message='le variabili e , f sono uguali a 8.'
    return message;
  }else{
    if(e == 8){
      message='la variabile e è = 8';
      return message;
    }else if(f == 8){
      message='la variabile f è = 8';
      return message;
    }else if(e + f == 8){
      message='il risultato di e + f è = 8';
      return message;
    }else{
      message='il risultato di e - f è = 8';
      return message;
    }
  }
}
console.log(confronto(e,f));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let toaltShoppingCart = 50;

if(toaltShoppingCart > 50){
  console.log('La spedizione è gratuita.');
}else{
  console.log('La spedizione costa 10 euro.');
}*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 60;

let totale = totalShoppingCart / 1.2

if(totale > 50){
  console.log('spedizione gratuita');
}else{
  console.log('spedizione costa 10 Euro');
}

console.log('Totale: ' + totale);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let g = 100;
let h = 50;
let i = 300;


function ordinamento(g, h, i) {
  if (i > g && i > h) {
    if (g > h) {
      console.log(i, g, h);
    } else {
      console.log(i, h, g);
    }
  } else if (h > i && h > g) {
    if (g > i) {
      console.log(h, g, i);
    } else {
      console.log(h, i, g);
    }
  }else if(g > h && g > i){
    if (h > i){
      console.log(g,h,i);
    }else{ 
      console.log(g,i,h);
    }
  }
}

ordinamento(g,h,i);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero1 = 2;
console.log('La variabile è di tipo: ' + typeof numero1);
let numeroStringa = '23';
console.log('La variabile è di tipo: ' + typeof numeroStringa);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let x = 10;
function divisibilePerDue(x) {
  let message;
  if(x%2==0){
    message='pari';
    return message;
  }else{
    message='dispari';
    return message;
  } 
}
 console.log(divisibilePerDue(x));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 3
  if (val < 10) {
      console.log("Meno di 10");
      if (val < 5) {
        console.log("Meno di 5");
      }
    }else {
      console.log("Uguale a 10 o maggiore");
    }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let n =  [];
let iterator=1;

while(iterator<=10){
  n.push(iterator);
  iterator++;
}
console.log(n);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

n.pop();
console.log(n);
n.push(100);
console.log(n);

/* SCRIVI QUI LA TUA RISPOSTA */

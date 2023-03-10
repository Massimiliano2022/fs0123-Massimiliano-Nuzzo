// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(numeri) {
    let nArray = [];
    let totale = 0;
    for (let n of numeri) {
        if (n > 5) {
            nArray.push(n);
            console.log(n);
            totale += n;
        }
    }
    return totale;
}
console.log(checkArray(giveMeRandom(6)));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let oggetto;
let totaleDovuto;
let shoppingCart = [
    { prezzo: 20, nome: 'maglietta', id: 1, quantity: 10 },
    { prezzo: 50, nome: 'jeans', id: 2, quantity: 15 },
    { prezzo: 80, nome: 'scarpe', id: 3, quantity: 20 }
];

function shoppingCartTotal(_nome, _quantity) {
    oggetto = shoppingCart.find(function (item) {
        return item.nome === _nome;
    });
    totaleDovuto = oggetto.prezzo * _quantity;
    return totaleDovuto;
}

console.log(shoppingCartTotal('jeans', 3));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let oggettoDaAggiungere;
let totaleProvvisorio;
let totale;
function addToShoppingCart(_nome, _quantity) {

    oggettoDaAggiungere = shoppingCart.find(function (item) {
        return item.nome === _nome;
    });

    totaleProvvisorio = shoppingCartTotal('jeans', 3);
    totale = oggettoDaAggiungere.prezzo * _quantity;

    totale = totale + totaleProvvisorio;

    return totale;
}

console.log(addToShoppingCart('maglietta', 5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

let oggettoCostoso;

function maxShoppingCart(shoppingCart) {

    oggettoCostoso = shoppingCart.reduce(function (prev, current) {
        //utilizzo l'operatore ternario per confrontare il prezzo precedente rispetto a quello corrente fin quando non trova quello più alto
        return (prev.prezzo > current.prezzo) ? prev : current
    });

    return oggettoCostoso;
}

console.log(maxShoppingCart(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

shoppingCart.push({ prezzo: 100, nome: 'felpa', id: 4, quantity: 100 })

function latestShoppingCart(arr) {
    return arr.pop();
}

let ultimoOggetto = latestShoppingCart(shoppingCart);
console.log(ultimoOggetto);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    let count = 0;
    while (true) {
        let randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        if (randomNumber > x) {
            count++;
        } else {
            count = 0;
        }
        if (count == 3) {
            break;
        }
    }
    return count;
}


console.log(loopUntil(4));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

console.log(average([1, 2, 3, 4, 'ciao', 5]));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/


function longest(arr) {
    let longestWord = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(longest(['ciao', 'epicode', 'biblioteca', 'benvenuto']));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {

    let isSpam = false;

    if (emailContent.indexOf("SPAM") !== -1 || emailContent.indexOf("SCAM") !== -1) {
        isSpam = true;
    }

    return isSpam;
}

console.log(antiSpam('Hai vinto un iphone SCAM SPAM'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

let data = new Date();
data.setDate(data.getDate() - 30);
function calcolaGiorni(data) {

    let dataOggi = new Date();

    differenzaInMillisecondi = dataOggi.getTime() - data.getTime();
    differenzaInGiorni = Math.floor(differenzaInMillisecondi / (24 * 60 * 60 * 1000));

    return differenzaInGiorni;

}

console.log(calcolaGiorni(data));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {

    let matrix = [];
    let indiceStr = new String();
    
    for (let i = 0; i < x; i++) {

        let row = [];

        for (let j = 0; j < y; j++) {

            indiceStr = i+''+j;

            console.log(indiceStr);

            row.push(indiceStr);
        }

        matrix.push(row);
    }

    return matrix;


}
console.log(matrixGenerator(3, 2));

/* SCRIVI QUI LA TUA RISPOSTA */

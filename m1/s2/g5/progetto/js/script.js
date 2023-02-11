let a = '';
let b = '';
let operatore = '';
let risultato;

const calcolatrice = {
    somma: function (a, b) {
        return a + b;
    },
    sottrazione: function (a, b) {
        return a - b;
    },
    divisione: function (a, b) {
        return a / b;
    },
    moltiplicazione: function (a, b) {
        return a * b;
    },
    potenza: function (a, b) {
        return Math.pow(a, b);
    },
    quadrato: function (a) {
        return Math.sqrt(a);
    },
    pigreco: function(){
        return Math.PI;
    }
};
function aggiungiSimbolo(elemento) {
    let simbolo = elemento.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    
    /* π deve necessariamente essere il primo bottone premuto per come ho impostato il codice
    dopo posso effettuare le varie operazioni*/ 
    if(simbolo.includes('π')){
        display.value=calcolatrice.pigreco();
    }else{
        display.value += simbolo;
    }    
};
/*function totale() {
    let display = document.querySelector("#display");
    display.value = eval(display.value);
}*/

function totale() {
    let display = document.querySelector("#display");
    let espressione = String(display.value);

    /* √ deve necessariamente essere il primo bottone premuto per come ho impostato il codice
    poi digito il numero e premendo uguale ottengo la radice*/    
    if (espressione.includes('√')) {
        for (i = 0; i < espressione.length; i++) {
            if (espressione[i] != '√') {
                a = espressione[i];
                console.log(a);
            } else {
                operatore += espressione[i-a.length];
                console.log(operatore);
            }
        }
    } else {

        for (i = 0; i < espressione.length; i++) {
            if ((espressione[i] == '+') || (espressione[i] == '-') || (espressione[i] == 'X') || (espressione[i] == '/') || (espressione[i] == '^')) {
                operatore = espressione[i];
                break;
            } else {
                a += espressione[i];
            }
        }
        b = espressione.substring(a.length + 1);
    }

    if (operatore == '+') {
        risultato = calcolatrice.somma(a, b);
    } else if (operatore == '-') {
        risultato = calcolatrice.sottrazione(a, b);
    } else if (operatore == 'X') {
        risultato = calcolatrice.moltiplicazione(a, b);
    } else if (operatore == '/') {
        risultato = calcolatrice.divisione(a, b);
    } else if (operatore == '^') {
        risultato = calcolatrice.potenza(a, b);
    } else if (operatore == '√') {
        risultato = calcolatrice.quadrato(a);
    }
    display.value = risultato;
};

function reset() {
    let display = document.querySelector("#display");
    display.value = '';
    a = '';
    b = '';
    operatore = '';
    espressione = '';
};


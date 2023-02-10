let a,b;
let risultato;

const calcolatrice = {
    somma: function(a,b) {
        return a + b;
    },
    sottrazione: function(a,b) {
        return a - b;
    },
    divisione:function(a,b) {
        return a / b;
    },
    moltiplicazione:function(a,b) {
        return a * b;
    }
};
function aggiungiSimbolo(elemento) {
    let simbolo = elemento.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    display.value += simbolo;
};
/*function totale() {
    let display = document.querySelector("#display");
    display.value = eval(display.value);
}*/
function totale() {
    let display = document.querySelector("#display");
    console.log(display.value);
    let numeri = display.value.split(/[!\s+-/*X]+/);
    a = Number(numeri[0]);
    b = Number(numeri[1]);

    let operazione = String(display.value);
    if(operazione.includes('+')){
        risultato=calcolatrice.somma(a,b);
    }else if(operazione.includes('-')){
        risultato=calcolatrice.sottrazione(a,b);
    }else if(operazione.includes('X')){
        risultato=calcolatrice.moltiplicazione(a,b);
    }else if(operazione.includes('/')){
        risultato=calcolatrice.divisione(a,b);
    }
    display.value =risultato;
};
function reset() {
    let display = document.querySelector("#display");
    display.value = '';
    console.log(display);
};


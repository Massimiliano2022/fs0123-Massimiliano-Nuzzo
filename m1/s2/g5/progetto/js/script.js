/*let a,b;*/
let a='';
let b='';
let operatore='';
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

    let espressione=String(display.value);
    for(i=0;i<espressione.length;i++){
        if((espressione[i]=='+')||(espressione[i]=='-')||(espressione[i]=='X')||(espressione[i]=='/')){
            operatore=espressione[i];
            break;
        }else{
            a += espressione[i];
        }
    }
    b = espressione.substring(a.length + 1);

    /*console.log(a);
    console.log(operatore);
    console.log(b);*/

    
    if(operatore =='+'){
        risultato=calcolatrice.somma(a,b);
    }else if(operatore=='-'){
        risultato=calcolatrice.sottrazione(a,b);
    }else if(operatore=='X'){
        risultato=calcolatrice.moltiplicazione(a,b);
    }else if(operatore=='/'){
        risultato=calcolatrice.divisione(a,b);
    }
    display.value =risultato;
};

function reset() {
    let display = document.querySelector("#display");
    display.value = '';
    a='';
    b='';
    operatore='';
    espressione='';
    
    /*console.log(display);
    console.log(a);
    console.log(b);
    console.log(operatore);
    console.log(espressione);*/
};


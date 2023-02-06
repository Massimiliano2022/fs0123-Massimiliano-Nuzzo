/*var nomeUtente = prompt("Come ti chiami?");
var anni = prompt("Inserisci la tua età :");

if(!(isNaN(anni))){
    //document.write(anni);
}else{
    document.write('Non hai inserito un numero. Sono accettati solo cifre all interno del prompt.');
}

document.write("Ciao " + nomeUtente + " hai " + anni + " anni.");*/

/*var anni = prompt('Inserisci la tua età:');

if(!(isNaN(anni))){
    if(anni>=18 && anni <=100){
        document.write('Sei maggiorenne.');
    }else if(anni>100){
        document.write('Non mentire!! Inserisci l eta corretta');
    }else{
        document.write('Sei ancora minorenne.');
    }
}else{
    document.write("Non hai inserito numeri. Devi inserire solo cifre in questo prompt.");
}*/

/*var condizione = true;

console.log(condizione);
console.log(typeof(condizione));

if(!condizione){
    document.write('la condizione è vera, ma non viene stamapata perchè il controllo verifica se la condizione è falsa in questo momento');
}else{
    document.write('la condizione è falsa.')
}*/

/*var numero = '3';

document.write(typeof numero);*/


var anni;

do{
    anni = prompt('Inserisci la tua età:');

    document.write(anni+'<br>');

    if(anni >= 18 && anni < 100 ){
        document.write('Sei maggiorenne');
    }else if(anni > 100){
        document.write('Non mentire! Inserisci la tua vera età!');
    }
    else{
        document.write('Sei ancora minorenne');
    }
}while(isNaN(anni));
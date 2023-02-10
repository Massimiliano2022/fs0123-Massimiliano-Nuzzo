function aggiungiSimbolo(elemento) {
    let simbolo = elemento.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    display.value += simbolo;
}
function totale() {
    let display = document.querySelector("#display");
    display.value = eval(display.value);
}
function reset() {
    let display = document.querySelector("#display");
    display.value = '';
    console.log(display);
}
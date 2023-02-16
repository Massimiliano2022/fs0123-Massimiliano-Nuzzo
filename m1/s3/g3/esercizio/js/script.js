
let arrTask = [];

class Attivita {
    constructor(_nome) {
        this.nome = _nome;
        this.isCompleta = false;
    }

    creaDiv() {

        let div = document.createElement('div');//creo elemento div
        div.classList.add('task-item');// aggiungo al div la classe task-item

        let nomeAttivita = document.createElement('p'); //creo un paragrafo 
        nomeAttivita.textContent = this.nome; // assegno il nome dell'Attivita al contenuto del paragrafo

        div.appendChild(nomeAttivita); // l'elemento nomeAttivita (p) viene aggiunto all'interno del parent div.task-item

        let divButton = document.createElement('div'); //creo un nuovo div
        divButton.classList.add('button'); //assegno al div appena creato la classe button
        
        div.appendChild(divButton) // il divButton viene aggiunto all'interno del parent div

        let rimuoviButton = document.createElement('button'); //creo il bottone per la funzione rimuoviTask
        rimuoviButton.textContent = '✘'; //assegno il valore al bottone
        rimuoviButton.setAttribute('onclick', 'rimuoviTask(this.parentNode.parentNode)'); // aggiungo proprieta al bottone (onClick). this.parentNode.parentNode viene utilizzato per accedere all'elemento "nonno" dell'elemento su cui viene chiamato il metodo rimuoviTask().
        divButton.appendChild(rimuoviButton); //il bottone viene aggiunto all'interno del divButton

        let completaButton = document.createElement('button'); // creo un nuovo bottone completaButton
        completaButton.textContent = '✔';// assegno il valore al bottone
        completaButton.setAttribute('onclick', 'completaTask(this.parentNode.parentNode)'); //stesso concetto di rimuoviButton
        divButton.appendChild(completaButton); //inserisco il bottone all'interno del div button

        document.querySelector('.task-list').appendChild(div); // il div con classe task-item creato in linea 13 è figlio del div task-list
    }
}

function aggiungiTask() {
    let inputTask = document.querySelector('#to-do');
    if (inputTask.value != '') {
        let task = new Attivita(inputTask.value);
        arrTask.push(task);
        console.log(arrTask);
        task.creaDiv();
    }
    inputTask.value = '';
}

function rimuoviTask(div) {
    for (let task of arrTask) {
        if (div.textContent.includes(task.nome)) {
            arrTask.splice(arrTask.indexOf(task), 1);
            div.remove();
            break;
        }
    }
}
function completaTask(divButton) {
    for (let task of arrTask) {
        if (divButton.textContent.includes(task.nome)) { 
            if(!task.isCompleta){ //se task.isCompleta == false
                task.isCompleta = true;
                divButton.querySelector('p').style.textDecoration = 'line-through';
            }else{ // altrimenti se è gia true e ho sbagliato perchè l'attività non l'ho ancora svolta 
                task.isCompleta=false;
                divButton.querySelector('p').style.textDecoration = 'none';
            }
        }
    }
}
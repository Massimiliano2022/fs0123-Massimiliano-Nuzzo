
let arrTask = [];

class Attivita {
    constructor(_nome) {
        this.nome = _nome;
        this.isCompleta = false;
    }

    creaDiv() {

        let div = document.createElement('div');
        div.classList.add('task-item');

        let nomeAttivita = document.createElement('p');
        nomeAttivita.textContent = this.nome;

        div.appendChild(nomeAttivita);

        let divButton = document.createElement('div');
        divButton.classList.add('button');
        
        div.appendChild(divButton)

        let rimuoviButton = document.createElement('button');
        rimuoviButton.textContent = '✘';
        rimuoviButton.setAttribute('onclick', 'rimuoviTask(this.parentNode.parentNode)');
        divButton.appendChild(rimuoviButton);

        let completaButton = document.createElement('button');
        completaButton.textContent = '✔';
        completaButton.setAttribute('onclick', 'completaTask(this.parentNode.parentNode)');
        divButton.appendChild(completaButton);

        document.querySelector('.task-list').appendChild(div);
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
            task.isCompleta = true;
            divButton.querySelector('p').style.textDecoration = 'line-through';
        }
    }
}
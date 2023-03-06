const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
        indice: 0
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
        indice: 1
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "hard",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 2
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "medium",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 3
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
        indice: 4
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
        indice: 5
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
        indice: 6
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
        indice: 7
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "medium",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 8
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
        indice: 9
    },
];

let titoloDomanda = document.getElementById('domanda');
let risposteBtns = document.getElementsByClassName('risposta-btn');

let questionsOriginale = [...questions];

const numeroDomandeTotale = questions.length;

let risposteUtente = [];
let timerId;

let domandaObj;

let selectedBtn = null;

let contatoreDomande = 0;

let numRand;

let titolo;

let tempo;

function checkPromise() {

    let promise = document.getElementById('promise');
    let divForm = document.getElementById('input');
    let paragrafoErrore = document.createElement('p');
    if (promise.checked) {
        mostraTimer();
        nascondiWelcomePage();
        mostraQuiz();
        selezionaDomanda(questions);
    } else {
        paragrafoErrore.textContent = 'You must accept the conditions to proceed with the quiz.'
        paragrafoErrore.classList.add('colore-viola');
        divForm.appendChild(paragrafoErrore);
    }
}

function selezionaDomanda(questions) {

    clearInterval(timerId);

    numRand = Math.floor(Math.random() * questions.length);

    domandaObj = questions[numRand];

    titolo = domandaObj.question;

    titoloDomanda.innerHTML = titolo;

    contatoreDomande++;

    document.getElementById('nDomanda').innerHTML = 'QUESTION ' + contatoreDomande + '<span>/' + numeroDomandeTotale + '</span>';

    generaBottoniRisposta(domandaObj);

    for (let i = 0; i < risposteBtns.length; i++) {
        risposteBtns[i].addEventListener('click', function (event) {
            if (selectedBtn) {
                selectedBtn.removeAttribute('id');
            }
            event.target.id = 'selected';
            selectedBtn = event.target;
        });
    }

    if (domandaObj.difficulty == 'easy') {
        tempo = 30;
    } else if (domandaObj.difficulty == 'medium') {
        tempo = 45;
    } else {
        tempo = 60;
    }

    let timerParag = document.getElementById('timer-sec');
    timerParag.innerHTML = tempo;

    let paragrafiTestoSecondi = document.getElementsByClassName('testo-secondi');
    let referenceElement = paragrafiTestoSecondi[0];

    referenceElement.parentNode.insertBefore(timerParag, referenceElement.nextSibling);

    timerId = setInterval(function () {
        tempo--;
        timerParag.innerHTML = tempo;
        if (tempo <= 0) {
            clearInterval(timerId);
            confermaRisposta();
        }
    }, 1000);
}
function generaBottoniRisposta(domandaObj) {

    let pDomanda = document.getElementById('domanda');

    let risposte = [...domandaObj.incorrect_answers, domandaObj.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    for (let i = 0; i < risposte.length; i += 2) {

        let container = document.createElement('div');
        container.classList.add('risposte-quiz');

        for (let j = i; j < i + 2; j++) {
            const rispostaBtn = document.createElement('button');
            rispostaBtn.innerHTML = risposte[j];
            rispostaBtn.classList.add('risposta-btn');
            container.appendChild(rispostaBtn);
        }

        pDomanda.appendChild(container);

    }

}
function confermaRisposta() {

    let rispostaSelezionata = document.querySelector('.risposta-btn#selected');

    let valoreRisposta;
    if (rispostaSelezionata === null) {
        valoreRisposta = '';
    } else {
        valoreRisposta = rispostaSelezionata.innerHTML;
    }

    let risposta = {
        indice: domandaObj.indice,
        valore: valoreRisposta
    };

    if (rispostaSelezionata) {

        risposteUtente.push(risposta);

        rispostaSelezionata.classList.remove('selected');

    } else {
        risposteUtente.push(risposta);
    }

    eliminaDomanda(domandaObj);

    if (contatoreDomande != numeroDomandeTotale) {
        selezionaDomanda(questions);
    } else {
        calcolaPunteggio(risposteUtente);
    }
}

function eliminaDomanda(domandaObj) {
    if (questions.includes(domandaObj)) {
        questions.splice(questions.indexOf(domandaObj), 1);
    }
}

function calcolaPunteggio(risposteUtente) {

    let percCorrette;
    let percSbagliate;

    console.log(questionsOriginale);

    clearInterval(timerId);

    let indiceRisposta;
    let valoreRisposta;

    let punteggio = 0;

    for (let i = 0; i < risposteUtente.length; i++) {
        indiceRisposta = risposteUtente[i].indice;
        valoreRisposta = risposteUtente[i].valore;

        console.log(indiceRisposta);
        console.log(valoreRisposta);

        if (valoreRisposta == questionsOriginale[indiceRisposta].correct_answer) {
            punteggio++;
        }

    }

    percCorrette = punteggio * 10;
    percSbagliate = (10 - punteggio) * 10;

    nascondiQuiz();
    nascondiTimer();
    mostraResult();
    mostraPunteggio(percCorrette, percSbagliate);

}

function mostraTimer() {
    let element = document.querySelector("#timer");
    element.style.display = "flex";
}
function nascondiWelcomePage() {
    let element = document.querySelector("#sezione-principale");
    element.style.display = "none";
    element.innerHTML = '';
}
function mostraQuiz() {
    let element = document.querySelector("#sezione-quiz");
    element.style.display = "flex";
}

function nascondiQuiz() {
    let element = document.querySelector("#sezione-quiz");
    element.style.display = "none";
    element.innerHTML = '';
}
function mostraResult() {
    let element = document.querySelector("#sezione-result");
    element.style.display = "flex";
}
function nascondiTimer() {
    let element = document.querySelector("#timer");
    element.style.display = "none";
}

function mostraPunteggio(percCorrette, percSbagliate) {

    let circleBarProgressConfig = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percSbagliate, percCorrette], // percentuali di completamento e incompletamento della barra
                backgroundColor: [
                    '#C2128D', // colore della parte completata
                    '#00FFFF' // colore della parte incompleta
                ],
                borderWidth: 0, // spessore del bordo del grafico
                cutout: '80%' // dimensioni del foro centrale della circle bar progress
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            //cutoutPercentage: 80,
            cutoutPercentage: 85,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            tooltips: {
                enabled: false
            },
            hover: {
                mode: null
            }
        }
    };

    let circleBarProgressCanvas = document.getElementById('circle-bar-progress');
    let circleBarProgress = new Chart(circleBarProgressCanvas, circleBarProgressConfig);

    let divTesto = document.getElementById('circle-bar-progress-value');
    console.log(divTesto);
    console.log(divTesto.innerHTML);

    let pTitle = document.createElement('p');
    let pSubTitle = document.createElement('p');
    let pCertificato = document.createElement('p');
    let pCheck = document.createElement('p');

    pSubTitle.classList.add('coloreBlu');
    pCertificato.classList.add('paragrafi-small');
    pCheck.classList.add('paragrafi-small');

    divTesto.appendChild(pTitle);
    divTesto.appendChild(pSubTitle);
    divTesto.appendChild(pCertificato);
    divTesto.appendChild(pCheck);


    if (percCorrette >= 50) {
        pTitle.innerHTML = 'Congratulations!';
        pSubTitle.innerHTML = 'You passed the exam.';
        pCertificato.innerHTML = `We'll send you the certificate in few minutes`;
        pCheck.innerHTML = 'Check your email (including promotions / spam folder)';
    } else {
        pTitle.innerHTML = 'Oh no!';
        pSubTitle.innerHTML = 'You failed the exam.';
        pCertificato.innerHTML = `We'll not send you the certificate in few minutes`;
        pCheck.innerHTML = `Don't check your email!You are a goat!!! GOAT GOAT`;
    }


    let paragPercCorrect = document.getElementById('corrette-percentuale');
    paragPercCorrect.innerHTML = percCorrette + '%';

    let paragPercWrong = document.getElementById('sbagliate-percentuale');
    paragPercWrong.innerHTML = percSbagliate + '%';

    let pCorretteQuestion = document.getElementById('corrette-question');
    pCorretteQuestion.innerHTML = percCorrette / 10 + '/' + numeroDomandeTotale + ' questions';

    let pSbagliateQuestion = document.getElementById('sbagliate-question');
    pSbagliateQuestion.innerHTML = percSbagliate / 10 + '/' + numeroDomandeTotale + ' questions';

}

function votaci() {
    window.location.href = "review.html";
}
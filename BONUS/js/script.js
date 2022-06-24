// Svolgere entrambi gli esercizi con la stessa logica ma lavorare con il DOM per stampare i risultati.
// Provare a prendere la mail dell'utente da un input e fare la verifica dopo aver cliccato su un bottone
// CSS a piacimento

// MAIL

const autorizedMails = ['boolean@1.com', 'boolean@2.com', 'boolean@3.com', 'boolean@4.com', 'boolean@5.com'];
const userMailPanel = document.getElementById('user-mail')
const validateButton = document.getElementById('validate-button')
const confirmAlert = document.getElementById('confirm-message')

validateButton.addEventListener('click', function () {
    const mailValue = userMailPanel.value


    if (autorizedMails.includes(mailValue)) {
        confirmAlert.innerText = `ACCESSO AUTORIZZATO`
    } else {
        confirmAlert.innerText = `ACCESSO NEGATO`
    }

})


// -----------------------------------------------------------


// DADI


const diceRoller = document.getElementById('dice-roller');
const userResult = document.getElementById('user-result');
const cpuResult = document.getElementById('cpu-result');
const resultBanner = document.getElementById('disclaimer');


diceRoller.addEventListener('click', function () {

    const cpuNumber = Math.round(Math.random() * 5 + 1);
    const userNumber = Math.round(Math.random() * 5 + 1);
    userResult.innerText = `IL TUO NUMERO É ${userNumber}`
    cpuResult.innerText = `IL NUMERO DEL CPU É ${cpuNumber}`

    if (cpuNumber > userNumber) {
        resultBanner.innerText = `HAI PERSO `

    } else if (cpuNumber < userNumber) {
        resultBanner.innerText = `HAI VINTO `

    } else {
        resultBanner.innerText = `PAREGGIO `

    }
})





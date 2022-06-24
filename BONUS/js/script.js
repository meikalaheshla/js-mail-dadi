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




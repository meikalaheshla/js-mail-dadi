// Svolgere entrambi gli esercizi con la stessa logica ma lavorare con il DOM per stampare i risultati.
// Provare a prendere la mail dell'utente da un input e fare la verifica dopo aver cliccato su un bottone
// CSS a piacimento

// MAIL

const autorizedMails = ['boolean@1.com', 'boolean@2.com', 'boolean@3.com', 'boolean@4.com', 'boolean@5.com'];
const userMail = prompt('Inserire mail Autorizzata', 'boolean@1.com');

if (autorizedMails.includes(userMail)) {
    console.log('Benvenuto');
} else {
    console.log('Spiacenti');
}
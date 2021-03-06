// Mail
// Crea (inventa) una lista di inidirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS:
// Svolgere entrambi gli esercizi con la stessa logica ma lavorare con il DOM per stampare i risultati.
// Provare a prendere la mail dell'utente da un input e fare la verifica dopo aver cliccato su un bottone
// CSS a piacimento



// MAIL
console.log('MAIL')

const autorizedMails = ['boolean@1.com', 'boolean@2.com', 'boolean@3.com', 'boolean@4.com', 'boolean@5.com'];
const userMail = prompt('Inserire mail Autorizzata', 'boolean@1.com');

if (autorizedMails.includes(userMail)) {
    console.log('Benvenuto');
} else {
    console.log('Spiacenti');
}
console.log('-----------------------------------------------------------------------------------------------------')
console.log('DADI')

// DADI
const cpuNumber = Math.round(Math.random() * 5 + 1);
const userNumber = Math.round(Math.random() * 5 + 1);
console.log(`IL COMPUTER HA LANCIATO UN DATO E HA FATTO ${cpuNumber}`)
console.log(`HAI LANCIATO UN DADO E HAI FATTO ${userNumber}`)

if (cpuNumber > userNumber) {
    console.log('YOU LOSE')
} else if (cpuNumber < userNumber) {
    console.log('YOU WIN')
} else {
    console.log('DRAW')
}





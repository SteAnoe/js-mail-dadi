// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// MAIL

const mail = prompt("Inserisci il tuo indirizzo email: ");

let mails = ["1@gmail.com, 2@gmail.com, 3@gmail.com, 4@gmail.com"];

console.log(mails);

if (mails.includes(mail)) {
    console.log("Email inserito correttamente.");
} else {
    console.log("Email inserito non correttamente.");
}
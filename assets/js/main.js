// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// MAIL

const mail = prompt("Per giocare a dadi, inserisci il tuo indirizzo email: ");
let mails = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com"];
let container = document.getElementById("contenitore");
let testo = document.createElement("h1");
container.append(testo);


if (mails.includes(mail)) {
    testo.textContent = "Email inserito correttamente! :)";
} else {
    testo.textContent = "Email inserito non correttamente, ma puoi giocare da non registrato";
}


// DADI

function dado(){
    let dado = Math.floor(Math.random() * 6) + 1;
    let dadoPC = Math.floor(Math.random() * 6) + 1;
    console.log(dado);
    console.log(dadoPC);
    let box = document.querySelector("#risultato");
    let score = document.createElement("h2");
    box.append(score);
    

    if (dado > dadoPC) {
        console.log("hai vinto");
        score.textContent = "Hai vinto";
        
    } else if (dado < dadoPC) {
        console.log("hai perso");
        score.textContent = "Hai perso";
        
    } else {
        console.log("hai pareggiato");
        score.textContent = "Hai pareggiato";
        
    }
    
}
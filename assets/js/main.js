// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// MAIL

let mails = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com"];
let container = document.getElementById("contenitore");
let testo = document.createElement("h3");

function clickMail(){
    let mail = document.getElementById('posta').value;
    container.append(testo);
    testo.classList.add("mt-1");
    let x = false;

    for(let i = 0; i < mails.length; i++){
        if (mails[i] == mail){
            x = true; 
        }
    }

    if ( x ){
        testo.textContent = 'Mail già presente, puoi iniziare a giocare';
        console.log(mails);
    } else {
        mails.push(mail);
        testo.textContent = 'Email registrata correttamente, puoi iniziare a giocare';
        console.log(mails);
    }

}

// DADI

function dado(){
    let dado = Math.floor(Math.random() * 6) + 1;
    let dadoPC = Math.floor(Math.random() * 6) + 1;
    console.log(dado);
    console.log(dadoPC);
    let box = document.querySelector("#risultato");
    
    if (dado > dadoPC) {
        console.log("hai vinto");
        box.textContent = `Hai vinto. ${dado} vs ${dadoPC}`;
        
    } else if (dado < dadoPC) {
        console.log("hai perso");
        box.textContent = `Hai perso. ${dado} vs ${dadoPC}`;
        
    } else {
        console.log("hai pareggiato");
        box.textContent = `Hai pareggiato. ${dado} vs ${dadoPC}`;
        
    }
    
}
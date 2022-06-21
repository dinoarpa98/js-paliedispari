// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let paridispari = prompt("scegli pari o dispari");
let scelta = parseInt(prompt ("scegli un numero da 1 a 5"));




let numeroPC = RandomNumber(5);
console.log (numeroPC);

function RandomNumber(x) {
    
    let randomizer = Math.floor(Math.random() * x) + 1;
    
    return randomizer;
    
} 


let risultato = numeroPC + scelta;

if ( numeroPC + scelta % 2 == 0) {
    console.log("hai vinto");
}

else (numeroPC + scelta % 2 != 1)
{
    console.log("hai perso");
}

let parole = prompt ("Inserisci una parola");

function parolareverse (pali) {
    return pali.split ("").reverse().join("");
}

if (parole == parolareverse(parole)){
    document.getElementById("stamp").innerHTML = `${parole} palindroma`
} else {
    document.getElementById("stamp").innerHTML = `${parole} non è palindroma`
}

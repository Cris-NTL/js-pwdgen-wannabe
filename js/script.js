// Chiedi all’utente il suo nome
const firstName = prompt ("Hey! Inserisci il tuo nome");
console.log(firstName);

// Chiedi il suo cognome
const lastName = prompt ("Adesso inserisci anche il tuo cognome")
console.log(lastName);

// Chiedi il suo colore preferito
const favColour = prompt ("Dicci il tuo colore preferito")
console.log(favColour);

// Variabile numerica
const randomNumber = 21;

// Password
const userPass = firstName + lastName + randomNumber;
console.log (userPass);

// Messaggio passoword
const message = `La tua password: ${userPass}`;
console.log(message);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("userPass").innerHTML = message;
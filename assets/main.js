// Chiedi all'utente il suo nome,
//     -prompt(`chiedere il nome:...`)
// poi chiedi il suo cognome,
//     -prompt (`chiedere il cognome:.....`)
// poi chiedi il suo colore preferito
//     -prompt (`chiedere il colore:...`)
// Infine scrivi sulla pagina "la tua password è nomecognomepreferito21"
//     - il 21 è un numero a vostra SpeechRecognitionAlternative
//     - getElementById().innerHTML = "...valore password..."
//    `la tua password è: ${nome}${colore}{}`


let Name = prompt(`Write your name`);
let surname = prompt(`Write your surname`);
let favoriteColor = prompt(`Write your favorite color`);

let passwordUser = Name + surname + favoriteColor;
console.log(passwordUser)

let frase = `Your new password is: ${passwordUser}`

document.getElementById(`newPassword`).innerHTML += 
`Your new password is: ${Name + surname + favoriteColor}23  🐲`
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

let nome = prompt(`Scrivi il tuo nome`);
let cognome = prompt(`Scrivi il tuo cognome`);
let colorePreferito = prompt(`Scrivi il tuo colore preferito`)

let passwordUtente = nome + cognome + colorePreferito;
console.log(passwordUtente)

let frase = `la tua password è ${passwordUtente}`

document.getElementById(`nuovaPassword`).innerHTML = 
`la tua nuova password è ${nome + cognome + colorePreferito}23`
// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

//     o primeiro nome
//     o sobrenome
//     o campo de estudo
//     o ano de nascimento

//     Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento)

let name = prompt("Digite o seu primeiro nome: ")
let surname = prompt("Digite o seu último nome: ")
let study = prompt("Digite o seu campo de estudo: ")
let year = prompt("Digite o ano em que você nasceu: ")

alert(
    "Nome completo: " + name + " " + surname +
    "\nCampo de estudo: " + study +
    "\nIdade: " + (2023 - year)
)
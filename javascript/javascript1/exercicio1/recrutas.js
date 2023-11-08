// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

//     o primeiro nome
//     o sobrenome
//     o campo de estudo
//     o ano de nascimento

//     Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento)

let name = prompt("Digite o seu Primeiro Nome:")
let sobrenome = prompt("Digite o seu Último Nome:")
let campoDeEstudo = prompt("Digite o seu Campo de Estudo:")
let ano = prompt ("Digite o ano do seu nascimento:")

alert(
    "\nNome Completo: " + name + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo + 
    "\nIdade: " + (2023 - ano)
)
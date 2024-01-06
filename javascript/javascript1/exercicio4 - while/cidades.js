// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const name = prompt("Digite o seu nome: ")
let cities = ""
let cont = 0

let visit = prompt("Você já visitou alguma cidade? (S/N)")

while (visit === "S"){
    let cidade = prompt("Qual é o nome da cidade? ")
    cities += " - " + cidade + "\n"
    cont++
    visit = prompt("Você já visitou mais alguma cidade? (S/N)")
}

alert(
    "Nome do turista: " + name +
    "\nQuantidade de cidades visitadas: " + cont +
    "\nCidades visitadas: " + "\n" + cities
)
//Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const name1 = prompt("Digite o nome do primeiro veículo: ")
const velocidade1 = prompt("Digite a velocidade do primeiro veículo: ")
const name2 = prompt("Digite o nome do segundo veículo: ")
const velocidade2 = prompt("Digite a velocidade do segundo veículo: ")

const vel1 = parseFloat (velocidade1)
const vel2 = parseFloat (velocidade2)

if (vel1 > vel2) {
    alert("A velocidade do primeiro veículo é maior")
} else if (vel1 < vel2) {
    alert("A velocidade do segundo veículo é maior")
} else {
    alert("Os dois veículos estão na mesma velocidade")
}
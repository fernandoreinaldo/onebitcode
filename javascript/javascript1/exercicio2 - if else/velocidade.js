//Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const name1 = prompt("Digite o nome do primeiro veículo: ")
const vel1 = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))
const name2 = prompt("Digite o nome do segundo veículo: ")
const vel2 = parseFloat(prompt("Digite a velocidade do segundo veículo: "))


// if (vel1 > vel2) {
//     alert("A velocidade do primeiro veículo é maior")
// } else if (vel1 < vel2) {
//     alert("A velocidade do segundo veículo é maior")
// } else {
//     alert("Os dois veículos estão na mesma velocidade")
// }

vel1 > vel2 ? alert("O(A) " + name1 + " é mais rápido(a) que o(a) " + name2) : vel1 < vel2 ? alert("O(A) " + name2 + " é mais rápido(a) que o(a) " + name1) : alert("A velocidade é igual")
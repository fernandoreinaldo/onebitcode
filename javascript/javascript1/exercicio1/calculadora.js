// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
// Após calcular os resultados o programa deve exibi-los na tela.

const numero1 = prompt("Digite o primeiro valor:")
const numero2 = prompt("Digite o segundo valor:")

const num1 = parseFloat(numero1)
const num2 = parseFloat(numero2)

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

alert(
    "Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)
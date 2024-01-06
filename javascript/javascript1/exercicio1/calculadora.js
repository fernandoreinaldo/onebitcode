// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
// Após calcular os resultados o programa deve exibi-los na tela.

const num1 = parseFloat(prompt("Digite o primeiro valor: "))
const num2 = parseFloat(prompt("Digite o segundo valor: "))

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
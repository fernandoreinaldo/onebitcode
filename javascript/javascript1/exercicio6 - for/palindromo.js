// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

const word = prompt("Informe a palavra desejada: ")
let inverseWord = ""

for (let i = word.length - 1; i >= 0; i--) {
    inverseWord += word[i]
}

if (word === inverseWord){
    alert(word + " é um palíndromo ")
} else {
    alert(word + " não é um palíndromo\n\n" +
    word + " x " + inverseWord)
}
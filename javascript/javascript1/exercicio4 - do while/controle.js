 // Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let money = parseFloat(prompt("Quanto dinheiro você tem?"))
let option = prompt("TOTAL: " + money + "\n----------" + "\nEscolha uma opção: \n1 - Adicionar \n2 - Remover \n3 - Sair")
let total = money

do {
    switch (option) {
        case "1":
            let add = parseFloat(prompt("Quanto você quer adicionar?"))
            total += add
            option = prompt("TOTAL: " + total + "\n----------" + "\nEscolha uma opção: \n1 - Adicionar \n2 - Remover \n3 - Sair")
            break
        case "2":
            let remove = parseFloat(prompt("Quanto você quer remover?"))
            total -= remove
            option = prompt("TOTAL: " + total + "\n----------" + "\nEscolha uma opção: \n1 - Adicionar \n2 - Remover \n3 - Sair")
            break
    }
} while (option != "3")
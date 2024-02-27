// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

const pilhaCartas = []
let option = ""

do {
    let cont = ""
    for (let i = 0; i < pilhaCartas.length; i++) {
        cont++
    }

    option = prompt("Quantidade de cartas: " + "\n" + cont + "\n\nEscolha uma opção: \n1 - Adicionar uma carta \n2 - Puxar uma carta \n3 - Sair")

    switch (option) {
        case "1":
            const newCard = prompt("Qual é o nome da carta a ser adicionada?")
            pilhaCartas.push(newCard)
            alert(newCard)
            break
        case "2":
            const offCard = pilhaCartas.pop()
            alert("Carta removida: " + offCard)
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }
} while (option !== "3")
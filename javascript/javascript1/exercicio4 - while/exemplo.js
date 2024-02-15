// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let option = prompt("Escolha uma opção: \n1 - Opção Um \n2 - Opção Dois \n3 - Opção Três \n4 - Opção Quatro \n5 - Encerrar")

do {
    switch (option) {
        case "1":
            alert("Opção Um")
            option = prompt("Escolha uma opção: \n1 - Opção Um \n2 - Opção Dois \n3 - Opção Três \n4 - Opção Quatro \n5 - Encerrar")
            break
        case "2":
            alert("Opção Dois")
            option = prompt("Escolha uma opção: \n1 - Opção Um \n2 - Opção Dois \n3 - Opção Três \n4 - Opção Quatro \n5 - Encerrar")
            break
        case "3":
            alert("Opção Três")
            option = prompt("Escolha uma opção: \n1 - Opção Um \n2 - Opção Dois \n3 - Opção Três \n4 - Opção Quatro \n5 - Encerrar")
            break
        case "4":
            alert("Opção Quatro")
            option = prompt("Escolha uma opção: \n1 - Opção Um \n2 - Opção Dois \n3 - Opção Três \n4 - Opção Quatro \n5 - Encerrar")
            break
    }
} while (option != "5")

alert("ENCERRANDO...")
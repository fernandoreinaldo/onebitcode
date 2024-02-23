// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).

// O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

const filaEspera = []
let option = ""

// let option = prompt("Lista de Espera: " + "\n" + filaEspera + "\n\nEscolha uma opção: \n1 - Novo Paciente \n2 - Consultar Paciente \n3 - Sair")

do {
    let patients = ""
    for (let i = 0; i < filaEspera.length; i++) {
        patients += (i + 1) + "° - " + filaEspera[i] + "\n"
    }

    option = prompt("Lista de Espera: " + "\n" + patients + "\n\nEscolha uma opção: \n1 - Novo Paciente \n2 - Consultar Paciente \n3 - Sair")

    switch (option) {
        case "1":
            const newPacient = prompt("Qual é o nome do paciente?")
            filaEspera.push(newPacient)
            break
        case "2":
            const consultPacient = filaEspera.shift()
            alert("Paciente consultado: " + consultPacient)
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

} while (option !== "3")
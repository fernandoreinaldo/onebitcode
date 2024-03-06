// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do  proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

const imoveis = []
let option = ""

do {
    option = prompt("Total de Imóveis: " + "\n" + imoveis.length + "\n\nEscolha uma opção: \n1 - Novo Imóvei \n2 - Lista de Imóveis \n3 - Sair")

    switch (option) {
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Informe a quantidade de quartos no imóvel: ")
            imovel.banheiros = prompt("Informe a quantidade de banheiros no imóvel: ")
            imovel.garagem = prompt("Informe se o imóvel possui garagem: (S/N) ")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem)

            if (confirmacao) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel" + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuantidade de quartos: " + imoveis[i].quartos +
                    "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem)
            }
            break
        case "3":
            alert("Saindo...")
        default:
            alert("Opção Inválida")
    }

} while (option !== "3")